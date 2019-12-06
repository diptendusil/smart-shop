package com.cognizant.userauthenticationservice.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Role {
	@Id
	@Column(name="ro_id")
	private String roleId;
	@Column(name="ro_name")
	private String name;
	@JsonIgnore
	@OneToMany(mappedBy="role", fetch=FetchType.EAGER)
	private List<User> users;
	public Role() {
		super();
	}
	public Role(String roleId, String name, List<User> users) {
		super();
		this.roleId = roleId;
		this.name = name;
		this.users = users;
	}
	public String getRoleId() {
		return roleId;
	}
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
	
	
}
