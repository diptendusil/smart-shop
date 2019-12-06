package org.cognizant.product.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Offer {
	@Id
	@Column(name="of_id")
	private int offerId;
	@Column(name="of_date")
	private Date offerDate;
	@Column(name="of_discounted_rate")
	private double discountRate;
	@Column(name="of_offer")
	private String offerName;
	@OneToOne
	@JoinColumn(name="of_pr_code")
	private Product product;
	public Offer() {
		super();
	}
	public Offer(int offerId, Date offerDate, double discountRate, String offerName, Product product) {
		super();
		this.offerId = offerId;
		this.offerDate = offerDate;
		this.discountRate = discountRate;
		this.offerName = offerName;
		this.product = product;
	}
	public int getOfferId() {
		return offerId;
	}
	public void setOfferId(int offerId) {
		this.offerId = offerId;
	}
	public Date getOfferDate() {
		return offerDate;
	}
	public void setOfferDate(Date offerDate) {
		this.offerDate = offerDate;
	}
	public double getDiscountRate() {
		return discountRate;
	}
	public void setDiscountRate(double discountRate) {
		this.discountRate = discountRate;
	}
	public String getOfferName() {
		return offerName;
	}
	public void setOfferName(String offerName) {
		this.offerName = offerName;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	
	
}
