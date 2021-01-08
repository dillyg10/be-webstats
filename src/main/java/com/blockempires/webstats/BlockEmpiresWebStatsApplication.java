package com.blockempires.webstats;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Basic Spring-Boot web service to deploy statistics for BlockEmpires
 *
 * Runs a singular web-page environment with a REST api to access data
 */
@SpringBootApplication
public class BlockEmpiresWebStatsApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlockEmpiresWebStatsApplication.class, args);
	}

}
