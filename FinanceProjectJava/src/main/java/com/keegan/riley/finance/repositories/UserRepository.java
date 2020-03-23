package com.keegan.riley.finance.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.keegan.riley.finance.models.User;

@Repository
public interface UserRepository extends MongoRepository<User, String>{
	
	List<User> findAll();
	User findByUserId(String id);

}
