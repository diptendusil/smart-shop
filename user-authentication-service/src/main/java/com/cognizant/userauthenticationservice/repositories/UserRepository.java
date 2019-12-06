package com.cognizant.userauthenticationservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.userauthenticationservice.entities.User;

public interface UserRepository extends JpaRepository<User, String>{

}
