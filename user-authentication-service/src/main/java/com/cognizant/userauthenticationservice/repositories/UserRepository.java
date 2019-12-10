package com.cognizant.userauthenticationservice.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.userauthenticationservice.entities.User;

public interface UserRepository extends JpaRepository<User, String> {
	
	@Query(value = "select * from user where us_ro_id = 'M'", nativeQuery=true)
	public List<User> getAllManagers();
}
