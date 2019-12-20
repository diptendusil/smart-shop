package com.cognizant.userauthenticationservice.entities;

public class ResetPassword {
  private 	String userId;
  private  String newPassword;
public String getUserId() {
	return userId;
}
public void setUserId(String userId) {
	this.userId = userId;
}
public String getNewPassword() {
	return newPassword;
}
public void setNewPassword(String newPassword) {
	this.newPassword = newPassword;
}
public ResetPassword(String userId, String newPassword) {
	super();
	this.userId = userId;
	this.newPassword = newPassword;
}
public ResetPassword() {
	super();

}
  
  
	

}
