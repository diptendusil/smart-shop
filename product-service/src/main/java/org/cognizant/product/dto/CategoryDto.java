package org.cognizant.product.dto;

import java.util.List;

import org.cognizant.product.entities.Category;

public class CategoryDto {
	
	private int categoryId;
	private String categoryName;
	private List<ProductDto> productList;
	public CategoryDto() {
		super();
	}
	
	public CategoryDto(int categoryId, String categoryName, List<ProductDto> productList) {
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
	public List<ProductDto> getProductList() {
		return productList;
	}
	public void setProductList(List<ProductDto> productList) {
		this.productList = productList;
	}
	
	
}
