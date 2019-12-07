package org.cognizant.product.dto;

import java.util.Date;

public class OfferDto {
	
	private int offerId;
	private Date offerDate;
	private double discountRate;
	private String offerName;
	private ProductDto product;
	public OfferDto() {
		super();
	}
	public OfferDto(int offerId, Date offerDate, double discountRate, String offerName, ProductDto product) {
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
	public ProductDto getProduct() {
		return product;
	}
	public void setProduct(ProductDto product) {
		this.product = product;
	}
	
	
}
