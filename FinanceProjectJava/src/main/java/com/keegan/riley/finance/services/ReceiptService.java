package com.keegan.riley.finance.services;

import com.keegan.riley.finance.models.Receipt;
import com.keegan.riley.finance.repositories.ReceiptRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReceiptService {

	@Autowired
	private ReceiptRepository repository;
	
	List<Receipt> list = new ArrayList<>();
	
	public List<Receipt> findAll(List<Receipt> array) {
		repository.findAll().forEach(array::add);
		return array;
	}
	
	public void saveReceipt(Receipt r) {
		repository.save(r);
	}
	
	public void deleteBook(Receipt r) {
		repository.delete(r);
	}
	
	public Receipt findbyReceiptId(String id) {
		Receipt r = new Receipt();
		r = repository.findByReceiptId(id);
		return r;
	}
	
}
