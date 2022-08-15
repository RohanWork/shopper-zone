package ecommerce.services;

import java.util.List;

import ecommerce.entities.Seller;

public interface SellerService {
	void registerSeller(Seller seller);
	List<Seller> allSellers();
	Seller findById(int id);
	Seller validate(String userid,String pwd);
	void deleteSeller(int id);
	
}
