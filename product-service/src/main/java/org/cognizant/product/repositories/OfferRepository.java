package org.cognizant.product.repositories;

import java.util.Date;
import java.util.List;

import org.cognizant.product.entities.Offer;
import org.cognizant.product.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Integer>{
	
	public Offer findByProduct(Product product);
	
	@Query(value="SELECT o FROM Offer o WHERE o.offerDate LIKE CURRENT_DATE()")
	public List<Offer> findByDate();
	
	@Query(value="SELECT * from offer o where o.of_pr_code = ?1 and o.of_date like current_date()", nativeQuery=true)
	public List<Offer> findByProductAndOfferDate(String code);
	
	@Query(value="SELECT * from offer o where o.of_pr_code = ?1 and o.of_date like ?2", nativeQuery=true)
	public List<Offer> findByProductAndOfferDate(String code,Date date);
}
