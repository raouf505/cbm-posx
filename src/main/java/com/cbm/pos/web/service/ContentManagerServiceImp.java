package com.cbm.pos.web.service;

import java.io.InputStream;

import javax.xml.transform.stream.StreamSource;

import org.jibx.runtime.BindingDirectory;
import org.jibx.runtime.IBindingFactory;
import org.jibx.runtime.IUnmarshallingContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.oxm.jibx.JibxMarshaller;
import org.springframework.stereotype.Service;

@Service
public class ContentManagerServiceImp implements ContentManagerService {

	private static final Logger logger = LoggerFactory.getLogger(ContentManagerServiceImp.class);
	private String CONTENT_FILES_PATH = "/xml/en-CR/navigation.xml";
	
	@Override
	@SuppressWarnings("unchecked")
	public <T> T getPageContent(String xmlId, Class<T> pageContentType) {
		InputStream is = null;
		T pageContent = null;
		
		logger.info("Loading page content xml...");
		try {
			is = this.getClass().getResourceAsStream(CONTENT_FILES_PATH);
			
			IBindingFactory jc = BindingDirectory.getFactory(pageContentType);
			IUnmarshallingContext unmarshaller = jc.createUnmarshallingContext();
			T message = (T)unmarshaller.unmarshalDocument( is, null);
			
//			JibxMarshaller jibxMarshaller = new JibxMarshaller();
//			jibxMarshaller.setTargetClass(pageContentType);
//			jibxMarshaller.afterPropertiesSet();
//			
//			pageContent = (T)jibxMarshaller.unmarshal(new StreamSource(is));
					
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
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
	
	

//	@SuppressWarnings("unchecked")
//	public <T extends ContentBase> T getContent(String contentId, Class<T> clazz) {
//		Object content = cacheService.retrieve(CONTENT_CACHE_NAME, contentId);
//
//		if (content == null) {
//			content = getContentBaseFromXml(contentId, clazz);
//
//			if (content == null) {
//				if (log.isDebugEnabled()) {
//					log.debug("cannot unmarshall content id = " + contentId);
//				}
//
//				cacheService.store(CONTENT_CACHE_NAME, contentId, CONTENT_NOT_FOUND);
//			} else {
//				if (log.isDebugEnabled()) {
//					log.debug("unmarshalled content id = " + contentId);
//				}
//
//				cacheService.store(CONTENT_CACHE_NAME, contentId, content);
//			}
//		} else if (content.equals(CONTENT_NOT_FOUND)) {
//			content = null;
//		}
//
//		return (T) content;
//	}
//
//	@SuppressWarnings("unchecked")
//	private <T extends ContentBase> T getContentBaseFromXml(String contentId, Class<T> clazz) {
//		InputStream is = null;
//		T content = null;
//
//		try {
//			if (log.isDebugEnabled()) {
//				log.debug("getting content id = " + contentId);
//			}
//
//			is = this.getClass().getResourceAsStream(XML_FILE_LOCATION + "/" + contentId + XML_FILE_EXTENSION);
//
//			// File not found.
//			if (is == null) {
//				return null;
//			}
//
//			JibxMarshaller unmarshaller = new JibxMarshaller();
//			unmarshaller.setTargetClass(clazz);
//			unmarshaller.afterPropertiesSet();
//
//			ContentItem contentItem = (ContentItem) unmarshaller.unmarshal(new StreamSource(is));
//			content = (T) contentItem.getContent();
//		} catch (JiBXException e) {
//			log.error(e);
//		} catch (XmlMappingException e) {
//			log.error(e);
//		} catch (IOException e) {
//			log.error(e);
//		} finally {
//			if (is != null) {
//				try {
//					is.close();
//				} catch (Exception e) {
//					log.error(e);
//				}
//			}
//		}
//
//		return content;
//	}
	
}
