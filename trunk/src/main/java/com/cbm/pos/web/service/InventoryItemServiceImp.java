package com.cbm.pos.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cbm.pos.web.dao.InventoryItemDao;
import com.cbm.pos.web.domain.InventoryItem;

@Service
@Transactional
public class InventoryItemServiceImp implements InventoryItemService {
	
	@Autowired
	private InventoryItemDao inventoryItemDao;

	@Override
	public InventoryItem searchBySize(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void add(InventoryItem inventoryItem) {
		inventoryItemDao.add(inventoryItem);
	}
	
}