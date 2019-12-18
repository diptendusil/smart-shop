package org.cognizant.product.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.NOT_FOUND,reason="Product Not Found")
public class ProductNotFoundException extends Exception{
	
	private static final long serialVersionUID = 1L;

	public ProductNotFoundException() {
		super();
	}
	
	public ProductNotFoundException(String message) {
		super(message);
	}

}
