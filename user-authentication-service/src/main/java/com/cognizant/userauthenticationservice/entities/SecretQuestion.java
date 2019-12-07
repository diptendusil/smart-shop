package com.cognizant.userauthenticationservice.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="secret_question")
public class SecretQuestion {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="sq_question")
	private String question;

	public SecretQuestion() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SecretQuestion(int id, String question) {
		super();
		this.id = id;
		this.question = question;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	@Override
	public String toString() {
		return "SecretQuestion [id=" + id + ", question=" + question + "]";
	}
	
	
}
