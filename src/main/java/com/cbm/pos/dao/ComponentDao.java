package com.cbm.pos.dao;

import com.cbm.pos.domain.Component;

public interface ComponentDao {
	
	void add(Component component);
	
	boolean delete(Component component);
	
	Component findById(int id);
	
}