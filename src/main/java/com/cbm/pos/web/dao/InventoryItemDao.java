package com.cbm.pos.web.dao;

import com.cbm.pos.web.domain.InventoryItem;

public interface InventoryItemDao {

	void add(InventoryItem inventoryItem);
	
	boolean delete(InventoryItem inventoryItem);
	
	InventoryItem findById(int id);
	
}
