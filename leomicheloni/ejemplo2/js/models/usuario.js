define([], function(){

	var model = {
		nombre: "leonardo",
		password: "",
		ingresar: function(){
			if(model.password.length === 0)
				console.log("necesit�s un password");
		}
	};
	
	return model;
	
});