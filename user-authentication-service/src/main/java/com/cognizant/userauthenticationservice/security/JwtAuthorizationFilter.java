package com.cognizant.userauthenticationservice.security;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

	public JwtAuthorizationFilter(AuthenticationManager authenticationManager) {
		super(authenticationManager);
		
	}

	@Override
	public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		String header=request.getHeader("Authorization");
		System.out.println("Authorization header : " + header);
		if(header==null||!header.startsWith("Bearer ")) {

			chain.doFilter(request, response);
			
			return;
		}
		UsernamePasswordAuthenticationToken authentication=getAuthentication(request);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		chain.doFilter(request, response);

	}
	
	private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
		String token=request.getHeader("Authorization");
		if(token!=null) {
			Jws<Claims> jws;
			try {
				jws=Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token.replace("Bearer ", ""));
				String user=jws.getBody().getSubject();
				ArrayList<SimpleGrantedAuthority> auths = new ArrayList<>();
				auths.add(new SimpleGrantedAuthority((String)jws.getBody().get("role")));
				if(user!=null) {
					return new UsernamePasswordAuthenticationToken(user, null, auths);
				}
			}catch(JwtException ex) {
				return null;
			}
			return null;
		}
		return null;
	}

}
