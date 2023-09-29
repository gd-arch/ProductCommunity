package com.flux.serviceImp;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.flux.entity.Product;
import com.flux.repository.SearchProductRepo;
import com.flux.service.SearchProductServiceInterface;

@Service
public class SearchProductService implements SearchProductServiceInterface {

	@Autowired
	private SearchProductRepo repo;

	@Override
	public List<Product> getProductListBySearch(String search) {
		return repo.findBySearch(search);
	}
	
	
	@Override
	public List<Product> searchPrice(int min, int max, String brand) {
		// TODO Auto-generated method stub
		return repo.searchPrice(min, max,brand);
	}

}
