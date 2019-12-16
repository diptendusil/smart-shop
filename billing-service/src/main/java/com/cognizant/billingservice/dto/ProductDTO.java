package com.cognizant.billingservice.dto;

import java.util.Date;




public class ProductDTO {
	private String productCode;
	private String productName;
	private String brand;
	private String quantityType;
	private double rate;
	private int stockCount;
	private Date addDate;
	private String aisle;
	private String shelf;
	private Date dateOfManufacture;
	private Date dateOfExpiry;
	private String image;
	private CategoryDTO category;
	public ProductDTO() {
		super();
	}
	
	public ProductDTO(String productCode, String productName, String brand, double rate, int stockCount, Date addDate,
			String aisle, String shelf, Date dateOfManufacture, Date dateOfExpiry, String image, CategoryDTO category) {
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

	public ProductDTO(String productCode, String productName, String brand, String quantityType, double rate,
			int stockCount, Date addDate, String aisle, String shelf, Date dateOfManufacture, Date dateOfExpiry,
			String image, CategoryDTO category) {
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
	public CategoryDTO getCategory() {
		return category;
	}
	public void setCategory(CategoryDTO category) {
		this.category = category;
	}
	
	
}
