package com.blockempires.webstats;

import com.blockempires.webstats.components.Empire;
import com.blockempires.webstats.controllers.BaseController;
import com.blockempires.webstats.repositories.EmpireRepository;
import com.blockempires.webstats.repositories.PlayerRepository;
import org.apache.commons.io.FileUtils;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.HashMap;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class BlockEmpiresWebStatsApplicationTests {

	@Autowired
	private PlayerRepository playerRepository;

	@Autowired
	private EmpireRepository empireRepository;

	@Autowired
	private TestRestTemplate restTemplate;

	@Autowired
	private BaseController baseController;

	@LocalServerPort
	private int port;

	@Test
	void contextLoads() {
		assertThat(playerRepository).isNotNull();
		assertThat(empireRepository).isNotNull();
		assertThat(baseController).isNotNull();
	}

	@Test
	void controllerSendsIndex() throws IOException {
		String index = getIndexContents();

		assertThat(restTemplate.getForObject(URL(""), String.class)).isEqualTo(index);
		assertThat(restTemplate.getForObject(URL("player/test"), String.class)).isEqualTo(index);
		assertThat(restTemplate.getForObject(URL("api/"), String.class)).isNotEqualTo(index);
	}

	@Test
	void playerRepositoryQueries() {
		assertThat(playerRepository.findPlayerByUsername("dillyg10")).isNotNull();
		assertThat(playerRepository.findPlayerByUsername("null")).isNull();
		assertThat(playerRepository.findPlayersByEmpireIdEquals(3L).size()).isEqualTo(2);
		assertThat(playerRepository.findPlayersByEmpireIdEquals(99L).size()).isEqualTo(0);
		assertThat(playerRepository.findPlayersByUsernameLike("%illy%", Pageable.unpaged()).getSize()).isEqualTo(1);
		assertThat(playerRepository.findPlayersByUsernameLike("%NULL%", Pageable.unpaged()).getSize()).isEqualTo(0);
		assertThat(playerRepository.getAllByOrderByEloDesc(Pageable.unpaged()).get().findFirst().orElse(null).getUsername()).isEqualTo("Axon");
	}

	@Test
	void empireRepositoryQueries(){
		assertThat(empireRepository.findEmpireByName("the_boys")).isNotNull();
		assertThat(empireRepository.findEmpireByName("null")).isNull();
		assertThat(empireRepository.findEmpiresByDisplayNameLike("%he B%", Pageable.unpaged()).getSize()).isEqualTo(1);
		assertThat(empireRepository.findEmpiresByDisplayNameLike("NULL", Pageable.unpaged()).getSize()).isEqualTo(0);
		assertThat(empireRepository.getAllByOrderByEloDesc(Pageable.unpaged()).get().findFirst().orElse(null).getName()).isEqualTo("raiders");
	}

	private String URL(String path) {
		return "http://localhost:"+port+"/"+path;
	}


	private String getIndexContents() throws IOException {
		return FileUtils.readFileToString(new File("src/main/resources/templates/index.html"), Charset.defaultCharset());
	}

}
