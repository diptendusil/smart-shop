package org.cognizant.product.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.NOT_FOUND,reason="Category Not Found")
public class CategoryNotFoundException extends Exception{
	
	private static final long serialVersionUID = 1L;

	public CategoryNotFoundException() {
		super();
	}
	
	public CategoryNotFoundException(String message) {
		super(message);
	}

}
