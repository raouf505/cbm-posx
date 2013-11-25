package com.cbm.pos.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cbm.pos.web.dao.BoardDao;
import com.cbm.pos.web.domain.Board;

@Service
@Transactional
public class BoardServiceImp implements BoardService {
	
	@Autowired
	private BoardDao boardDao;

	@Override
	public void add(Board board) {
		boardDao.add(board);
	}
	
	@Override
	public void update(Board board) {
		boardDao.update(board);
	}
	
	@Override
	public List<Board> listAll() {
		return boardDao.listAll();
	}
	
}