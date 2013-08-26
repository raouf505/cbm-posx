package com.cbm.pos.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/boards")
public class BoardController {
	
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	
	@Value("${test}")
	private String prop1;
	
//	@RequestMapping(value = "/add")
//	public String add() {
//		Un
//	}
	
	@RequestMapping(value = "/show")
	public String show(Model model) {
		logger.info("Show Tables Handler...");
		
		model.addAttribute("prop1", this.prop1);
		return "showBoards";
	}
	
}