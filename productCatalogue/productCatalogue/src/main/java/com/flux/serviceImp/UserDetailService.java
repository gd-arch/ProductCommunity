package com.flux.serviceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;
import com.flux.entity.User;
import com.flux.model.UserInfo;


@Service
public class UserDetailService implements UserDetailsService {

	@Autowired
	private RegistrationService repository;

	@Override
	public UserInfo loadUserByUsername(String emailId) throws UsernameNotFoundException {
		

		final User user = this.repository.fetchUserByEmailId(emailId);
		if (user == null) {
			return null;
		} else {
			return new UserInfo(user);
		}
	}

}