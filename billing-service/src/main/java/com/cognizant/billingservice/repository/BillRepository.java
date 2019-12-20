package com.cognizant.billingservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.billingservice.entities.Bill;
import com.cognizant.billingservice.entities.User;
@Repository
public interface BillRepository extends JpaRepository<Bill, Integer> {
	List<Bill> findByUserOrderByDateDesc(User user);
	
	@Query(value="select * from bill where bi_date = CURRENT_DATE()", nativeQuery=true)
	List<Bill> findByDateToday();
}
