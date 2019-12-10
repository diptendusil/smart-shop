package com.cognizant.userauthenticationservice.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import javax.transaction.Transactional;

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
	
	@Transactional
	public User signupUser(User user) throws UserAlreadyExistsException {
		Role role = null;
		try {
			Optional<User> testUser = userRepository.findById(user.getUserId());
			role = roleRepository.findById("U").get();
			if(!testUser.isPresent()) {
				user.setRole(role);
				user.setStatus("A");
				System.out.println(user.getUserId()+":"+ user.getPassword());
				user.setPassword(passwordEncoder.encode(user.getPassword()));
				return userRepository.save(user);
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
			return userRepository.save(user);
		}
	}
	
	@Transactional
	public User signupManager(User user) throws UserAlreadyExistsException {
		Role role = null;
		try {
			Optional<User> testUser = userRepository.findById(user.getUserId());
			role = roleRepository.findById("M").get();
			if(!testUser.isPresent()) {
				user.setRole(role);
				user.setStatus("P");
				user.setPassword(passwordEncoder.encode(user.getPassword()));
				return userRepository.save(user);
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
			return userRepository.save(user);
		}
	}
	
	@Transactional
	public User signupAdmin(User user) throws UserAlreadyExistsException {
		Role role = null;
		try {
			Optional<User> testUser = userRepository.findById(user.getUserId());
			role = roleRepository.findById("A").get();
			if(!testUser.isPresent()) {
				user.setRole(role);
				user.setStatus("A");
				user.setPassword(passwordEncoder.encode(user.getPassword()));
				return userRepository.save(user);
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
			return userRepository.save(user);
		}
	}
	
	@Transactional
	public User getUser(String userId) {
		return userRepository.findById(userId).get();
	}
	
	@Transactional
	public User modifyUser(User user) {
		return this.userRepository.save(user);
	}
	@Transactional
	public boolean userExists(String username) {
		return userRepository.findById(username).isPresent();
	}
	
	@Transactional
	public User checkPassword(String userId, String password) {
		return null;
	}
	
	
	@Transactional
	public List<User> getApprovedManagers() {
		return userRepository.getAllApprovedManagers();
	}
	
	@Transactional
	public void deleteManager(String userId) {
		userRepository.deleteById(userId);
	}
}
