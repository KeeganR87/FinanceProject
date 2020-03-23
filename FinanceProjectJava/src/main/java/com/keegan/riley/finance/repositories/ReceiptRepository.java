package com.keegan.riley.finance.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.keegan.riley.finance.models.Receipt;

@Repository
public interface ReceiptRepository extends MongoRepository<Receipt, String>{
	
	List<Receipt> findAll();
	Receipt findByReceiptId(String id);
	
}
