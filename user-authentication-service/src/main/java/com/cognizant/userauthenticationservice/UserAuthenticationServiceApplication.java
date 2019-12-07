package com.cognizant.userauthenticationservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
public class UserAuthenticationServiceApplication {
	public static void main(String[] args) throws Exception {
		SpringApplication.run(UserAuthenticationServiceApplication.class, args);
	}

}
