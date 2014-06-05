var page = require('webpage').create();
page.open('http://www.yahoo.com', function() {
	
	// var mensaje = page.evaluate(function(){
		// return document.getElementById("mensaje").innerText;
	// });
	
	//console.log(mensaje);
	page.render("salida.png");
	phantom.exit();
});