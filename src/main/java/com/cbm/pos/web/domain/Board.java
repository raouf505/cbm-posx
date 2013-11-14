package com.cbm.pos.web.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "BOARD")
public class Board implements Serializable {
	
	private static final long serialVersionUID = -5527566248002296042L;
	
	@Id
	@Column(name = "ID")
	private String id;
	
	@Column(name = "POSX")
	private int posX;
	
	@Column(name = "POSY")
	private int posY;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getPosX() {
		return posX;
	}

	public void setPosX(int posX) {
		this.posX = posX;
	}

	public int getPosY() {
		return posY;
	}

	public void setPosY(int posY) {
		this.posY = posY;
	}
	
}
