package org.cognizant.product.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.ALREADY_REPORTED, reason="Product Already Exists")
public class ProductAlreadyExistsException extends Exception{

	private static final long serialVersionUID = 1L;

	public ProductAlreadyExistsException() {
		super();
	}
	
	public ProductAlreadyExistsException(String message) {
		super(message);
	}
}
