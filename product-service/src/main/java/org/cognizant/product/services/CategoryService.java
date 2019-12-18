package org.cognizant.product.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.cognizant.product.entities.Category;
import org.cognizant.product.exceptions.CategoryAlreadyExistsException;
import org.cognizant.product.exceptions.CategoryNotFoundException;
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
	public Category getCategoryById(int id) throws CategoryNotFoundException{
		Optional<Category> category=categoryRepository.findById(id);
		if(category.isPresent())
		{
			return category.get();
		}
		else
		{
			throw new CategoryNotFoundException("Category with id : "+id+" is not present in datastore");
		}
	}

	@Transactional
	public void modifyCategory(Category category) {
		categoryRepository.save(category);
	}
	
	@Transactional
	public void deleteCategory(int categoryId) throws CategoryNotFoundException{
		if(categoryRepository.findById(categoryId).isPresent())
		{
			categoryRepository.deleteById(categoryId);
		}
		else
		{
			throw new CategoryNotFoundException("Category with id : "+categoryId+" is not present in datastore");
		}
	}
	
	@Transactional
	public Category addCategory(Category category) throws CategoryAlreadyExistsException {
		if(categoryRepository.findByCategoryName(category.getCategoryName())==null)
		{
			return categoryRepository.save(category);
		}
		else
		{
			throw new CategoryAlreadyExistsException("Category with name : "+category.getCategoryName()+" is already present");
		}
		
	}
}
