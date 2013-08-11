package com.cbm.pos.web.service;

import com.cbm.pos.web.domain.Component;

public interface ComponentService {
	Component searchBySize(int id);
	Component add(Component component);
}
