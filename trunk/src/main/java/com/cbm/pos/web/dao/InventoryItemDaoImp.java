package com.cbm.pos.web.dao;

import java.util.List;
import java.util.ArrayList;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cbm.pos.web.domain.InventoryItem;

@Repository
public class InventoryItemDaoImp implements InventoryItemDao {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public void add(InventoryItem inventoryItem) {
		sessionFactory.getCurrentSession().save(inventoryItem);
	}

	@Override
	public boolean delete(InventoryItem inventoryItem) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public List<InventoryItem> listAll() {
		return (ArrayList<InventoryItem>)sessionFactory.getCurrentSession().createCriteria(InventoryItem.class).list();
	}

	@Override
	public InventoryItem findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
