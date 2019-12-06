package org.cognizant.product.services;

import java.util.List;

import javax.transaction.Transactional;

import org.cognizant.product.entities.Offer;
import org.cognizant.product.repositories.OfferRepository;
import org.cognizant.product.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OfferService {

	@Autowired
	private OfferRepository offerRepository;
	
	@Autowired
	private ProductRepository productRepository;

	@Transactional
	public List<Offer> getAllOffers() {
		return offerRepository.findAll();
	}

	@Transactional
	public Offer getOfferByProduct(String code) {
		return offerRepository.findByProduct(productRepository.findById(code).get());
	}
}
