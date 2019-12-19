package com.cognizant.userauthenticationservice.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.userauthenticationservice.entities.Feedback;
import com.cognizant.userauthenticationservice.entities.UserFeedback;
import com.cognizant.userauthenticationservice.repositories.FeedbackRepository;
import com.cognizant.userauthenticationservice.repositories.UserFeedbackRepository;

@Service
public class UserService {
	
	@Autowired
	private FeedbackRepository feedbackRepository;
	@Autowired
	private UserFeedbackRepository userFeedbackRepository;
	
	@Transactional
	public void submitFeedback(UserFeedback userFeedback) {
		userFeedbackRepository.save(userFeedback);
	}
	
	@Transactional
	public Feedback getFeedbackById(int feedbackId) {
		return feedbackRepository.findById(feedbackId).get();
	}
}
