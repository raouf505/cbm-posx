package com.cbm.pos.web.service;

import java.util.List;

import com.cbm.pos.web.domain.Board;

public interface BoardService {
	
	Board add(Board board);
	
	void update(Board board);
	
	void delete(int boardId);
	
	List<Board> listAll();
	
}
