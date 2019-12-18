package org.cognizant.product.exceptions;

import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.fasterxml.jackson.databind.exc.InvalidFormatException;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	protected ResponseEntity<Object> handleHttpMessageNotReadable(CategoryAlreadyExistsException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<String, Object>();
		body.put("timestamp", new Date());
		body.put("status", status.value());
		body.put("error", "Bad Request");

		if (ex.getCause() instanceof InvalidFormatException) {
			final Throwable cause = ex.getCause() == null ? ex : ex.getCause();
			for (InvalidFormatException.Reference reference : ((InvalidFormatException) cause).getPath()) {
				body.put("message", "Incorrect format for field '" + reference.getFieldName() + "'");
			}
		}
		return new ResponseEntity<>(body, headers, status);
	}
	
	protected ResponseEntity<Object> handleMethodArgumentNotValid(CategoryAlreadyExistsException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<String, Object>();
		body.put("timestamp", new Date());
		body.put("status", status.value());
		body.put("message", "Category already exists");

		return new ResponseEntity<>(body, headers, status);
	}
	
	protected ResponseEntity<Object> handleHttpMessageNotReadable(CategoryNotFoundException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<String, Object>();
		body.put("timestamp", new Date());
		body.put("status", status.value());
		body.put("error", "Bad Request");

		if (ex.getCause() instanceof InvalidFormatException) {
			final Throwable cause = ex.getCause() == null ? ex : ex.getCause();
			for (InvalidFormatException.Reference reference : ((InvalidFormatException) cause).getPath()) {
				body.put("message", "Incorrect format for field '" + reference.getFieldName() + "'");
			}
		}
		return new ResponseEntity<>(body, headers, status);
	}
	
	protected ResponseEntity<Object> handleMethodArgumentNotValid(CategoryNotFoundException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<String, Object>();
		body.put("timestamp", new Date());
		body.put("status", status.value());
		body.put("message", "Category not found");

		return new ResponseEntity<>(body, headers, status);
	}
	
	protected ResponseEntity<Object> handleHttpMessageNotReadable(OfferAlreadyExistsException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<String, Object>();
		body.put("timestamp", new Date());
		body.put("status", status.value());
		body.put("error", "Bad Request");

		if (ex.getCause() instanceof InvalidFormatException) {
			final Throwable cause = ex.getCause() == null ? ex : ex.getCause();
			for (InvalidFormatException.Reference reference : ((InvalidFormatException) cause).getPath()) {
				body.put("message", "Incorrect format for field '" + reference.getFieldName() + "'");
			}
		}
		return new ResponseEntity<>(body, headers, status);
	}
	
	protected ResponseEntity<Object> handleMethodArgumentNotValid(OfferAlreadyExistsException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<String, Object>();
		body.put("timestamp", new Date());
		body.put("status", status.value());
		body.put("message", "Offer already exists");

		return new ResponseEntity<>(body, headers, status);
	}
	
	protected ResponseEntity<Object> handleHttpMessageNotReadable(OfferNotFoundException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<String, Object>();
		body.put("timestamp", new Date());
		body.put("status", status.value());
		body.put("error", "Bad Request");

		if (ex.getCause() instanceof InvalidFormatException) {
			final Throwable cause = ex.getCause() == null ? ex : ex.getCause();
			for (InvalidFormatException.Reference reference : ((InvalidFormatException) cause).getPath()) {
				body.put("message", "Incorrect format for field '" + reference.getFieldName() + "'");
			}
		}
		return new ResponseEntity<>(body, headers, status);
	}
	
	protected ResponseEntity<Object> handleMethodArgumentNotValid(OfferNotFoundException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<String, Object>();
		body.put("timestamp", new Date());
		body.put("status", status.value());
		body.put("message", "Offer not found");

		return new ResponseEntity<>(body, headers, status);
	}
	
	protected ResponseEntity<Object> handleHttpMessageNotReadable(ProductAlreadyExistsException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<String, Object>();
		body.put("timestamp", new Date());
		body.put("status", status.value());
		body.put("error", "Bad Request");

		if (ex.getCause() instanceof InvalidFormatException) {
			final Throwable cause = ex.getCause() == null ? ex : ex.getCause();
			for (InvalidFormatException.Reference reference : ((InvalidFormatException) cause).getPath()) {
				body.put("message", "Incorrect format for field '" + reference.getFieldName() + "'");
			}
		}
		return new ResponseEntity<>(body, headers, status);
	}
	
	protected ResponseEntity<Object> handleMethodArgumentNotValid(ProductAlreadyExistsException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<String, Object>();
		body.put("timestamp", new Date());
		body.put("status", status.value());
		body.put("message", "Product already exists");

		return new ResponseEntity<>(body, headers, status);
	}
	
	protected ResponseEntity<Object> handleHttpMessageNotReadable(ProductNotFoundException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<String, Object>();
		body.put("timestamp", new Date());
		body.put("status", status.value());
		body.put("error", "Bad Request");

		if (ex.getCause() instanceof InvalidFormatException) {
			final Throwable cause = ex.getCause() == null ? ex : ex.getCause();
			for (InvalidFormatException.Reference reference : ((InvalidFormatException) cause).getPath()) {
				body.put("message", "Incorrect format for field '" + reference.getFieldName() + "'");
			}
		}
		return new ResponseEntity<>(body, headers, status);
	}
	
	protected ResponseEntity<Object> handleMethodArgumentNotValid(ProductNotFoundException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> body = new LinkedHashMap<String, Object>();
		body.put("timestamp", new Date());
		body.put("status", status.value());
		body.put("message", "Product not found");

		return new ResponseEntity<>(body, headers, status);
	}
}
