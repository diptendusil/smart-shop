package com.cognizant.billingservice.entities;

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
	@Column(name="rp_id")
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RewardPoint other = (RewardPoint) obj;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}
	
	
	
}
