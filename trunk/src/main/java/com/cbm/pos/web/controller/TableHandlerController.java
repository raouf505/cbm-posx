package com.cbm.pos.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/mesas")
public class TableHandlerController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@Value("${test}")
	private String prop1;
	
	@RequestMapping(value = "/agregar")
	public String add() {
		return "";
	}
	
	@RequestMapping(value = "/mostrar")
	public String show(Model model) {
		logger.info("Show Tables Handler...");
		
		model.addAttribute("prop1", this.prop1);
		return "showTables";
	}
	
}