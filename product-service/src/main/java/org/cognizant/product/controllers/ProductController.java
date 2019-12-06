package org.cognizant.product.controllers;

import java.util.List;

import org.cognizant.product.entities.Product;
import org.cognizant.product.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@GetMapping
	public List<Product> getAllProducts(){
		return productService.getAllProducts();
	}
	
	@GetMapping("/{code}")
	public Product getProductById(@PathVariable String code){
		return productService.getProductById(code);
	}
	
	@GetMapping("/category/{id}")
	public List<Product> getProductsByCategory(@PathVariable int id) {
		return productService.getProductsByCategory(id);
	}
}
