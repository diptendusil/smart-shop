package com.cognizant.billingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.billingservice.entities.RewardPoint;
import com.cognizant.billingservice.entities.User;
@Repository
public interface RewardPointRepository extends JpaRepository<RewardPoint, User> {
	
}
