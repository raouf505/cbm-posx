package com.cbm.pos.web.service;

import java.util.List;

import com.cbm.pos.web.domain.InventoryItem;

public interface InventoryService {
	
	InventoryItem searchBySize(int id);
	
	void add(InventoryItem inventoryItem);
	
	List<InventoryItem> listAll();
	
}
