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
//import com.cbm.pos.web.domain.Bill;
//import com.cbm.pos.web.service.BillService;

@Controller
@RequestMapping("/checkIn")
public class CheckInController extends CommonController {
	
	private static final Logger logger = LoggerFactory.getLogger(CheckInController.class);
	
//	@Autowired
//	private BillService billService;

	@RequestMapping
	public String show(Locale locale, Model model) {
		logger.info("Show checkIn request handler triggered");
		model.addAttribute("pageContent", contentManagerService.getContent(locale.toString(), "checkInPage", PageContent.class));
		
		return "checkIn";
	}
	
//	@RequestMapping(value = "/crudService", method = RequestMethod.GET)
//	public @ResponseBody List<Bill> listAll() {
//		logger.info("crudService - listAll handler triggered");
//		
//		return billService.listAll();
//	}
	
}
