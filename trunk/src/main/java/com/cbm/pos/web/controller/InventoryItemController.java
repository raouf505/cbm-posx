package com.cbm.pos.web.controller;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cbm.pos.content.PageContent;
import com.cbm.pos.web.domain.InventoryItem;
import com.cbm.pos.web.service.InventoryItemService;

@Controller
@RequestMapping(value = "/inventory")
public class InventoryItemController extends CommonController {
	
	private static final Logger logger = LoggerFactory.getLogger(InventoryItemController.class);
	
	@Autowired
	private InventoryItemService inventoryItemService;
	
	@Value("${test}")
	private String prop1;
	
	@RequestMapping(value = "/add")
	public String add(Model model, InventoryItem inventoryItem) {
		logger.info("Add handler triggered");
		
		inventoryItemService.add(inventoryItem);
		
		return "/inventory/show";
	}
	
	@RequestMapping(value = "/show")
	public String show(Locale locale, Model model) {
		logger.info("Show Inventory request handler triggered");
		model.addAttribute("pageContent", contentManagerService.getContent(locale.toString(), "showInventoryPage", PageContent.class));
		
		return "showInventory";
	}
	
}