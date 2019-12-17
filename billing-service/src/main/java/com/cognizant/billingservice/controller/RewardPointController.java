package com.cognizant.billingservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.cognizant.billingservice.entities.RewardPoint;
import com.cognizant.billingservice.entities.User;
import com.cognizant.billingservice.service.RewardPointService;

@RestController
@RequestMapping("/reward-point")
public class RewardPointController {
	@Autowired
	RewardPointService rewardPointService;
	@Autowired
	RestTemplate restTemplate;
	private User getUser(String username) {
		User user = restTemplate.getForObject("http://user-authentication-service/users/" + username, User.class);
		return user;
	}
	@GetMapping("/{username}")
	public RewardPoint getRewardPoint(@PathVariable("username") String username) {
		User user = getUser(username);
		return this.rewardPointService.getRewardPointsByUser(user);
	}
	
	@PutMapping
	public RewardPoint modifyRewardPoints(@RequestBody RewardPoint rewardPoint) {
		return this.rewardPointService.modifyRewardPoint(rewardPoint);
	}

}
