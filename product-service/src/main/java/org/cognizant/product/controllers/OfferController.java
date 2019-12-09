package org.cognizant.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.cognizant.product.dto.CategoryDto;
import org.cognizant.product.dto.OfferDto;
import org.cognizant.product.dto.ProductDto;
import org.cognizant.product.entities.Offer;
import org.cognizant.product.entities.Product;
import org.cognizant.product.services.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/offers")
public class OfferController {
	
	@Autowired
	private OfferService offerService;
	
	@GetMapping
	public List<OfferDto> getAllOffers(){
		return convertOffersToOfferDtos(offerService.getAllOffers());
	}
	
	@GetMapping("/{code}")
	public OfferDto getOfferByProduct(@PathVariable String code) {
		return convertOfferToOfferDto(offerService.getOfferByProduct(code));
	}
	
	@PutMapping
	public void modifyOffer(@RequestBody OfferDto offerDto) {
		//offerService.modifyOffer(convertProductDtoToProduct(productDto));
	}
	
	public Offer convertOfferDtoToOffer(OfferDto offerDto) {
		return null;
	}
	
	public OfferDto convertOfferToOfferDto(Offer offer) {
		OfferDto offerDto=new OfferDto(offer.getOfferId(), offer.getOfferDate(), offer.getDiscountRate(), offer.getOfferName(), null);
		Product product=offer.getProduct();
		ProductDto productDto=new ProductDto(product.getProductCode(), product.getProductName(), product.getBrand(), product.getRate(),
				product.getStockCount(),product.getAddDate(),product.getAisle(),product.getShelf(),product.getDateOfManufacture(),product.getDateOfExpiry(),
				product.getImage(),null);
		if(product.getQuantityType()!=null)
			productDto.setQuantityType(product.getQuantityType());
		CategoryDto categoryDto=new CategoryDto(product.getCategory().getCategoryId(), product.getCategory().getCategoryName(),null);
		productDto.setCategory(categoryDto);
		return offerDto;
	}
	public List<OfferDto> convertOffersToOfferDtos(List<Offer> offers) {
		List<OfferDto> offerList=new ArrayList<OfferDto>();
		for(Offer offer:offers) {
			OfferDto offerDto=convertOfferToOfferDto(offer);
			offerList.add(offerDto);
		}
		return offerList;
	}
}
