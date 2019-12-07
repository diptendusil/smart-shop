package com.cognizant.userauthenticationservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.userauthenticationservice.entities.SecretQuestion;

public interface SecretQuestionRepository extends JpaRepository<SecretQuestion, Integer> {

}
