package org.cognizant.product.dto;

import java.util.Date;

public class OfferDto {
	
	private int offerId;
	private Date offerDate;
	private double discountRate;
	private String offerName;
	private String productCode;
	private String productName;
	public OfferDto() {
		super();
	}
	public OfferDto(int offerId, Date offerDate, double discountRate, String offerName, String productCode, String productName) {
		super();
		this.offerId = offerId;
		this.offerDate = offerDate;
		this.discountRate = discountRate;
		this.offerName = offerName;
		this.productCode = productCode;
		this.productName = productName;
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
	public String getProductCode() {
		return productCode;
	}
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}

	
	
}
