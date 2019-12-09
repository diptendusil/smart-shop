package com.cognizant.userauthenticationservice.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class User {
	@Id
	@Column(name="us_id")
	private String userId;
	@Column(name="us_first_name")
	private String firstName;
	@Column(name="us_last_name")
	private String lastName;
	@Column(name="us_age")
	private int age;
	@Column(name="us_gender")
	private String gender;
	@Column(name="us_contact")
	private long contact;

	@Column(name="us_password")
	private String password;
	@Column(name="us_status")
	private String status;
	@Column(name="us_secret_question_1")
	private String secretQuestion1;
	@Column(name="us_secret_answer_1")
	private String secretAnswer1;
	@Column(name="us_secret_question_2")
	private String secretQuestion2;
	@Column(name="us_secret_answer_2")
	private String secretAnswer2;
	@Column(name="us_secret_question_3")
	private String secretQuestion3;
	@Column(name="us_secret_answer_3")
	private String secretAnswer3;
	@ManyToOne
	@JoinColumn(name="us_ro_id")
	private Role role;
	public User() {
		super();
	}
	public User(String userId, String firstName, String lastName, int age, String gender, long contact, String password,
			String status, String secretQuestion1, String secretAnswer1, String secretQuestion2, String secretAnswer2,
			String secretQuestion3, String secretAnswer3, Role role) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.contact = contact;
		this.password = password;
		this.status = status;
		this.secretQuestion1 = secretQuestion1;
		this.secretAnswer1 = secretAnswer1;
		this.secretQuestion2 = secretQuestion2;
		this.secretAnswer2 = secretAnswer2;
		this.secretQuestion3 = secretQuestion3;
		this.secretAnswer3 = secretAnswer3;
		this.role = role;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getSecretQuestion1() {
		return secretQuestion1;
	}
	public void setSecretQuestion1(String secretQuestion1) {
		this.secretQuestion1 = secretQuestion1;
	}
	public String getSecretAnswer1() {
		return secretAnswer1;
	}
	public void setSecretAnswer1(String secretAnswer1) {
		this.secretAnswer1 = secretAnswer1;
	}
	public String getSecretQuestion2() {
		return secretQuestion2;
	}
	public void setSecretQuestion2(String secretQuestion2) {
		this.secretQuestion2 = secretQuestion2;
	}
	public String getSecretAnswer2() {
		return secretAnswer2;
	}
	public void setSecretAnswer2(String secretAnswer2) {
		this.secretAnswer2 = secretAnswer2;
	}
	public String getSecretQuestion3() {
		return secretQuestion3;
	}
	public void setSecretQuestion3(String secretQuestion3) {
		this.secretQuestion3 = secretQuestion3;
	}
	public String getSecretAnswer3() {
		return secretAnswer3;
	}
	public void setSecretAnswer3(String secretAnswer3) {
		this.secretAnswer3 = secretAnswer3;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	
	
}
