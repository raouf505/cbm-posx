package com.cbm.pos.web.service;

public interface ContentManagerService {
	
	<T> T getPageContent(String xmlId, Class<T> pageContentType);
	
}