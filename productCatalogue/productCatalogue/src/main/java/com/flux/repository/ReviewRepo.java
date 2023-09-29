package com.flux.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.flux.entity.Product;
import com.flux.entity.Reviews;

public interface ReviewRepo extends JpaRepository<Reviews, Integer> {
	public List<Reviews> findByProduct(Product product);

	@Query("select avg(r.rating) from Reviews r where r.product=:product")
	public Double getAverage(@Param("product") Product product);
	
	@Query("SELECT product FROM Reviews where email_id=:emailId")
	public Product getProductCodeFromEmailId(@Param("emailId") String email);
	
	
}
