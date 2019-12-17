package org.cognizant.product.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.ALREADY_REPORTED, reason="Category Already Exists")
public class CategoryAlreadyExistsException extends Exception{

	private static final long serialVersionUID = 1L;

	public CategoryAlreadyExistsException() {
		super();
	}
	
	public CategoryAlreadyExistsException(String message) {
		super(message);
	}
}
