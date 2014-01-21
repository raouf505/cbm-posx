package com.cbm.pos.web.service;

import java.util.List;

import com.cbm.pos.web.domain.MenuItem;

public interface MenuItemService {
	
	MenuItem add(MenuItem menuItem);
	
	void update(MenuItem menuItem);
	
	void delete(int menuItemId);
	
	List<MenuItem> listAll();
	
}
