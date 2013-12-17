package com.cbm.pos.web.dao;

import java.util.List;
import java.util.ArrayList;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cbm.pos.web.domain.MenuItem;

@Repository
public class MenuItemDaoImp implements MenuItemDao {

	@Autowired
	private SessionFactory sessionFactory;
	
//	@Override
//	public MenuItem add(MenuItem menuItem) {
//		MenuItem result = null;
//		try {
//			int id = (Integer)sessionFactory.getCurrentSession().save(menuItem);
//			result = (MenuItem)sessionFactory.getCurrentSession().get(MenuItem.class, id);
//		} catch(Exception e) {
//			System.out.println(e.getMessage());
//		}
//
//		return result;
//	}
//	
//	@Override
//	public void update(MenuItem menuItem) {
//		sessionFactory.getCurrentSession().update(menuItem);
//	}
//
//	@Override
//	public void delete(int menuItemId) {
//		MenuItem menuItem = (MenuItem)sessionFactory.getCurrentSession().get(MenuItem.class, menuItemId);
//		sessionFactory.getCurrentSession().delete(menuItem);
//	}
	
	@Override
	@SuppressWarnings("unchecked")
	public List<MenuItem> listAll() {
		return (ArrayList<MenuItem>)sessionFactory.getCurrentSession().createCriteria(MenuItem.class).list();
	}

}
