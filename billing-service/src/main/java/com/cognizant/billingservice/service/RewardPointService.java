package com.cognizant.billingservice.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.billingservice.entities.RewardPoint;
import com.cognizant.billingservice.entities.User;
import com.cognizant.billingservice.repository.RewardPointRepository;

@Service
public class RewardPointService {
	@Autowired
	RewardPointRepository rewardPointRepository;
	public RewardPoint getRewardPointsByUser(User user) {
		Optional<RewardPoint> rewardPoint =this.rewardPointRepository.findById(user); 
		if(rewardPoint.isPresent()) {
			return rewardPoint.get();
		} else {
			RewardPoint point = new RewardPoint(user, 0);
			return addRewardPoint(point);
		}
	}
	public RewardPoint addRewardPoint(RewardPoint rewardPoint) {
		return this.rewardPointRepository.save(rewardPoint);
	}
//	public RewardPoint addRewardPointsToUser(User user, int points) {
//		return this.rewardPointRepository.save(entity)
//	}
}
