package com.cbm.pos.web.controller;

import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
		logger.info("Show boards request handler triggered");
		
		model.addAttribute("pageContent", contentManagerService.getContent(locale.toString(), "boardsPage", PageContent.class));
		
		return "boards";
	}
	
	@RequestMapping(value = "/crudService", method = RequestMethod.POST)
	public @ResponseBody Board add(@RequestBody Board board) {
		logger.info("crudService - add handler triggered");

		return boardService.add(board);
		
	}
	
	@RequestMapping(value = "/crudService/{boardId}", method = RequestMethod.PUT)
	public @ResponseBody boolean update(@PathVariable("boardId") String boardId, @RequestBody Board board) {
		logger.info("crudService - update handler triggered");
		
		boardService.update(board);
		
		return true;
	}
	
	@RequestMapping(value = "/crudService/{boardId}", method = RequestMethod.DELETE)
	public @ResponseBody boolean delete(@PathVariable("boardId") int boardId) {
		logger.info("crudService - delete handler triggered");
		
		boardService.delete(boardId);
		
		return true;
	}
	
	@RequestMapping(value = "/crudService", method = RequestMethod.GET)
	public @ResponseBody List<Board> listAll() {
		logger.info("crudService - listAll handler triggered");
		
		return boardService.listAll();
	}
	
}