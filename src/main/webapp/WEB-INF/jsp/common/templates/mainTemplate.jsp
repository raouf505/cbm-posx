<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"  %>    

<!DOCTYPE HTML>
<html>
<head>
	<title>POS</title>
	
	<!-- Styles -->
	
	<tiles:insertAttribute name="styles" />
	
	<!-- End Styles -->
	
	<!-- Load the script "/resources/js/main.js" as our entry point -->
	<script data-main="/resources/js/main" src="/resources/js/lib/require.js"></script>
</head>
<body>
	<tiles:insertAttribute name="header" />
	<tiles:insertAttribute name="content" />
	<tiles:insertAttribute name="footer" />
</body>
</html>