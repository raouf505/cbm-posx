<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ include file="/WEB-INF/jsp/templates/common/taglibs.jsp"  %>    

<!DOCTYPE HTML>
<html>
<head>
	<title>POS</title>
	
	<!-- Load the script "/resources/js/main.js" as our entry point -->
	<script data-main="/resources/js/main" src="http://requirejs.org/docs/release/2.1.8/minified/require.js"></script>
</head>
<body>
	<tiles:insertAttribute name="header" />
	<h1>${prop1}</h1>
	<tiles:insertAttribute name="footer" />
</body>
</html> 