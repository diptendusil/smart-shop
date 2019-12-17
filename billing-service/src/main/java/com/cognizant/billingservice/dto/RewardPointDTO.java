package com.cognizant.billingservice.dto;

import com.cognizant.billingservice.entities.User;

public class RewardPointDTO {

	private User user;
	private Integer point;
	public RewardPointDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public RewardPointDTO(User user, Integer point) {
		super();
		this.user = user;
		this.point = point;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Integer getPoint() {
		return point;
	}
	public void setPoint(Integer point) {
		this.point = point;
	}
	@Override
	public String toString() {
		return "RewardPoint [user=" + user + ", point=" + point + "]";
	}
	
}
