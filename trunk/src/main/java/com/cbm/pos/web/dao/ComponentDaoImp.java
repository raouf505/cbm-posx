package com.cbm.pos.web.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cbm.pos.web.domain.Component;

@Repository
public class ComponentDaoImp implements ComponentDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@Transactional
	public void add() {
		Component component = new Component();
		component.setId(1);
		component.setName("Test Component");
		
		sessionFactory.getCurrentSession().save(component);
	}
	
	public boolean delete(Component component) {
		return false;
	}
	
	public Component findById(int id) {
		return new Component();
	}

}
