package com.cognizant.billingservice.dto;

import java.util.List;

public class CategoryDTO {
	
	private int categoryId;
	private String categoryName;
	private List<ProductDTO> productList;
	public CategoryDTO() {
		super();
	}
	
	public CategoryDTO(int categoryId, String categoryName, List<ProductDTO> productList) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.productList = productList;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public List<ProductDTO> getProductList() {
		return productList;
	}
	public void setProductList(List<ProductDTO> productList) {
		this.productList = productList;
	}
	
	
}
