package com.flux.service;

import com.flux.entity.Product;
import java.util.*;


public interface ProductServiceInterface {

	public Product saveProduct(Product product);

	public Product getProduct(String productCode);

	public void updateProductReview(Product product);

	public Long countAllProduct();
	
	public List<Product> getProducts();

}
