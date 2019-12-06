package org.cognizant.product.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Product {
	@Id
	@Column(name="pr_code")
	private String productCode;
	@Column(name="pr_name")
	private String productName;
	@Column(name="pr_brand")
	private String brand;
	@Column(name="pr_quantity_type")
	private String quantityType;
	@Column(name="pr_rate")
	private double rate;
	@Column(name="pr_stock_count")
	private int stockCount;
	@Column(name="pr_add_date")
	private Date addDate;
	@Column(name="pr_aisle")
	private String aisle;
	@Column(name="pr_shelf")
	private String shelf;
	@Column(name="pr_date_of_manufacture")
	private Date dateOfManufacture;
	@Column(name="pr_date_of_expiry")
	private Date dateOfExpiry;
	@Column(name="pr_image")
	private String image;
	@ManyToOne
	@JoinColumn(name="pr_ca_id")
	private Category category;
	public Product() {
		super();
	}
	public Product(String productCode, String productName, String brand, double rate, int stockCount, Date addDate,
			String aisle, String shelf, Date dateOfManufacture, Date dateOfExpiry, String image, Category category) {
		super();
		this.productCode = productCode;
		this.productName = productName;
		this.brand = brand;
		this.rate = rate;
		this.stockCount = stockCount;
		this.addDate = addDate;
		this.aisle = aisle;
		this.shelf = shelf;
		this.dateOfManufacture = dateOfManufacture;
		this.dateOfExpiry = dateOfExpiry;
		this.image = image;
		this.category = category;
	}
	public Product(String productCode, String productName, String brand, String quantityType, double rate,
			int stockCount, Date addDate, String aisle, String shelf, Date dateOfManufacture, Date dateOfExpiry,
			String image, Category category) {
		super();
		this.productCode = productCode;
		this.productName = productName;
		this.brand = brand;
		this.quantityType = quantityType;
		this.rate = rate;
		this.stockCount = stockCount;
		this.addDate = addDate;
		this.aisle = aisle;
		this.shelf = shelf;
		this.dateOfManufacture = dateOfManufacture;
		this.dateOfExpiry = dateOfExpiry;
		this.image = image;
		this.category = category;
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
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getQuantityType() {
		return quantityType;
	}
	public void setQuantityType(String quantityType) {
		this.quantityType = quantityType;
	}
	public double getRate() {
		return rate;
	}
	public void setRate(double rate) {
		this.rate = rate;
	}
	public int getStockCount() {
		return stockCount;
	}
	public void setStockCount(int stockCount) {
		this.stockCount = stockCount;
	}
	public Date getAddDate() {
		return addDate;
	}
	public void setAddDate(Date addDate) {
		this.addDate = addDate;
	}
	public String getAisle() {
		return aisle;
	}
	public void setAisle(String aisle) {
		this.aisle = aisle;
	}
	public String getShelf() {
		return shelf;
	}
	public void setShelf(String shelf) {
		this.shelf = shelf;
	}
	public Date getDateOfManufacture() {
		return dateOfManufacture;
	}
	public void setDateOfManufacture(Date dateOfManufacture) {
		this.dateOfManufacture = dateOfManufacture;
	}
	public Date getDateOfExpiry() {
		return dateOfExpiry;
	}
	public void setDateOfExpiry(Date dateOfExpiry) {
		this.dateOfExpiry = dateOfExpiry;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
}
