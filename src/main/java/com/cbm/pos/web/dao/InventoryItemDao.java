package com.cbm.pos.web.dao;

import com.cbm.pos.web.domain.InventoryItem;

import java.util.List;

public interface InventoryItemDao {

	void add(InventoryItem inventoryItem);
	
	boolean delete(InventoryItem inventoryItem);
	
	List<InventoryItem> listAll();
	
	InventoryItem findById(int id);
	
}
