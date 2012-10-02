package com.cbm.pos.dao;

import com.cbm.pos.domain.Component;

public interface ComponentDao {
	
	void add();
	
	boolean delete(Component component);
	
	Component findById(int id);
	
}