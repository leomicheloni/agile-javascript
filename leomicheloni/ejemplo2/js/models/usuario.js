define([], function(){

	var model = {
		nombre: "leonardo",
		password: "",
		ingresar: function(){
			if(model.password.length === 0)
				console.log("necesitás un password");
		}
	};
	
	return model;
	
});