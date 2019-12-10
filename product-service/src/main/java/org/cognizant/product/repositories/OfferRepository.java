package org.cognizant.product.repositories;

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
}
