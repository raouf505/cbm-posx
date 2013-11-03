package com.cbm.pos.web.controller;

import java.util.Locale;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.ModelAttribute;

import com.cbm.pos.springxml.Navigation;
import com.cbm.pos.web.service.ContentManagerService;

public class CommonController {
	
	@Inject
	protected ContentManagerService contentManagerService;
	
	@ModelAttribute
	public Navigation navigation(Locale locale) {
		return contentManagerService.getContent(locale.toString(), "navigation", Navigation.class);
	}
	
}
