package com.cbm.pos.web.service;

import java.util.List;

import com.cbm.pos.web.domain.Board;

public interface BoardService {
	
	Board searchBySize(int id);
	
	void add(Board board);
	
	List<Board> listAll();
	
}
