package com.cbm.pos.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cbm.pos.web.dao.InventoryItemDao;
import com.cbm.pos.web.domain.InventoryItem;

@Service
@Transactional
public class InventoryServiceImp implements InventoryService {
	
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
	
	@Override
	public List<InventoryItem> listAll() {
		return inventoryItemDao.listAll();
	}
	
}