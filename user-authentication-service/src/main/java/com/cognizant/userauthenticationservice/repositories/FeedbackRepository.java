package com.cognizant.userauthenticationservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.userauthenticationservice.entities.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {

}
