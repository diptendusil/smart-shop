package org.cognizant.product.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.cognizant.product.dto.BillDTO;
import org.cognizant.product.dto.PurchaseItemDTO;
import org.cognizant.product.entities.Category;
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
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	@Transactional
	public List<Product> getAllInStockProducts() {
		return productRepository.findByStockCountGreaterThan(0);
	}

	@Transactional
	public Product getProductById(@PathVariable String code) throws ProductNotFoundException {
		Optional<Product> product = productRepository.findById(code);
		if (product.isPresent()) {
			return product.get();
		} else {
			throw new ProductNotFoundException("Product with code : " + code + " is not present in datastore");
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
		Optional<Product> product = productRepository.findById(productId);
		if (product.isPresent()) {
			productRepository.deleteById(productId);
		} else {
			throw new ProductNotFoundException("Product with code : " + productId + " is not present in datastore");
		}

	}

	@Transactional
	public void addProduct(Product product) throws ProductAlreadyExistsException {
		if (productRepository.findById(product.getProductCode()) == null) {
			productRepository.save(product);
		} else {
			throw new ProductAlreadyExistsException(
					"Product with code : " + product.getProductCode() + " is already present");
		}

	}

	public List<Product> getRecommendations(List<BillDTO> bills, String userId, List<Category> categories) {
		System.out.println(bills);
		Map<String, Integer> categoryMap = new HashMap<>(); //Category name, index number
		List<PurchaseItemDTO> userItems = new ArrayList<>(), history = new ArrayList<>();
		Integer i = 0;
		for(Category cate: categories) {categoryMap.put(cate.getCategoryName(), i++);}
		System.out.println(categoryMap);
		for(BillDTO bill: bills ) {
			history.addAll(bill.getPurchaseItems()); //populating all purchases
			if(bill.getUser().getUserId().equals(userId)) {userItems.addAll(bill.getPurchaseItems());} //populating user purchases
		}
		int[] freq = new int[categoryMap.values().size()]; // Frequency array for categories
		int[] filter = new int[categoryMap.values().size()];
		for(int x = 0; x < filter.length; x++) { // Setting max products from each category to 3 and default freqs to 0
			freq[x] = 0;
			filter[x] = 3;
		}
		Map<String, Integer> popularity = new HashMap<>(); //Product code, no of time bought
		
		List<Product> tmpList = getAllInStockProducts(); 
		for(Product p: tmpList) { // Populating initially
			popularity.put(p.getProductCode(), 0);
		}
		
		for(PurchaseItemDTO pi: history) { // populating pseudo popularity
			int rating = (popularity.get(pi.getProduct().getProductCode()) != null) ? popularity.get(pi.getProduct().getProductCode()) : 0;
			popularity.put(pi.getProduct().getProductCode(), rating + 1);
		}
		for(PurchaseItemDTO pi: userItems) { // Populating frequency array for categories
			int index = categoryMap.get(pi.getProduct().getCategory().getCategoryName());
			System.out.println(index + " : " + pi.getQuantity());
			freq[index] += pi.getQuantity();
			System.out.println("Frequency : " + freq[index]);
		}
		
		Product[] suggestions = new Product[tmpList.size()];
		//System.out.println(getAllInStockProducts());
		suggestions = tmpList.toArray(suggestions).clone();
		
		List<Product> sugges = new ArrayList<>();
		
		//Sorting algorithm
		for(int x = 0; x < suggestions.length - 1; x++) {
			for(int y = 0; y < suggestions.length - x - 1; y++) {
				int catIndex = categoryMap.get(suggestions[y].getCategory().getCategoryName());
				int catIndexNext = categoryMap.get(suggestions[y + 1].getCategory().getCategoryName());
				if(freq[catIndex] < freq[catIndexNext]) {
					Product tmp = suggestions[y + 1];
					suggestions[y + 1] = suggestions[y];
					suggestions[y] = tmp;
				}
				if(popularity.get(suggestions[y].getProductCode()) < popularity.get(suggestions[y + 1].getProductCode())) {
					Product tmp = suggestions[y + 1];
					suggestions[y + 1] = suggestions[y];
					suggestions[y] = tmp;
				}
			}
		}
		for(int x = 0; x < suggestions.length; x++) {
			int catIndex = categoryMap.get(suggestions[x].getCategory().getCategoryName());
			if(filter[catIndex] > 0) {
				sugges.add(suggestions[x]);
				filter[catIndex] -= 1;
			}
		}
		
		System.out.println(categoryMap);
		for(int x = 0; x < freq.length; x++) {
			System.out.println(freq[x]);
		}
		
		return sugges;
	}
}
