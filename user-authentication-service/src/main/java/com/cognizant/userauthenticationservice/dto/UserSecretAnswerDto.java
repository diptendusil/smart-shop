package com.cognizant.userauthenticationservice.dto;

public class UserSecretAnswerDto {
	private String userId;
	private String secretAnswer1;
	private String secretAnswer2;
	private String secretAnswer3;
	public UserSecretAnswerDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserSecretAnswerDto(String userId, String secretAnswer1, String secretAnswer2, String secretAnswer3) {
		super();
		this.userId = userId;
		this.secretAnswer1 = secretAnswer1;
		this.secretAnswer2 = secretAnswer2;
		this.secretAnswer3 = secretAnswer3;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getSecretAnswer1() {
		return secretAnswer1;
	}
	public void setSecretAnswer1(String secretAnswer1) {
		this.secretAnswer1 = secretAnswer1;
	}
	public String getSecretAnswer2() {
		return secretAnswer2;
	}
	public void setSecretAnswer2(String secretAnswer2) {
		this.secretAnswer2 = secretAnswer2;
	}
	public String getSecretAnswer3() {
		return secretAnswer3;
	}
	public void setSecretAnswer3(String secretAnswer3) {
		this.secretAnswer3 = secretAnswer3;
	}
	@Override
	public String toString() {
		return "UserSecretAnswerDto [userId=" + userId + ", secretAnswer1=" + secretAnswer1 + ", secretAnswer2="
				+ secretAnswer2 + ", secretAnswer3=" + secretAnswer3 + "]";
	}
	
}
