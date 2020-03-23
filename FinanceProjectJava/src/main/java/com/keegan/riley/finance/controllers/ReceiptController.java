package com.keegan.riley.finance.controllers;

import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.keegan.riley.finance.models.Receipt;
import com.keegan.riley.finance.services.ReceiptService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ReceiptController {
	
	@Autowired
	ReceiptService service;
	
	@GetMapping("/receipts")
	public List<Receipt> getReceiptList() {
		List<Receipt> r = new ArrayList<>();
		return service.findAll(r);
	}
	
	@PostMapping("/createReceipt")
	public Receipt makeReceipt(@RequestBody Receipt r) {
		service.saveReceipt(r);
		return r;
	}
	
	@PostMapping("/deleteReceipt")
	public Receipt deleteReceipt(@RequestBody Receipt r) {
		service.deleteBook(r);
		return r;
	}

}
