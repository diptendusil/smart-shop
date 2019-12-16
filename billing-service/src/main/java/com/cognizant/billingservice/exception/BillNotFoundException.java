package com.cognizant.billingservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.NOT_FOUND, reason="Bill Not Found")
public class BillNotFoundException extends Exception {

	private static final long serialVersionUID = 1L;

	public BillNotFoundException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BillNotFoundException(String message) {
		super(message);
	}
	
}
