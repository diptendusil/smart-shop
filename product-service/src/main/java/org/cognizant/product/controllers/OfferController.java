package org.cognizant.product.controllers;

import java.util.List;

import org.cognizant.product.entities.Offer;
import org.cognizant.product.services.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/offers")
public class OfferController {
	
	@Autowired
	private OfferService offerService;
	
	@GetMapping
	public List<Offer> getAllOffers(){
		return offerService.getAllOffers();
	}
	
	@GetMapping("/{code}")
	public Offer getOfferByProduct(@PathVariable String code) {
		return offerService.getOfferByProduct(code);
	}
}
