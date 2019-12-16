package com.cognizant.billingservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.NOT_FOUND, reason="Purchase Item not Found")
public class PurchaseItemNotFoundException extends Exception {
	private static final long serialVersionUID = 1L;

	public PurchaseItemNotFoundException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PurchaseItemNotFoundException(String message) {
		super(message);
	}
	
}
