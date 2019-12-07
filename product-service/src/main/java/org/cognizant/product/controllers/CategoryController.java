package org.cognizant.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.cognizant.product.dto.CategoryDto;
import org.cognizant.product.entities.Category;
import org.cognizant.product.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categories")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	
	@GetMapping
	public List<CategoryDto> getAllCategories(){
		return convertCategoriesToCategoryDtos(categoryService.getAllCategories());
	}
	
	@GetMapping("/{id}")
	public CategoryDto getCategoryById(@PathVariable int id){
		return convertCategoryToCategoryDto(categoryService.getCategoryById(id));
	}
	
	public CategoryDto convertCategoryToCategoryDto(Category category) {
		CategoryDto categoryDto=new CategoryDto(category.getCategoryId(), category.getCategoryName(), null);
		return categoryDto;
	}
	
	public List<CategoryDto> convertCategoriesToCategoryDtos(List<Category> categories){
		List<CategoryDto> categoryList=new ArrayList<CategoryDto>();
		for(Category category:categories) {
			CategoryDto categoryDto=convertCategoryToCategoryDto(category);
			categoryList.add(categoryDto);
		}
		return categoryList;
	}
}
