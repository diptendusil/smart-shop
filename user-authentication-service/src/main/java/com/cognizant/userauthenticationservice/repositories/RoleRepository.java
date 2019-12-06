package com.cognizant.userauthenticationservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.userauthenticationservice.entities.Role;

public interface RoleRepository extends JpaRepository<Role, String> {

}
