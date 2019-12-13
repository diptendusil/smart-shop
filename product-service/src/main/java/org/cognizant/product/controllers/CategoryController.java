package org.cognizant.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.cognizant.product.dto.CategoryDto;
import org.cognizant.product.entities.Category;
import org.cognizant.product.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PutMapping
	public void modifyCategory(@RequestBody CategoryDto categoryDto) {
		categoryService.modifyCategory(convertCategoryDtoToCategory(categoryDto));
	}
	
	@DeleteMapping("/{id}")
	public String deleteCategory(@PathVariable int id) {
		categoryService.deleteCategory(id);
		
		return "{\"status\":\"Success\"}";
	}
	
	@PostMapping
	public CategoryDto addCategory(@RequestBody Category category) {
		Category category2=categoryService.addCategory(category);
		System.out.println(category2.getCategoryId());
		return convertCategoryToCategoryDto(category2);
	}
	
	private Category convertCategoryDtoToCategory(CategoryDto categoryDto) {
		Category category=new Category(categoryDto.getCategoryId(), categoryDto.getCategoryName());
		return category;
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
