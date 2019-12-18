package com.cognizant.billingservice.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class User {
	@Id
	@Column(name="us_id")
	private String userId;
	@Column(name="us_first_name")
	private String firstName;
	@Column(name="us_last_name")
	private String lastName;
	@Column(name="us_age")
	private int age;
	@Column(name="us_gender")
	private String gender;
	@Column(name="us_contact")
	private long contact;

	@Column(name="us_password")
	private String password;
	@Column(name="us_status")
	private String status;
	@Column(name="us_secret_question_1")
	private String secretQuestion1;
	@Column(name="us_secret_answer_1")
	private String secretAnswer1;
	@Column(name="us_secret_question_2")
	private String secretQuestion2;
	@Column(name="us_secret_answer_2")
	private String secretAnswer2;
	@Column(name="us_secret_question_3")
	private String secretQuestion3;
	@Column(name="us_secret_answer_3")
	private String secretAnswer3;
	@ManyToOne
	@JoinColumn(name="us_ro_id")
	private Role role;
	public User() {
		super();
	}
	public User(String userId, String firstName, String lastName, int age, String gender, long contact, String password,
			String status, String secretQuestion1, String secretAnswer1, String secretQuestion2, String secretAnswer2,
			String secretQuestion3, String secretAnswer3, Role role) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.contact = contact;
		this.password = password;
		this.status = status;
		this.secretQuestion1 = secretQuestion1;
		this.secretAnswer1 = secretAnswer1;
		this.secretQuestion2 = secretQuestion2;
		this.secretAnswer2 = secretAnswer2;
		this.secretQuestion3 = secretQuestion3;
		this.secretAnswer3 = secretAnswer3;
		this.role = role;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getSecretQuestion1() {
		return secretQuestion1;
	}
	public void setSecretQuestion1(String secretQuestion1) {
		this.secretQuestion1 = secretQuestion1;
	}
	public String getSecretAnswer1() {
		return secretAnswer1;
	}
	public void setSecretAnswer1(String secretAnswer1) {
		this.secretAnswer1 = secretAnswer1;
	}
	public String getSecretQuestion2() {
		return secretQuestion2;
	}
	public void setSecretQuestion2(String secretQuestion2) {
		this.secretQuestion2 = secretQuestion2;
	}
	public String getSecretAnswer2() {
		return secretAnswer2;
	}
	public void setSecretAnswer2(String secretAnswer2) {
		this.secretAnswer2 = secretAnswer2;
	}
	public String getSecretQuestion3() {
		return secretQuestion3;
	}
	public void setSecretQuestion3(String secretQuestion3) {
		this.secretQuestion3 = secretQuestion3;
	}
	public String getSecretAnswer3() {
		return secretAnswer3;
	}
	public void setSecretAnswer3(String secretAnswer3) {
		this.secretAnswer3 = secretAnswer3;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age
				+ ", gender=" + gender + ", contact=" + contact + ", password=" + password + ", status=" + status
				+ ", secretQuestion1=" + secretQuestion1 + ", secretAnswer1=" + secretAnswer1 + ", secretQuestion2="
				+ secretQuestion2 + ", secretAnswer2=" + secretAnswer2 + ", secretQuestion3=" + secretQuestion3
				+ ", secretAnswer3=" + secretAnswer3 + ", role=" + role + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + age;
		result = prime * result + (int) (contact ^ (contact >>> 32));
		result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
		result = prime * result + ((gender == null) ? 0 : gender.hashCode());
		result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((role == null) ? 0 : role.hashCode());
		result = prime * result + ((secretAnswer1 == null) ? 0 : secretAnswer1.hashCode());
		result = prime * result + ((secretAnswer2 == null) ? 0 : secretAnswer2.hashCode());
		result = prime * result + ((secretAnswer3 == null) ? 0 : secretAnswer3.hashCode());
		result = prime * result + ((secretQuestion1 == null) ? 0 : secretQuestion1.hashCode());
		result = prime * result + ((secretQuestion2 == null) ? 0 : secretQuestion2.hashCode());
		result = prime * result + ((secretQuestion3 == null) ? 0 : secretQuestion3.hashCode());
		result = prime * result + ((status == null) ? 0 : status.hashCode());
		result = prime * result + ((userId == null) ? 0 : userId.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (age != other.age)
			return false;
		if (contact != other.contact)
			return false;
		if (firstName == null) {
			if (other.firstName != null)
				return false;
		} else if (!firstName.equals(other.firstName))
			return false;
		if (gender == null) {
			if (other.gender != null)
				return false;
		} else if (!gender.equals(other.gender))
			return false;
		if (lastName == null) {
			if (other.lastName != null)
				return false;
		} else if (!lastName.equals(other.lastName))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (role == null) {
			if (other.role != null)
				return false;
		} else if (!role.equals(other.role))
			return false;
		if (secretAnswer1 == null) {
			if (other.secretAnswer1 != null)
				return false;
		} else if (!secretAnswer1.equals(other.secretAnswer1))
			return false;
		if (secretAnswer2 == null) {
			if (other.secretAnswer2 != null)
				return false;
		} else if (!secretAnswer2.equals(other.secretAnswer2))
			return false;
		if (secretAnswer3 == null) {
			if (other.secretAnswer3 != null)
				return false;
		} else if (!secretAnswer3.equals(other.secretAnswer3))
			return false;
		if (secretQuestion1 == null) {
			if (other.secretQuestion1 != null)
				return false;
		} else if (!secretQuestion1.equals(other.secretQuestion1))
			return false;
		if (secretQuestion2 == null) {
			if (other.secretQuestion2 != null)
				return false;
		} else if (!secretQuestion2.equals(other.secretQuestion2))
			return false;
		if (secretQuestion3 == null) {
			if (other.secretQuestion3 != null)
				return false;
		} else if (!secretQuestion3.equals(other.secretQuestion3))
			return false;
		if (status == null) {
			if (other.status != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		if (userId == null) {
			if (other.userId != null)
				return false;
		} else if (!userId.equals(other.userId))
			return false;
		return true;
	}
	
	
}
