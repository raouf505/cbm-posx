package com.cbm.pos.web.dao;

import com.cbm.pos.web.domain.Board;

import java.util.List;

public interface BoardDao {

	Board add(Board board);
	
	void update(Board board);
	
	void delete(int boardId);
	
	List<Board> listAll();
	
}
