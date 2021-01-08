package com.blockempires.webstats.dataloaders;

import com.blockempires.webstats.components.Empire;
import com.blockempires.webstats.components.Player;
import com.blockempires.webstats.repositories.EmpireRepository;
import com.blockempires.webstats.repositories.PlayerRepository;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.UUID;

/**
 * This class is used to set up an initial environment for data to load
 *
 * Eventually this will be phased out as other resources will populate our repository.
 */
@Component
public class DefaultDataLoader implements CommandLineRunner {

    private PlayerRepository playerRepository;
    private EmpireRepository empireRepository;

    @Autowired
    public DefaultDataLoader(PlayerRepository playerRepository, EmpireRepository empireRepository) {
        this.playerRepository = playerRepository;
        this.empireRepository = empireRepository;
    }


    @Override
    public void run(String... args) throws Exception {
        Empire raiders = new Empire("raiders",
                "Raiders",
                base64("raiders"),
                3,
                1,
                2000,
                9,
                5,
                11,
                23,
                10,
                29,
                1),
                theBoys = new Empire("the_boys",
                        "The Boys",
                        base64("the_boys"),
                        1,
                        2,
                        200,
                        2,
                        0,
                        0,
                        0,
                        0,
                        2,
                        2),
                fortressDilly = new Empire(
                        "fortress_dilly",
                        "Fortress Dilly",
                        base64("fortress_dilly"),
                        2,
                        5,
                        1500,
                        5,
                        2,
                        10,
                        3,
                        9,
                        3,
                        1
                );

        this.empireRepository.save(raiders);
        this.empireRepository.save(theBoys);
        this.empireRepository.save(fortressDilly);

        this.playerRepository.save(new Player("dillyg10",
                "EMPORER",
                fortressDilly.getId(),
                100,
                2,
                50,
                "4d46e0ab-db69-4c7a-9ade-5774a304720f",
                LocalDateTime.now(),
                10,
                5,
                1,
                10,
                12,
                1,
                1,
                4));

        this.playerRepository.save(new Player("RingOfStorms",
                "MEMBER",
                fortressDilly.getId(),
                1003,
                9,
                90,
                "fe5b7d3e-73d9-4587-8b6f-743e5edf8e7f",
                LocalDateTime.now(),
                7,
                23,
                4,
                19,
                4,
                3,
                2,
                4));

        this.playerRepository.save(new Player("insanehero",
                "EMPORER",
                null,
                100,
                9,
                90,
                "f3827a52-0820-4219-8111-87f5c8499c34",
                LocalDateTime.now(),
                5,
                5,
                9,
                2,
                0,
                1,
                1,
                4));

        this.playerRepository.save(new Player("Axon",
                "EMPORER",
                raiders.getId(),
                3200,
                10,
                80,
                "c9a99230-524f-42bd-bd75-3e47b554c33b",
                LocalDateTime.now(),
                11,
                2,
                9,
                9,
                5,
                32,
                10,
                9));

        this.playerRepository.save(new Player("SSundee",
                "EMPORER",
                theBoys.getId(),
                100,
                1,
                10,
                "6072021c-a6c5-4805-84a0-e41d497ba7a7",
                LocalDateTime.now(),
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0));
    }

    private static String base64(String bannerPng) {
        try {
            return Base64.getEncoder().encodeToString(FileUtils.readFileToByteArray(new File("banners/"+bannerPng+".png")));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
