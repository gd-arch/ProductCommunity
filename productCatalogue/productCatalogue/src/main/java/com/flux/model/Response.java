package com.flux.model;

import java.io.Serializable;
public class Response implements Serializable {
	private static final long serialVersionUID = -8091879091924046844L;
	private final String jwttoken;
	private final String userName;

	public Response(String jwttoken, String userName) {
		this.jwttoken = jwttoken;
		this.userName = userName;
	}

	public String getToken() {
		return this.jwttoken;
	}

	public String getUserName() {
		return this.userName;
	}
}