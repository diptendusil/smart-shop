package com.cognizant.userauthenticationservice.controller;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.userauthenticationservice.entities.User;
import com.cognizant.userauthenticationservice.service.AppUserDetailsService;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {

//	@GetMapping("/authenticate")
//	public String authenticate(@RequestHeader("Authorization") String authHeader) {
//		System.out.println(SecurityContextHolder.getContext().getAuthentication().getPrincipal());
//		return authHeader;
//	}
	
	@Autowired
	private AppUserDetailsService appUserDetailsService;
	
	@GetMapping("/authenticate")
	public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
		
		String user = getUser(authHeader);
		String role = SecurityContextHolder.getContext().getAuthentication().getAuthorities().toArray()[0].toString();
		User userObj = appUserDetailsService.getUser(user);
		if(userObj.getStatus().equalsIgnoreCase("P")) {
			System.out.println("Pending");
			SecurityContextHolder.getContext().setAuthentication(null);
			throw new AccessDeniedException("User is not approved");
		}
		Map<String, String> auth = new HashMap<String, String>();
		auth.put("token", generateJwt(user, role));
		auth.put("role", role);
		return auth;
	}

	private String getUser(String authHeader) {
		byte[] auth = Base64.getDecoder().decode(authHeader.split(" ")[1]);
		String authStr = new String(auth);
		return authStr.split(":")[0];
	}

	private String generateJwt(String user, String role) {
		JwtBuilder builder = Jwts.builder();
		builder.setSubject(user);
		builder.claim("role", role);
		builder.setIssuedAt(new Date());
		builder.setExpiration(new Date(new Date().getTime() + 1200000));
		builder.signWith(SignatureAlgorithm.HS256, "secretkey");
		String token = builder.compact();
		return token;
	}
}
