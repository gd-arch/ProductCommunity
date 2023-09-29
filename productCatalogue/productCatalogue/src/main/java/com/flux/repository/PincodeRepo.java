package com.flux.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flux.entity.ProductCode;



@Repository
public interface PincodeRepo extends JpaRepository<ProductCode, Long> {

	public ProductCode findByPincode(Long pincode);

}
