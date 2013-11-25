package com.cbm.pos.web.service;

import java.util.List;

import com.cbm.pos.web.domain.Board;

public interface BoardService {
	
	void add(Board board);
	
	void update(Board board);
	
	List<Board> listAll();
	
}
