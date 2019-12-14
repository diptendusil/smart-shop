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
		return offerRepository.findByDate();
	}

	@Transactional
	public Offer getOfferByProduct(String code) {
		return offerRepository.findByProduct(productRepository.findById(code).get());
	}
	
	@Transactional
	public Offer getOfferByProductAndToday(String code) {
		List<Offer> o = offerRepository.findByProductAndOfferDate(code);
		System.out.println(o.get(0));
		return o.get(0);
	}

	@Transactional
	public void modifyOffer(Offer offer) {
		offerRepository.save(offer);
	}
	
	@Transactional
	public void deleteOffer(int offerId) {
		offerRepository.deleteById(offerId);
	}
	
	@Transactional
	public void addOffer(Offer offer) {
		Offer newOffer=new Offer();
		newOffer.setDiscountRate(offer.getDiscountRate());
		newOffer.setOfferDate(offer.getOfferDate());
		newOffer.setOfferName(offer.getOfferName());
		newOffer.setProduct(offer.getProduct());
		offerRepository.save(newOffer);
	}
}
