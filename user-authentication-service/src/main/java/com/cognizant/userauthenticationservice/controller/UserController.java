package com.cognizant.userauthenticationservice.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.userauthenticationservice.dto.UserSecretAnswerDto;
import com.cognizant.userauthenticationservice.dto.UserSecretQuestionDto;
import com.cognizant.userauthenticationservice.entities.PasswordPojo;
import com.cognizant.userauthenticationservice.entities.ResetPassword;
import com.cognizant.userauthenticationservice.entities.SecretQuestion;
import com.cognizant.userauthenticationservice.entities.User;
import com.cognizant.userauthenticationservice.exception.UserAlreadyExistsException;
import com.cognizant.userauthenticationservice.exception.UserNotFoundException;
import com.cognizant.userauthenticationservice.repositories.SecretQuestionRepository;
import com.cognizant.userauthenticationservice.service.AppUserDetailsService;

@RestController
public class UserController {
	
	@Autowired
	private AppUserDetailsService appUserDetailsService;
	@Autowired
	private SecretQuestionRepository secretQuestionRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@GetMapping("/users/{id}")
	public User getUser(@PathVariable String id) throws UserNotFoundException {
		return appUserDetailsService.getUser(id);
	}
	@GetMapping("/secret-questions/{username}")
	public UserSecretQuestionDto getUserSecretQuestion(@PathVariable("username") String username) throws UserNotFoundException{
		User user = appUserDetailsService.getUser(username);
		UserSecretQuestionDto userSecretQuestionDto = new UserSecretQuestionDto(user.getUserId(), user.getSecretQuestion1(), user.getSecretQuestion2(), user.getSecretQuestion3());
		return userSecretQuestionDto;
	}
	@PostMapping("/secret-questions/verify")
	public boolean verifySecretAnswer(@RequestBody UserSecretAnswerDto userSecretAnswerDto) throws UserNotFoundException {
		User user = appUserDetailsService.getUser(userSecretAnswerDto.getUserId());
		if (userSecretAnswerDto.getSecretAnswer1().equals(user.getSecretAnswer1()) && userSecretAnswerDto.getSecretAnswer2().equals(user.getSecretAnswer2())&& userSecretAnswerDto.getSecretAnswer3().equals(user.getSecretAnswer3())) {
			return true;
		} else {
			return false;
		}
	}
	@PostMapping("/users")
	public User signupUser(@RequestBody User user) throws UserAlreadyExistsException {
		User u = appUserDetailsService.signupUser(user);
		System.out.println(u.getUserId());
		return u;
	}
	@PutMapping("/users")
	public User modifyUser(@RequestBody @Valid User user) {
		return this.appUserDetailsService.modifyUser(user);
	}
	@PostMapping("/managers")
	public User signupManager(@RequestBody User user) throws UserAlreadyExistsException {
		User u = appUserDetailsService.signupManager(user);
		System.out.println(u.getUserId());
		return u;
	}
	
	@PostMapping("/admins")
	public User signupAdmin(@RequestBody User user) throws UserAlreadyExistsException {
		User u = appUserDetailsService.signupAdmin(user);
		System.out.println(u.getUserId());
		return u;
	}
	
	
	@GetMapping("/users")
	public boolean userExists(@RequestParam("username") String username) {
		return this.appUserDetailsService.userExists(username);
	}
	@GetMapping("/secret-questions")
	public List<SecretQuestion> getAllSecretQuestions() {
		return this.secretQuestionRepository.findAll();
	}
	
	@PutMapping("/change/{uid}")
	public User changePassword(@PathVariable String uid, @RequestBody PasswordPojo passwordObj) throws UserNotFoundException {
		System.out.println(passwordObj.getOldPassword());
		System.out.println(passwordObj.getNewPassword());
		User us = appUserDetailsService.getUser(uid);
		if(passwordEncoder.matches(passwordObj.getOldPassword(), us.getPassword())) {
			us.setPassword(passwordEncoder.encode(passwordObj.getNewPassword()));
			return appUserDetailsService.modifyUser(us);
		}
		else {
			return null;
		}
	}
	@PutMapping("/reset/{uid}")
	public User resetPassword(@PathVariable String uid, @RequestBody ResetPassword pass ) throws UserNotFoundException
	{
		User us = appUserDetailsService.getUser(uid);
		
			us.setPassword(passwordEncoder.encode(pass.getNewPassword()));
			return appUserDetailsService.modifyUser(us);
		
		
		
	}
	
	
	@GetMapping("/managers/approved")
	public List<User> getApprovedManagers() {
		return appUserDetailsService.getApprovedManagers();
	}
	
	@DeleteMapping("/managers/{userId}")
	public List<User> deleteManager(@PathVariable String userId) {
		appUserDetailsService.deleteManager(userId);
		return appUserDetailsService.getApprovedManagers();
	}
	@GetMapping("/admin/approved")
	public List<User> getApprovedAdmins()
	{
		return appUserDetailsService.getApprovedAdmin();
	}
	@DeleteMapping("/admin/{userId}")
	public List<User> deleteAdmin(@PathVariable String userId) {
		appUserDetailsService.deleteAdmin(userId);
		return appUserDetailsService.getApprovedAdmin();
	}
	  @PutMapping("/managers/{id}")
	 public List<User> modifyStatus(@PathVariable String id)
	 {
		 return appUserDetailsService.modifyStatus(id);
	 }
	
}
