<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"  %> 

<header>
	<nav>
		<c:forEach items="${ navigation.linkList }" var="link">
			<a id="${ link.id }" href="${ link.href }" <c:if test="${ fn:contains(requestURI, link.href) }">class="selected"</c:if>>${ link.text }</a>
		</c:forEach>
	</nav>
</header>