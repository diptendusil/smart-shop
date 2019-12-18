package org.cognizant.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.cognizant.product.dto.CategoryDto;
import org.cognizant.product.dto.ProductDto;
import org.cognizant.product.entities.Category;
import org.cognizant.product.entities.Product;
import org.cognizant.product.exceptions.ProductAlreadyExistsException;
import org.cognizant.product.exceptions.ProductNotFoundException;
import org.cognizant.product.services.ProductService;
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
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@GetMapping
	public List<ProductDto> getAllProducts(){
		return convertProductsToProductDtos(productService.getAllProducts());
	}
	@GetMapping("/in-stock")
	public List<ProductDto> getAllProductsInStock() {
		return convertProductsToProductDtos(productService.getAllInStockProducts());
	}
	@GetMapping("/{code}")
	public ProductDto getProductById(@PathVariable String code) throws ProductNotFoundException{
		return convertProductToProductDto(productService.getProductById(code));
	}
	
	@GetMapping("/category/{id}")
	public List<ProductDto> getProductsByCategory(@PathVariable int id) {
		return convertProductsToProductDtos(productService.getProductsByCategory(id));
	}
	
	@PutMapping
	public void modifyProduct(@RequestBody ProductDto productDto) {
		productService.modifyProduct(convertProductDtoToProduct(productDto));
	}
	
	@DeleteMapping("/{id}")
	public void deleteProduct(@PathVariable String id) throws ProductNotFoundException {
		productService.deleteProduct(id);
	}
	
	@PostMapping
	public void addProduct(@RequestBody ProductDto productDto) throws ProductAlreadyExistsException {
		productService.addProduct(convertProductDtoToProduct(productDto));
	}
	
	public Product convertProductDtoToProduct(ProductDto productDto) {
		Category category=new Category(productDto.getCategory().getCategoryId(), productDto.getCategory().getCategoryName());
		Product product=new Product(productDto.getProductCode(), productDto.getProductName(), productDto.getBrand(), productDto.getRate(), productDto.getStockCount(), productDto.getAddDate(), productDto.getAisle(), productDto.getShelf(), productDto.getDateOfManufacture(), productDto.getDateOfExpiry(), productDto.getImage(), category);
		return product;
	}
	
	public List<ProductDto> convertProductsToProductDtos(List<Product> products){
		List<ProductDto> productList=new ArrayList<ProductDto>();
		for(Product product:products) {
			ProductDto productDto=convertProductToProductDto(product);
			productList.add(productDto);
		}
		return productList;
	}
	
	public ProductDto convertProductToProductDto(Product product) {
		ProductDto productDto=new ProductDto(product.getProductCode(), product.getProductName(), product.getBrand(), product.getRate(),
				product.getStockCount(),product.getAddDate(),product.getAisle(),product.getShelf(),product.getDateOfManufacture(),product.getDateOfExpiry(),
				product.getImage(),null);
		if(product.getQuantityType()!=null)
			productDto.setQuantityType(product.getQuantityType());
		CategoryDto categoryDto=new CategoryDto(product.getCategory().getCategoryId(), product.getCategory().getCategoryName(),null);
		productDto.setCategory(categoryDto);
		return productDto;
	}
}
