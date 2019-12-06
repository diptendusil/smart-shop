package com.cognizant.userauthenticationservice.service;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.userauthenticationservice.entities.Role;
import com.cognizant.userauthenticationservice.entities.User;
import com.cognizant.userauthenticationservice.exception.UserAlreadyExistsException;
import com.cognizant.userauthenticationservice.repositories.RoleRepository;
import com.cognizant.userauthenticationservice.repositories.UserRepository;
import com.cognizant.userauthenticationservice.security.AppUser;

@Service
public class AppUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	public AppUserDetailsService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public AppUserDetailsService(UserRepository userRepository, RoleRepository roleRepository) {
		super();
		this.userRepository = userRepository;
		this.roleRepository = roleRepository;
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findById(username).get();
		AppUser appUser = null;
		if(user == null)
			throw new UsernameNotFoundException("Username not found");
		else {
			appUser = new AppUser(user);
		}
		
		return appUser;
	}
	
	
	public void signupUser(User user) throws UserAlreadyExistsException {
		Role role = null;
		try {
			User oldU = userRepository.findById(user.getUserId()).get();
			role = roleRepository.findById("U").get();
			if(oldU == null) {
				user.setRole(role);
				user.setStatus("A");
				user.setPassword(passwordEncoder.encode(user.getPassword()));
				userRepository.save(user);
			}
			else {
				throw new UserAlreadyExistsException();
			}
		}
		catch (NoSuchElementException e) {
			role = roleRepository.findById("U").get();
			user.setRole(role);
			user.setStatus("A");
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			userRepository.save(user);
		}
	}
	
	
	public void signupManager(User user) throws UserAlreadyExistsException {
		Role role = null;
		try {
			User oldU = userRepository.findById(user.getUserId()).get();
			role = roleRepository.findById("M").get();
			if(oldU == null) {
				user.setRole(role);
				user.setStatus("P");
				user.setPassword(passwordEncoder.encode(user.getPassword()));
				userRepository.save(user);
			}
			else {
				throw new UserAlreadyExistsException();
			}
		}
		catch (NoSuchElementException e) {
			role = roleRepository.findById("M").get();
			user.setRole(role);
			user.setStatus("P");
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			userRepository.save(user);
		}
	}
	
	
	public void signupAdmin(User user) throws UserAlreadyExistsException {
		Role role = null;
		try {
			User oldU = userRepository.findById(user.getUserId()).get();
			role = roleRepository.findById("A").get();
			if(oldU == null) {
				user.setRole(role);
				user.setStatus("A");
				user.setPassword(passwordEncoder.encode(user.getPassword()));
				userRepository.save(user);
			}
			else {
				throw new UserAlreadyExistsException();
			}
		}
		catch (NoSuchElementException e) {
			role = roleRepository.findById("A").get();
			user.setRole(role);
			user.setStatus("A");
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			userRepository.save(user);
		}
	}
	
	
	public User getUser(String userId) {
		return userRepository.findById(userId).get();
	}
}
