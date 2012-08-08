
(function(){
	
	window.fms.User = Backbone.Model.extend({
		
		// object defaults
		defaults : {
			'name' :	''
		}, // end defaults
		
		initialize : function(){
			this.validators =		{};
			
			this.validators.name = 	this.validateName;
		}, // end initialize function
		
		clear : function(){
			this.destroy();
		}, // end clear function
		
		validateItem : function(item){
			var results =	{isValid : true, message : ''};
			if( this.validators[item] ){
				results =	this.validators[item]( this.get(item) );
			}
			return results;
		}, // end validateItem function
		
		/*
		validate : function(attrs){
			var errors =			{};
			var self =				this;
			var validationResults;
			// loop through each new attribute being set
			_.each(attrs, function(value, key){
				if( _.has(self.validators, key) ){
					validationResults = self.validators[key](value);
					if(validationResults.isValid === false){
						errors[key] = validationResults.message;
					}
				}
			});
			
			// return only if there were errors
			if(! _.isEmpty(errors) ){
				return errors;
			}
		}, // end validate function
		*/
		
		validateName : function(value){
			var results =	{isValid : false, message : ''};
			// make sure it has a valid length
			if(value.length > 0){
				results.isValid = 	true;
			}else{
				results.message = 	"A valid name is required";
			}
			return results;
		} // end validateName function
		
	}); // end User
	
})();
