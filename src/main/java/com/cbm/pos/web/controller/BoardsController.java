package com.cbm.pos.web.controller;

import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cbm.pos.content.PageContent;
import com.cbm.pos.web.domain.Board;
import com.cbm.pos.web.service.BoardService;

@Controller
@RequestMapping(value = "/boards")
public class BoardsController extends CommonController {
	
	private static final Logger logger = LoggerFactory.getLogger(BoardsController.class);
	
	@Autowired
	private BoardService boardService;
	
	@Value("${test}")
	private String prop1;
	
	@RequestMapping
	public String show(Locale locale, Model model) {
		logger.info("Boards request handler triggered");
		model.addAttribute("pageContent", contentManagerService.getContent(locale.toString(), "boardsPage", PageContent.class));
		
		return "boards";
	}
	
	@RequestMapping(value = "/crudService", method=RequestMethod.GET)
	public @ResponseBody List<Board> listAll(Locale locale, Model model) {
		logger.info("crudService - listAll handler triggered");
		
		return boardService.listAll();
	}
	
}