<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"  %>

<!-- Common Styles -->

<link rel="stylesheet" type="text/css" href="/resources/css/common/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="/resources/css/common/reset.css" />
<link rel="stylesheet" type="text/css" href="/resources/css/common/common.css" />
<link rel="stylesheet" type="text/css" href="/resources/css/common/header.css" />
<link rel="stylesheet" type="text/css" href="/resources/css/common/footer.css" />

<!-- End Common Styles -->

<!-- Specific Page Styles -->

<tiles:useAttribute id="specificPageStylesList" name="specificPageStylesList" classname="java.util.List" ignore="true"/>
<c:if test="${ !empty specificPageStylesList }">
	<c:forEach var="item" items="${ specificPageStylesList }">
		<link rel="stylesheet" type="text/css" href="/resources/css/${ item }.css" />
	</c:forEach>
</c:if>

<!-- End Specific Page Styles -->