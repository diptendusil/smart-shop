package org.cognizant.product.dto;

import java.util.Date;
import java.util.List;

import org.cognizant.product.entities.User;

public class BillDTO {

	private Integer billId;
	
	private double total;
	
	private Integer rewardPoints;
	
	private Date date;
	
	private User user;
	
	private List<PurchaseItemDTO> purchaseItems;

	public BillDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BillDTO(Integer billId, double total, Integer rewardPoints, Date date, User user,
			List<PurchaseItemDTO> purchaseItems) {
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

	public List<PurchaseItemDTO> getPurchaseItems() {
		return purchaseItems;
	}

	public void setPurchaseItems(List<PurchaseItemDTO> purchaseItems) {
		this.purchaseItems = purchaseItems;
	}

	@Override
	public String toString() {
		return "BillDTO [billId=" + billId + ", total=" + total + ", rewardPoints=" + rewardPoints + ", date=" + date
				+ ", user=" + user + ", purchaseItems=" + purchaseItems + "]";
	}
	
}
