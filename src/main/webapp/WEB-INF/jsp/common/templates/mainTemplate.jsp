<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"  %>    

<!DOCTYPE HTML>
<html>
<head>
	<title>POS</title>
	
	<!-- Styles -->
	<tiles:insertAttribute name="styles" />
	<!-- End Styles -->
	
	<!-- Javascript -->
	
	<!-- Load the script "/resources/js/main.js" as our entry point if "backboneApp" comes from tile configuration -->
	<!-- creates "backboneApp" global variable in order to include specific app on main.js -->
	<tiles:useAttribute id="backboneApp" name="backboneApp" classname="java.lang.String" ignore="true"/>
	<c:if test="${ !empty backboneApp }">
		<script type="text/javascript">
			window.jsonObjects = {};
		
			// this variable is used to implement specific functionality for current page
			var pageName = "${ viewName }";
			
			var backboneApp = "${ backboneApp }";
			
		</script>
		<script data-main="/resources/js/main" src="/resources/js/lib/require.js"></script>
	</c:if>
	<!-- End Javascript -->
	
</head>
<body id="${ viewName }">

	<tiles:insertAttribute name="navigation" />
	
	<div class="container">
		<div class="panel panel-primary">
      		<div class="panel-heading">
        		<h1 class="panel-title">${ pageContent.title }</h1>
      		</div>
      		<div class="panel-body">
        		<tiles:insertAttribute name="content" />
      		</div>
    	</div>
	</div>
	
	<tiles:insertAttribute name="footer" />
	
</body>
</html>