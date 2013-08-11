package com.cbm.pos.web.dao;

import com.cbm.pos.web.domain.Component;

public interface ComponentDao {
	
	void add();
	
	boolean delete(Component component);
	
	Component findById(int id);
	
}