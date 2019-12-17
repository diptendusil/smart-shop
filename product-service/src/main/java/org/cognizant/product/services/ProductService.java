package org.cognizant.product.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.cognizant.product.entities.Product;
import org.cognizant.product.exceptions.ProductAlreadyExistsException;
import org.cognizant.product.exceptions.ProductNotFoundException;
import org.cognizant.product.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	@Transactional
	public List<Product> getAllInStockProducts() {
		return productRepository.findByStockCountGreaterThan(0);
	}
	@Transactional
	public Product getProductById(@PathVariable String code) throws ProductNotFoundException{
		Optional<Product> product=productRepository.findById(code);
		if(product.isPresent())
		{
			return product.get();
		}
		else
		{
			throw new ProductNotFoundException("Product with code : "+code+" is not present in datastore");
		}
	}
	
	@Transactional
	public List<Product> getProductsByCategory(int id) {
		return productRepository.findProductsByCategory(id);
	}
	
	@Transactional
	public void modifyProduct(Product product) {
		productRepository.save(product);
	}
	
	@Transactional
	public void deleteProduct(String productId) throws ProductNotFoundException {
		Optional<Product> product=productRepository.findById(productId);
		if(product.isPresent())
		{
			productRepository.deleteById(productId);
		}
		else
		{
			throw new ProductNotFoundException("Product with code : "+productId+" is not present in datastore");
		}
		
	}
	
	@Transactional
	public void addProduct(Product product) throws ProductAlreadyExistsException {
		if(productRepository.findById(product.getProductCode()) == null)
		{
			productRepository.save(product);
		}
		else
		{
			throw new ProductAlreadyExistsException("Product with code : "+product.getProductCode()+" is already present");
		}
		
	}
}
