package com.cbm.pos.web.service;

import java.io.InputStream;

import javax.xml.transform.stream.StreamSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.oxm.jaxb.Jaxb2Marshaller;
import org.springframework.stereotype.Service;

@Service
public class ContentManagerServiceImp implements ContentManagerService {

	private static final Logger logger = LoggerFactory.getLogger(ContentManagerServiceImp.class);
	// i.e. /xml/en_CR/navigation.xml
	private String CONTENT_FILES_PATH = "/xml/%s/%s.xml";
	
	@Override
	@SuppressWarnings("unchecked")
	public <T> T getContent(String locale, String xmlId, Class<T> contentType) {
		InputStream is = null;
		T pageContent = null;
		
		logger.info(String.format("Loading %s.xml file...", xmlId));
		try {
			is = this.getClass().getResourceAsStream(String.format(CONTENT_FILES_PATH, locale, xmlId));
			if (is != null) {
				logger.info("%s.xml file loaded successfully", xmlId);
			} else {
				logger.info("error loading %s.xml", xmlId);
				return null;
			}
			
			Jaxb2Marshaller unmarshaller = new Jaxb2Marshaller();
			unmarshaller.setClassesToBeBound(contentType);
			pageContent = (T)unmarshaller.unmarshal(new StreamSource(is));
			logger.info("%s.xml file loaded successfully", xmlId);
			
		} catch (Exception e) {
			logger.warn("error loading %s content", contentType);
			logger.error(e.getMessage());
		} finally {
			if (is != null) {
				try {
					is.close();
				} catch (Exception e) {
					logger.error(e.getMessage());
				}
			}
		}
		
		return pageContent;
	}
	
}
