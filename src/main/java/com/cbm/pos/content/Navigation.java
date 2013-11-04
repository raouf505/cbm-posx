package com.cbm.pos.content;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlElement;

@XmlRootElement(name="navigation")
public class Navigation {
	
	private ArrayList<Link> linkList;

	@XmlElement(name="link")
	public ArrayList<Link> getLinkList() {
		return linkList;
	}

	public void setLinkList(ArrayList<Link> linkList) {
		this.linkList = linkList;
	}

}
