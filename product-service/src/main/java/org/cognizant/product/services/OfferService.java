package org.cognizant.product.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.cognizant.product.entities.Offer;
import org.cognizant.product.exceptions.OfferAlreadyExistsException;
import org.cognizant.product.exceptions.OfferNotFoundException;
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
	public List<Offer> getAllOffersAdmin() {
		return offerRepository.findAll();
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
	public Offer modifyOffer(Offer offer) {
		return offerRepository.save(offer);
	}
	
	@Transactional
	public void deleteOffer(int offerId) throws OfferNotFoundException {
		Optional<Offer> offer=offerRepository.findById(offerId);
		if(offer.isPresent())
		{
			offerRepository.deleteById(offerId);
		}
		else
		{
			throw new OfferNotFoundException("Offer with id : "+offerId+" is not present in datastore");
		}
		
	}
	
	@Transactional
	public Offer addOffer(Offer offer) throws OfferAlreadyExistsException {
		if(offerRepository.findByProductAndOfferDate(offer.getProduct().getProductCode(),offer.getOfferDate()).isEmpty())
		{
			return offerRepository.save(offer);
		}
		else
		{
			throw new OfferAlreadyExistsException("Offer on product with code : "+offer.getProduct().getProductCode()+" on date : "+offer.getOfferDate()+" is already present");
		}
	}
}
