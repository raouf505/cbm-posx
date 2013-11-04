<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"  %>

<h1>${ pageContent.title }</h1>

<form method="GET" action="/inventoryItems/add">
	<fieldset>
		<legend>Información del artículo:</legend>
		<input type="text" name="id" id="id" placeholder="ID">
		<input type="text" name="name" id="name" placeholder="name">
		<input type="text" name="quantity" id="quantity" placeholder="Cantidad inicial">
		<input type="submit" value="Aceptar">
	</fieldset>
</form>