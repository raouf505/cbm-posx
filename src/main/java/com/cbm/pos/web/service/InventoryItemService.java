package com.cbm.pos.web.service;

import com.cbm.pos.web.domain.InventoryItem;

public interface InventoryItemService {
	
	InventoryItem searchBySize(int id);
	
	void add(InventoryItem inventoryItem);
	
}
