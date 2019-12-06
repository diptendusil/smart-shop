package org.cognizant.product.repositories;

import org.cognizant.product.entities.Offer;
import org.cognizant.product.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Integer>{
	
	public Offer findByProduct(Product product);
}
