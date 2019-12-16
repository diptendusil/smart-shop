package com.cognizant.billingservice.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.billingservice.entities.Bill;
import com.cognizant.billingservice.entities.PurchaseItem;
import com.cognizant.billingservice.exception.PurchaseItemNotFoundException;
import com.cognizant.billingservice.repository.PurchaseItemRepository;

@Service
public class PurchaseItemService {
	@Autowired
	PurchaseItemRepository purchaseItemRepository;
	
	@Transactional
	public List<PurchaseItem> getAllPurchaseItemsByBill(Bill bill) {
		return this.purchaseItemRepository.findByBill(bill);
	}
	@Transactional
	public PurchaseItem getPurchaseItemById(Integer id) throws PurchaseItemNotFoundException {
		Optional<PurchaseItem> purchaseItem = this.purchaseItemRepository.findById(id);
		if(purchaseItem.isPresent()) {
			return purchaseItem.get();
		} else {
			throw new PurchaseItemNotFoundException();
		}
	}
	@Transactional
	public PurchaseItem addPurchaseItem(PurchaseItem purchaseItem) {
		return this.purchaseItemRepository.save(purchaseItem);
	}
	@Transactional
	public PurchaseItem modifyPurchaseItem(PurchaseItem purchaseItem) {
		return this.purchaseItemRepository.save(purchaseItem);
	}
	@Transactional
	public void deletePurchaseItem(PurchaseItem purchaseItem) {
		this.purchaseItemRepository.delete(purchaseItem);
	}
}
