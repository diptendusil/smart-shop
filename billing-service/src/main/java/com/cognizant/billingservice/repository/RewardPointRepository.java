package com.cognizant.billingservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.billingservice.entities.RewardPoint;
import com.cognizant.billingservice.entities.User;
@Repository
public interface RewardPointRepository extends JpaRepository<RewardPoint, Integer> {
	Optional<RewardPoint> findByUser(User user);
	
	//@Query(value="", nativeQuery=true)
	public Optional<RewardPoint> findByUserUserId(String id);
}
