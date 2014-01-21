package com.cbm.pos.web.dao;

import com.cbm.pos.web.domain.MenuItem;

import java.util.List;

public interface MenuItemDao {

	MenuItem add(MenuItem menuItem);
	
	void update(MenuItem menuItem);
	
	void delete(int menuItemId);
	
	List<MenuItem> listAll();
	
}
