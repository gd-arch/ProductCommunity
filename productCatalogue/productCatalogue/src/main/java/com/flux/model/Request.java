package com.flux.model;

import java.io.Serializable;



public class Request implements Serializable {
	@Override
	public String toString() {
		return "JwtRequest [emailId=" + emailId + ", password=" + password + "]";
	}

	private static final long serialVersionUID = 5926468583005150707L;

	private String emailId;
	private String password;

	// need default constructor for JSON Parsing
	public Request() {

	}

	public Request(String emailId, String password) {
		this.emailId = emailId;
		this.password = password;
	}

	public String getEmailId() {
		return this.emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}