package com.cbm.pos.web.controller;

import java.util.Locale;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ModelAttribute;

import com.cbm.pos.content.Navigation;
import com.cbm.pos.web.service.ContentManagerService;

public class CommonController {
	
	@Inject
	protected ContentManagerService contentManagerService;
	
	@ModelAttribute("navigation")
	public Navigation navigation(Locale locale) {
		return contentManagerService.getContent(locale.toString(), "navigation", Navigation.class);
	}
	
	@ModelAttribute("requestURI")
	public String currentUrl(HttpServletRequest request) {
		return request.getRequestURI();
	}
	
}
