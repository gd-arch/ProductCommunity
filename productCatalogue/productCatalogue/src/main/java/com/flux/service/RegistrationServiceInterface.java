package com.flux.service;

import com.flux.entity.User;

public interface RegistrationServiceInterface {

	public User saveUser(User user);
	
	public User fetchUserByEmailId(String emailId);
	
	public Long countAllRegistrated();
}
