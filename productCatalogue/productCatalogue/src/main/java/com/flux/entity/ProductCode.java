package com.flux.entity;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class ProductCode {

	@Id
	private Long pincode;
	private String message;

	public ProductCode() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductCode(Long code, String message) {
		super();
		this.pincode = code;
		this.message = message;
	}

	public Long getPincode() {
		return pincode;
	}

	public void setPincode(Long pincode) {
		this.pincode = pincode;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
