package com.cognizant.billingservice.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="reward_point")
public class RewardPoint {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@OneToOne
	@JoinColumn(name="rp_us_id")
	private User user;
	
	@Column(name="rp_point")
	private Integer point;
	
	public RewardPoint() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RewardPoint(User user, Integer point) {
		super();
		this.user = user;
		this.point = point;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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
		return "RewardPoint [id=" + id + ", user=" + user + ", point=" + point + "]";
	}
	
	
	
}
