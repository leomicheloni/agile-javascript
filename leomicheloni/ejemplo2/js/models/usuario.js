define(["ajaxlib"], function(ajax){

	var model = {
		nombre: "leonardo",
		password: "",
		ingresar: function(){
			if(model.password.length === 0)
				console.log("necesitás un password");
		},
		saludar: function(){
			return "hola, me llamo " + this.nombre;
		},
		saludoAjax: function(){
			if(true){
				var valor = ajax.get();
				return valor;
			}else
			{
				return "";
			}
		}
	};
	
	return model;
	
});