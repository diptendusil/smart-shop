package org.cognizant.product.services;

import java.util.List;

import javax.transaction.Transactional;

import org.cognizant.product.entities.Category;
import org.cognizant.product.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Transactional
	public List<Category> getAllCategories(){
		return categoryRepository.findAll();
	}
	
	@Transactional
	public Category getCategoryById(int id){
		return categoryRepository.findById(id).get();
	}

	@Transactional
	public void modifyCategory(Category category) {
		categoryRepository.save(category);
	}
	
	@Transactional
	public void deleteCategory(int categoryId) {
		categoryRepository.deleteById(categoryId);
	}
	
	@Transactional
	public Category addCategory(Category category) {
		Category newCategory=new Category();
		newCategory.setCategoryName(category.getCategoryName());
		return categoryRepository.save(newCategory);
	}
}
