package com.cbm.pos.web.controller;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cbm.pos.content.PageContent;

@Controller
@RequestMapping("/menu")
public class MenuController extends CommonController {
	
	private static final Logger logger = LoggerFactory.getLogger(BoardsController.class);

	@RequestMapping
	public String show(Locale locale, Model model) {
		logger.info("Show menu request handler triggered");
		model.addAttribute("pageContent", contentManagerService.getContent(locale.toString(), "menuPage", PageContent.class));
		
		return "menu";
	}
	
}
