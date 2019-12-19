package com.cognizant.userauthenticationservice.dto;

public class UserSecretQuestionDto {
	private String username;
	private String secretQuestion1;
	private String secretQuestion2;
	private String secretQuestion3;
	public UserSecretQuestionDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserSecretQuestionDto(String username, String secretQuestion1, String secretQuestion2,
			String secretQuestion3) {
		super();
		this.username = username;
		this.secretQuestion1 = secretQuestion1;
		this.secretQuestion2 = secretQuestion2;
		this.secretQuestion3 = secretQuestion3;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getSecretQuestion1() {
		return secretQuestion1;
	}
	public void setSecretQuestion1(String secretQuestion1) {
		this.secretQuestion1 = secretQuestion1;
	}
	public String getSecretQuestion2() {
		return secretQuestion2;
	}
	public void setSecretQuestion2(String secretQuestion2) {
		this.secretQuestion2 = secretQuestion2;
	}
	public String getSecretQuestion3() {
		return secretQuestion3;
	}
	public void setSecretQuestion3(String secretQuestion3) {
		this.secretQuestion3 = secretQuestion3;
	}
	@Override
	public String toString() {
		return "UserSecretQuestionDto [username=" + username + ", secretQuestion1=" + secretQuestion1
				+ ", secretQuestion2=" + secretQuestion2 + ", secretQuestion3=" + secretQuestion3 + "]";
	}
	
	
}
