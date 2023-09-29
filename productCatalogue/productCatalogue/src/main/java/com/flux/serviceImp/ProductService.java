package com.flux.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flux.entity.Product;
import com.flux.repository.ProductRepo;
import com.flux.service.ProductServiceInterface;


@Service
public class ProductService implements ProductServiceInterface {
	@Autowired
	private ProductRepo repo;

	
	@Override
	public Product saveProduct(Product product) {
		Product productObj = repo.save(product);
		return productObj;
	}

	
	@Override
	public Product getProduct(String productCode) {

		Product productObj = repo.findByProductCode(productCode);
		return productObj;
	}

	
	@Override
	public void updateProductReview(Product product) {
		repo.save(product);
	}

	
	@Override
	public Long countAllProduct() {
		return repo.count();
	}

	

	@Override
	public List<Product> getProducts() {
		
		return repo.findAll();
	}

}