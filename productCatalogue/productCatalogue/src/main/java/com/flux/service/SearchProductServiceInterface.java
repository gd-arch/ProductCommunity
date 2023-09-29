package com.flux.service;

import java.util.List;

import com.flux.entity.Product;


public interface SearchProductServiceInterface {

	public List<Product> getProductListBySearch(String search);

	public List<Product> searchPrice(int min, int max, String brand);
	
	

}
