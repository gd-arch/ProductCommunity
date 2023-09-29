package com.flux.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flux.entity.Product;
import com.flux.entity.Reviews;
import com.flux.repository.ReviewRepo;
import com.flux.service.ReviewServiceInterface;


@Service
public class ReviewService implements ReviewServiceInterface {

	@Autowired
	private ReviewRepo repo;

	
	@Override
	public List<Reviews> getAllReview(Product product) {
		return repo.findByProduct(product);
	}

	

	@Override
	public Long countAllReview() {
		return repo.count();
	}

	
	@Override
	public Double getAverage(Product product) {
		return repo.getAverage(product);
	}



	@Override
	public Product getProductCodeFromEmailId(String email) {
		return repo.getProductCodeFromEmailId(email);
	}



	@Override
	public void deleteReview(int id) {
		repo.deleteById(id);
		return;
	}
}
