package com.keegan.riley.finance.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Document(collection = "Receipts")
public class Receipt {
	
	@Id
	private ObjectId _id;
	
	public int dayNum;
	public int monthNum;
	public float amountSpent;
	public String methodPayment;
	public String store;
	public String description;
	
	public Receipt() {
		
	}
	
	public Receipt(Receipt r) {
		this.dayNum = r.dayNum;
		this.monthNum = r.monthNum;
		this.amountSpent = r.amountSpent;
		this.store = r.store;
		this.description = r.description;
	}

	public int getMonthNum() {
		return monthNum;
	}

	public void setMonthNum(int monthNum) {
		this.monthNum = monthNum;
	}

	public float getAmountSpent() {
		return amountSpent;
	}

	public void setAmountSpent(float amountSpent) {
		this.amountSpent = amountSpent;
	}

	public String getMethodPayment() {
		return methodPayment;
	}

	public void setMethodPayment(String methodPayment) {
		this.methodPayment = methodPayment;
	}

	public String getStore() {
		return store;
	}

	public void setStore(String store) {
		this.store = store;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getDayNum() {
		return dayNum;
	}
}
