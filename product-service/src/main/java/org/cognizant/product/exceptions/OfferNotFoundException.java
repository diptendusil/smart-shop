package org.cognizant.product.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.NOT_FOUND,reason="Offer Not Found")
public class OfferNotFoundException extends Exception{
	
	private static final long serialVersionUID = 1L;

	public OfferNotFoundException() {
		super();
	}
	
	public OfferNotFoundException(String message) {
		super(message);
	}

}
