package com.cbm.pos.service;

import com.cbm.pos.domain.Component;

public interface ComponentService {
	Component searchBySize(int id);
	Component add(Component component);
}
