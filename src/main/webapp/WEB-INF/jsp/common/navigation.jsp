<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"  %>

<div role="navigation" class="navbar navbar-default navbar-fixed-top">
	<div class="container">
    	<div class="navbar-header">
        	<button data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle collapsed" type="button">
            	<span class="sr-only">Toggle navigation</span>
            	<span class="icon-bar"></span>
            	<span class="icon-bar"></span>
            	<span class="icon-bar"></span>
          	</button>
          	<a href="#" class="navbar-brand">Rancho de Nelson</a>
		</div>
        <div class="navbar-collapse collapse">
        	<ul class="nav navbar-nav navbar-right">
          		<c:forEach items="${ navigation.linkList }" var="link">
          			<li <c:if test="${ fn:contains(requestURI, link.href) }">class="active"</c:if>><a href="${ link.href }" id="${ link.id }">${ link.text }</a></li>
          		</c:forEach>
          	</ul>
        </div><!--/.nav-collapse -->
	</div>
</div>