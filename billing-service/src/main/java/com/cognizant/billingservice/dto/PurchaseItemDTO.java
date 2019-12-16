package com.cognizant.billingservice.dto;

public class PurchaseItemDTO {
	private Integer purchaseId;

	private Integer quantity;
	private Double price;

	private ProductDTO product;
	
	private BillDTO bill;

	public PurchaseItemDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PurchaseItemDTO(Integer purchaseId, Integer quantity, Double price, ProductDTO product, BillDTO bill) {
		super();
		this.purchaseId = purchaseId;
		this.quantity = quantity;
		this.price = price;
		this.product = product;
		this.bill = bill;
	}

	public Integer getPurchaseId() {
		return purchaseId;
	}

	public void setPurchaseId(Integer purchaseId) {
		this.purchaseId = purchaseId;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public ProductDTO getProduct() {
		return product;
	}

	public void setProduct(ProductDTO product) {
		this.product = product;
	}

	public BillDTO getBill() {
		return bill;
	}

	public void setBill(BillDTO bill) {
		this.bill = bill;
	}

	@Override
	public String toString() {
		return "PurchaseItem [purchaseId=" + purchaseId + ", quantity=" + quantity + ", price=" + price + ", product="
				+ product + ", bill=" + bill + "]";
	}

}
