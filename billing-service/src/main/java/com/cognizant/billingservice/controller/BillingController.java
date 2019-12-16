package com.cognizant.billingservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.cognizant.billingservice.entities.User;
import com.netflix.discovery.EurekaClient;
import com.netflix.discovery.shared.Application;

@RestController
@RequestMapping("/billings")
public class BillingController {
	@Autowired
	RestTemplate restTemplate;

	private String userAuthenticationServiceId;
	@GetMapping
	public void getUser() {
		User user = restTemplate.getForObject("http://user-authentication-service/users/sm", User.class);
		
		System.out.println(user);
	}
}
