package org.cognizant.product.repositories;

import java.util.List;

import org.cognizant.product.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
	
	@Query(value="select * from product where pr_ca_id=?1", nativeQuery=true)
	public List<Product> findProductsByCategory(int id);
}
