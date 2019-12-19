package com.cognizant.userauthenticationservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.userauthenticationservice.entities.UserFeedback;

public interface UserFeedbackRepository extends JpaRepository<UserFeedback, Integer> {

}
