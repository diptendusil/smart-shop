package com.cognizant.billingservice.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.cognizant.billingservice.entities.Bill;
import com.cognizant.billingservice.entities.User;
import com.cognizant.billingservice.exception.BillNotFoundException;
import com.cognizant.billingservice.repository.BillRepository;
import com.cognizant.billingservice.repository.PurchaseItemRepository;

@Service
public class BillService {
	@Autowired
	BillRepository billRepository;
	
	@Autowired
	PurchaseItemRepository purchaseItemRepository;
	@Transactional
	public List<Bill> getAllBills() {
		return this.billRepository.findAll(Sort.by(Sort.Direction.DESC, "date"));
	}
	
	@Transactional
	public Bill getBillById(Integer billId)throws BillNotFoundException {
		Optional<Bill> bill = this.billRepository.findById(billId);
		if(bill.isPresent()) {
			return bill.get();
		} else {
			throw new BillNotFoundException("Bill with id : "+billId+" is not present in datastore");
		}
	}
	@Transactional
	public List<Bill> getBillsByUser(User user) {
		List<Bill> billList = this.billRepository.findByUserOrderByDateDesc(user);
		return billList;
	}
	@Transactional
	public Bill addBill(Bill bill) {
		return this.billRepository.save(bill);
	}
	@Transactional
	public Bill modifyBill(Bill updatedBill) {
		return this.billRepository.save(updatedBill);
	}
	@Transactional
	public void deleteBill(Integer id) {
		this.billRepository.deleteById(id);
	}
}
