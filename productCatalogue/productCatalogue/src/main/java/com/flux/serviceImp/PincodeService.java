package com.flux.serviceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flux.entity.ProductCode;
import com.flux.repository.PincodeRepo;
import com.flux.service.PincodeServiceInterface;

@Service
public class PincodeService implements PincodeServiceInterface {

	@Autowired
	private PincodeRepo repo;

	public ProductCode getPincode(Long pincode) {

		ProductCode pinObj = repo.findByPincode(pincode);
		return pinObj;
	}

}
