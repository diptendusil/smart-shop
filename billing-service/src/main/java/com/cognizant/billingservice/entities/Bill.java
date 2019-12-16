package com.cognizant.billingservice.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="bill")
public class Bill {
	@Id
	@Column(name="bi_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer billId;
	
	@Column(name="bi_total")
	private double total;
	
	@Column(name="bi_reward_points")
	private Integer rewardPoints;
	
	@Column(name="bi_date")
	private Date date;
	
	@OneToOne
	@JoinColumn(name="bi_us_id")
	private User user;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="bill")
	private List<PurchaseItem> purchaseItems;
	public Bill() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Bill(Integer billId, double total, Integer rewardPoints, Date date) {
		super();
		this.billId = billId;
		this.total = total;
		this.rewardPoints = rewardPoints;
		this.date = date;
	}

	public Bill(Integer billId, double total, Integer rewardPoints, Date date, User user,
			List<PurchaseItem> purchaseItems) {
		super();
		this.billId = billId;
		this.total = total;
		this.rewardPoints = rewardPoints;
		this.date = date;
		this.user = user;
		this.purchaseItems = purchaseItems;
	}

	public Integer getBillId() {
		return billId;
	}

	public void setBillId(Integer billId) {
		this.billId = billId;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public Integer getRewardPoints() {
		return rewardPoints;
	}

	public void setRewardPoints(Integer rewardPoints) {
		this.rewardPoints = rewardPoints;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<PurchaseItem> getPurchaseItems() {
		return purchaseItems;
	}

	public void setPurchaseItems(List<PurchaseItem> purchaseItems) {
		this.purchaseItems = purchaseItems;
	}

	@Override
	public String toString() {
		return "Bill [billId=" + billId + ", total=" + total + ", rewardPoints=" + rewardPoints + ", date=" + date
				+ "]";
	}
	
}
