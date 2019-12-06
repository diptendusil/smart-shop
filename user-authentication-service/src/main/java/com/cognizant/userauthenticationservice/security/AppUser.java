package com.cognizant.userauthenticationservice.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.cognizant.userauthenticationservice.entities.Role;
import com.cognizant.userauthenticationservice.entities.User;

public class AppUser implements UserDetails {
	
	private static final long serialVersionUID = -4908203666281178143L;

	private User user;
	private Collection<? extends GrantedAuthority> authorities;
	
	public AppUser() {
		super();
	}
	
	public AppUser(User user) {
		super();
		this.user = user;
		List<Role> roleList = new ArrayList<>();
		roleList.add(user.getRole());
		this.authorities = roleList.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
		
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		return user.getUserId();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
