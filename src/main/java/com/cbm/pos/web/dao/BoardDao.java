package com.cbm.pos.web.dao;

import com.cbm.pos.web.domain.Board;

import java.util.List;

public interface BoardDao {

	void add(Board board);
	
	void update(Board board);
	
	boolean delete(Board board);
	
	List<Board> listAll();
	
}
