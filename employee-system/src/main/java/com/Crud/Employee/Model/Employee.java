package com.Crud.Employee.Model;

import lombok.*;



public class Employee {

	private Long id;
	private String FirstName;
	private String LastName;
	private String emailId;

	public Employee() {
		
	}
	public Employee(Long id, String firstName, String lastName, String emailId) {
	
		this.id = id;
		FirstName = firstName;
		LastName = lastName;
		this.emailId = emailId;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	
}
