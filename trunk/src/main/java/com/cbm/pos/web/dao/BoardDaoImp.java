package com.cbm.pos.web.dao;

import java.util.List;
import java.util.ArrayList;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cbm.pos.web.domain.Board;

@Repository
public class BoardDaoImp implements BoardDao {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public void add(Board board) {
		sessionFactory.getCurrentSession().save(board);
	}

	@Override
	public boolean delete(Board board) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public List<Board> listAll() {
		return (ArrayList<Board>)sessionFactory.getCurrentSession().createCriteria(Board.class).list();
	}

	@Override
	public Board findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
