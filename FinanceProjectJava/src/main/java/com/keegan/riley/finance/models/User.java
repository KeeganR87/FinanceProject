package com.keegan.riley.finance.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Document(collection = "Users")
public class User {
	
	@Id
	private ObjectId _id;
	
	public String fName;
	public String lName;
	public String uName;
	public String pass;
	
	public User() {}
	
	public User(User u) {
		this.fName = u.fName;
		this.lName = u.lName;
		this.uName = u.uName;
		this.pass = u.pass;
	}
	
	public void setfName(String n) {
		this.fName = n;
	}
	
	public void setlName(String l) {
		this.lName = l;
	}
	
	public void setuName(String u) {
		this.uName = u;
	}
	
	public void setPass(String p) {
		this.pass = p;
	}
	
	public String getfName() {
		return this.fName;
	}
	
	public String getlName() {
		return this.lName;
	}

	public String getuName() {
		return this.uName;
	}
	
	public String getPass() {
		return this.pass;
	}
}
