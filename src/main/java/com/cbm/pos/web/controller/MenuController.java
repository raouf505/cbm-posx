package com.cbm.pos.web.controller;

import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cbm.pos.content.PageContent;
import com.cbm.pos.web.domain.MenuItem;
import com.cbm.pos.web.service.MenuItemService;

@Controller
@RequestMapping("/menu")
public class MenuController extends CommonController {
	
	private static final Logger logger = LoggerFactory.getLogger(MenuController.class);
	
	@Autowired
	private MenuItemService menuItemService;

	@RequestMapping
	public String show(Locale locale, Model model) {
		logger.info("Show menu request handler triggered");
		model.addAttribute("pageContent", contentManagerService.getContent(locale.toString(), "menuPage", PageContent.class));
		model.addAttribute("menuItems", menuItemService.listAll());
		
		return "menu";
	}
	
	@RequestMapping(value = "/crudService", method = RequestMethod.POST)
	public @ResponseBody MenuItem add(@RequestBody MenuItem menuItem) {
		logger.info("crudService - add handler triggered");

		return menuItemService.add(menuItem);
		
	}
	
	@RequestMapping(value = "/crudService/{menuItemId}", method = RequestMethod.PUT)
	public @ResponseBody boolean update(@PathVariable("menuItemId") String menuItemId, @RequestBody MenuItem menuItem) {
		logger.info("crudService - update handler triggered");
		
		menuItemService.update(menuItem);
		
		return true;
	}
	
	@RequestMapping(value = "/crudService/{menuItemId}", method = RequestMethod.DELETE)
	public @ResponseBody boolean delete(@PathVariable("menuItemId") int menuItemId) {
		logger.info("crudService - delete handler triggered");
		
		menuItemService.delete(menuItemId);
		
		return true;
	}
	
	@RequestMapping(value = "/crudService", method = RequestMethod.GET)
	public @ResponseBody List<MenuItem> listAll() {
		logger.info("crudService - listAll handler triggered");
		
		return menuItemService.listAll();
	}
	
}
