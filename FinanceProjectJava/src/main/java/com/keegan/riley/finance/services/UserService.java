package com.keegan.riley.finance.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import com.keegan.riley.finance.models.User;
import com.keegan.riley.finance.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
	
	public Pbkdf2PasswordEncoder enc = new Pbkdf2PasswordEncoder("secret");
	
	List<User> list = new ArrayList<>();
	
	public List<User> findAll(List<User> array) {
		repository.findAll().forEach(array::add);
		return array;
	}
	
	public List<User> findAll() {
		return repository.findAll();
	}
	
	public String hashPass(String p) {
		String password = enc.encode(p);
		return password;
	}
	
	public boolean validateUser(User login) {
		User u = repository.findByUserId(login.uName);
		if (u != null) {
			if(matches(login.pass, u.pass)) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	
	public void saveUser(User u) {
		repository.save(u);
	}
	
	public void deleteBook(User u) {
		repository.delete(u);
	}
	
	public User findbyUserId(String id) {
		User u = new User();
		u = repository.findByUserId(id);
		return u;
	}
	
	public boolean matches(CharSequence rawPass, String encodedPass) {
		if(enc.matches(rawPass, encodedPass)) {
			return true;
		}
		else 
			return false;
	}
	
}
