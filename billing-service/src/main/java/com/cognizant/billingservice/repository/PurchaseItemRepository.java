package com.cognizant.billingservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.billingservice.entities.Bill;
import com.cognizant.billingservice.entities.PurchaseItem;
@Repository
public interface PurchaseItemRepository extends JpaRepository<PurchaseItem, Integer> {
	List<PurchaseItem> findByBill(Bill bill);

}
