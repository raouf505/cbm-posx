package com.cbm.pos.web.domain;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "BILL")
public class Bill implements Serializable {
	
	private static final long serialVersionUID = -5527566248002296042L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "ID")
	private int id;
	
	@Column(name = "NUMBER")
	private String number;
	
	@Column(name = "NAME")
	private String name;
	
}
