package com.cbm.pos.domain;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;

@Entity
@Table(name = "COMPONENT")
public class Component implements Serializable {
	
	private static final long serialVersionUID = -5527566248002296042L;
	
	@Id
	@Column(name = "ID")
//	@GeneratedValue
	private int id;
	
	@Column(name = "NAME")
	private String name;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
