package com.cbm.pos.web.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class ViewNameInModelInterceptor extends HandlerInterceptorAdapter {

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
		
		if (modelAndView != null) {
			modelAndView.addObject("viewName", modelAndView.getViewName());
		}
		
		super.postHandle(request, response, handler, modelAndView);
	}
	
}