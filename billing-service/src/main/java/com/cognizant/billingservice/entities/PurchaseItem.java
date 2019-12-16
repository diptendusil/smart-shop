package com.cognizant.billingservice.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="purchase_item")
public class PurchaseItem {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="pi_id")
	private Integer purchaseId;
	
	@Column(name="pi_quantity")
	private Integer quantity;
	@Column(name="pi_price")
	private Double price;
	
	@OneToOne
	@JoinColumn(name="pi_pr_id")
	private Product product;
	
	@ManyToOne
	@JoinColumn(name="pi_bi_id")
	private Bill bill;

	public PurchaseItem() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PurchaseItem(Integer purchaseId, Integer quantity, Double price, Product product, Bill bill) {
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

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Bill getBill() {
		return bill;
	}

	public void setBill(Bill bill) {
		this.bill = bill;
	}

	@Override
	public String toString() {
		return "PurchaseItem [purchaseId=" + purchaseId + ", quantity=" + quantity + ", price=" + price + ", product="
				+ product + ", bill=" + bill + "]";
	}
	
}
