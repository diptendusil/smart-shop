package com.cognizant.billingservice.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.cognizant.billingservice.dto.BillDTO;
import com.cognizant.billingservice.dto.CategoryDTO;
import com.cognizant.billingservice.dto.ProductDTO;
import com.cognizant.billingservice.dto.PurchaseItemDTO;
import com.cognizant.billingservice.entities.Bill;
import com.cognizant.billingservice.entities.Category;
import com.cognizant.billingservice.entities.Product;
import com.cognizant.billingservice.entities.PurchaseItem;
import com.cognizant.billingservice.entities.RewardPoint;
import com.cognizant.billingservice.entities.User;
import com.cognizant.billingservice.exception.BillNotFoundException;
import com.cognizant.billingservice.service.BillService;

@RestController
@RequestMapping("/bill")
public class BillingController {
	@Autowired
	RestTemplate restTemplate;
	@Autowired
	BillService billService;

	private User getUser(String username) {
		User user = restTemplate.getForObject("http://user-authentication-service/users/" + username, User.class);
		return user;
	}

	@GetMapping("/all")
	public List<BillDTO> getAllBills() {
		return this.billService.getAllBills().stream().map(bill -> convertBillToBillDTO(bill))
				.collect(Collectors.toList());
	}
	@GetMapping("/id/{id}")
	public BillDTO getBillById(@PathVariable("id") Integer id) throws BillNotFoundException {
		return convertBillToBillDTO(this.billService.getBillById(id));
	}
	@GetMapping("/user/{username}")
	public List<BillDTO> getAllBillsByUser(@PathVariable("username") String username) {
		User user = getUser(username);
		return this.billService.getBillsByUser(user).stream().map(bill -> convertBillToBillDTO(bill))
				.collect(Collectors.toList());
	}

	@PostMapping
	public BillDTO addBill(@RequestBody Bill bill) {
		System.out.println("Bill" + bill);
		List<PurchaseItem> purchaseItems = new ArrayList<>();
		purchaseItems = bill.getPurchaseItems();
		purchaseItems.forEach((PurchaseItem purchaseItem) -> {
			purchaseItem.setBill(bill);
		});
		BillDTO billDTO = convertBillToBillDTO(this.billService.addBill(bill));
		return billDTO;
	}

	@PutMapping
	public BillDTO modifyBill(@RequestBody Bill updatedBill) {
		BillDTO billDTO = convertBillToBillDTO(this.billService.modifyBill(updatedBill));
		return billDTO;
	}

	@DeleteMapping("/{id}")
	public void deleteBill(@PathVariable("id") Integer id) {
		this.billService.deleteBill(id);
	}

	
	@GetMapping("/points/{userId}")
	public RewardPoint getPointsByUserId(@PathVariable String userId) {
		return this.billService.getPointsByUserId(userId);
	}
	
	@PostMapping("/points/{points}")
	public RewardPoint addRewardPoints(@RequestBody User user, @PathVariable Integer points) {
		return this.billService.addPoints(user, points);
	}
	
	
	
	
	
	
	
	//DTO methods
	
	public Product convertProductDtoToProduct(ProductDTO productDto) {
		Category category = new Category(productDto.getCategory().getCategoryId(),
				productDto.getCategory().getCategoryName());
		Product product = new Product(productDto.getProductCode(), productDto.getProductName(), productDto.getBrand(),
				productDto.getRate(), productDto.getStockCount(), productDto.getAddDate(), productDto.getAisle(),
				productDto.getShelf(), productDto.getDateOfManufacture(), productDto.getDateOfExpiry(),
				productDto.getImage(), category);
		return product;
	}

	public ProductDTO convertProductToProductDto(Product product) {
		ProductDTO productDto = new ProductDTO(product.getProductCode(), product.getProductName(), product.getBrand(),
				product.getRate(), product.getStockCount(), product.getAddDate(), product.getAisle(),
				product.getShelf(), product.getDateOfManufacture(), product.getDateOfExpiry(), product.getImage(),
				null);
		if (product.getQuantityType() != null)
			productDto.setQuantityType(product.getQuantityType());
		CategoryDTO categoryDto = new CategoryDTO(product.getCategory().getCategoryId(),
				product.getCategory().getCategoryName(), null);
		productDto.setCategory(categoryDto);
		return productDto;
	}

	public PurchaseItem convertPurchaseItemDTOToPurchaseItem(PurchaseItemDTO purchaseItemDTO) {
		Product product = convertProductDtoToProduct(purchaseItemDTO.getProduct());
		PurchaseItem purchaseItem = new PurchaseItem(purchaseItemDTO.getPurchaseId(), purchaseItemDTO.getQuantity(),
				purchaseItemDTO.getPrice(), product, null);
		return purchaseItem;
	}

	public PurchaseItemDTO convertPurchaseItemToPurchaseItemDTO(PurchaseItem purchaseItem) {
		ProductDTO productDTO = convertProductToProductDto(purchaseItem.getProduct());
		PurchaseItemDTO purchaseItemDTO = new PurchaseItemDTO(purchaseItem.getPurchaseId(), purchaseItem.getQuantity(),
				purchaseItem.getPrice(), productDTO, null);
		return purchaseItemDTO;
	}

	public Bill convertBillDTOToBill(BillDTO billDTO) {
		List<PurchaseItem> purchaseItems = billDTO.getPurchaseItems().stream()
				.map(purchaseItemDTO -> convertPurchaseItemDTOToPurchaseItem(purchaseItemDTO))
				.collect(Collectors.toList());
		Bill bill = new Bill(billDTO.getBillId(), billDTO.getTotal(), billDTO.getRewardPoints(), billDTO.getDate(),
				billDTO.getUser(), purchaseItems);
		return bill;
	}

	public BillDTO convertBillToBillDTO(Bill bill) {
		List<PurchaseItemDTO> purchaseItems = bill.getPurchaseItems().stream()
				.map(purchaseItem -> convertPurchaseItemToPurchaseItemDTO(purchaseItem)).collect(Collectors.toList());
		BillDTO billDTO = new BillDTO(bill.getBillId(), bill.getTotal(), bill.getRewardPoints(), bill.getDate(),
				bill.getUser(), purchaseItems);
		return billDTO;
	}
}
