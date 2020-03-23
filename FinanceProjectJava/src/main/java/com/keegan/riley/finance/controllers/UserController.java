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

import com.keegan.riley.finance.models.User;
import com.keegan.riley.finance.services.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	UserService service;
	
	@PostMapping("/login")
	public User loginCred(@RequestBody User user) {
		List<User> list = new ArrayList<>();
		list = service.findAll();
		for(int i = 0; i < list.size(); i++) {
			if(service.validateUser(user)) {
				User u = new User();
				u = list.get(i);
				if(u.getuName().equals(user.getuName())) {
					User newUser = new User(u);
					return newUser;
				} else {
					
				}
			}
		}
		return null;
	}
	 
	@GetMapping("/users")
	public List<User> getUserList() {
		List<User> u = new ArrayList<>();
		return service.findAll(u);
	}
	
	@PostMapping("/createUser")
	public User makeUser(@RequestBody User u) {
		String pass = service.hashPass(u.pass);
		u.setPass(pass);
		service.saveUser(u);
		return u;
	}
	
	@PostMapping("/deleteUser")
	public User deleteUser(@RequestBody User u) {
		service.deleteBook(u);
		return u;
	}

}
