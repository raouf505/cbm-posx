package com.cbm.pos.content;

import javax.xml.bind.annotation.XmlElement;

public class Link {

	private String id;
	private String text;
	private String href;
	
	@XmlElement(name="id")
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	@XmlElement(name="text")
	public String getText() {
		return text;
	}
	
	public void setText(String text) {
		this.text = text;
	}
	
	@XmlElement(name="href")
	public String getHref() {
		return href;
	}
	
	public void setHref(String href) {
		this.href = href;
	}
	
}
