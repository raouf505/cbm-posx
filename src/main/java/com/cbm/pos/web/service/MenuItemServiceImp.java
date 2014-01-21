package com.cbm.pos.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cbm.pos.web.dao.MenuItemDao;
import com.cbm.pos.web.domain.MenuItem;

@Service
@Transactional
public class MenuItemServiceImp implements MenuItemService {
	
	@Autowired
	private MenuItemDao menuItemDao;

	@Override
	public MenuItem add(MenuItem menuItem) {
		return menuItemDao.add(menuItem);
	}
	
	@Override
	public void update(MenuItem menuItem) {
		menuItemDao.update(menuItem);
	}
	
	@Override
	public void delete(int menuItemId) {
		menuItemDao.delete(menuItemId);
	}
	
	@Override
	public List<MenuItem> listAll() {
		return menuItemDao.listAll();
	}
	
}