package com.flux.serviceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flux.entity.User;
import com.flux.repository.RegistrationRepo;
import com.flux.service.RegistrationServiceInterface;


@Service
public class RegistrationService implements RegistrationServiceInterface {

	@Autowired
	private RegistrationRepo repo;

	
	@Override
	public User saveUser(User user) {
		return repo.save(user);
	}

	
	@Override
	public User fetchUserByEmailId(String emailId) {
		return repo.findByEmailId(emailId);
	}

	
	@Override
	public Long countAllRegistrated() {
		return repo.count();
	}

}
