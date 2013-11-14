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
	public Board searchBySize(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void add(Board inventoryItem) {
		boardDao.add(inventoryItem);
	}
	
	@Override
	public List<Board> listAll() {
		return boardDao.listAll();
	}
	
}