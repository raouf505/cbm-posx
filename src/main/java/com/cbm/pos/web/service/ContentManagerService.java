package com.cbm.pos.web.service;

public interface ContentManagerService {
	
	<T> T getContent(String locale, String xmlId, Class<T> pageContentType);
	
}