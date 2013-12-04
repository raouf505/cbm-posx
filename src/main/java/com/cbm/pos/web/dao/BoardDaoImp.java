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
	public Board add(Board board) {
		Board result = null;
		try {
			int id = (Integer)sessionFactory.getCurrentSession().save(board);
			result = (Board)sessionFactory.getCurrentSession().get(Board.class, id);
		} catch(Exception e) {
			System.out.println(e.getMessage());
		}

		return result;
	}
	
	@Override
	public void update(Board board) {
		sessionFactory.getCurrentSession().update(board);
	}

	@Override
	public void delete(int boardId) {
		Board board = (Board)sessionFactory.getCurrentSession().get(Board.class, boardId);
		sessionFactory.getCurrentSession().delete(board);
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public List<Board> listAll() {
		return (ArrayList<Board>)sessionFactory.getCurrentSession().createCriteria(Board.class).list();
	}

}
