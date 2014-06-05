define([], function(){

	var Persona = function(){
	};
	
	Persona.prototype.saludar = function(){
		return "hola require";
	};

	return Persona;
});