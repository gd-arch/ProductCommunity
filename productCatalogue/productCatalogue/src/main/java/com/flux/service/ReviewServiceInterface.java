package com.flux.service;

import java.util.List;
/**
 * Here we have created an Interface which contains methods to  retrieve, and count the reviews given by the user.
 * 
 *
 */

import com.flux.entity.Product;
import com.flux.entity.Reviews;

public interface ReviewServiceInterface {

	public List<Reviews> getAllReview(Product product);

	
	public Long countAllReview();
	

	public Double getAverage(Product product);
	
	
	public Product getProductCodeFromEmailId(String email);
	
	public void deleteReview(int id);
}
