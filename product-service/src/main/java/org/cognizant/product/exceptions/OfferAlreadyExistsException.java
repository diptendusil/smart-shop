package org.cognizant.product.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.ALREADY_REPORTED, reason="Offer Already Exists")
public class OfferAlreadyExistsException extends Exception{

	private static final long serialVersionUID = 1L;

	public OfferAlreadyExistsException() {
		super();
	}
	
	public OfferAlreadyExistsException(String message) {
		super(message);
	}
}
