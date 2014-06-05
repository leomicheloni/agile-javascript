define(["models/usuario"], function(usuario){
	

	
	test("saludar retornal el saludo", function(){
		var mensaje = usuario.saludar();
		
		ok(mensaje.length!==0);
	
	});
	
	test("saludar tiene que tener el nombre el mensaje", function(){
		
		var nombre = "albricio";
		usuario.nombre = nombre;
	
		var mensaje = usuario.saludar();
		
		ok(mensaje.indexOf(nombre) > -1);
	
	});
	

});
