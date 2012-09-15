
(function(){
	
	window.fms.User = Backbone.Model.extend({
		
		// TODO : use custome URL until REST services are available
		url : function(){ return 'index.cfm?event=api.users&id=' + encodeURIComponent(this.id) },
		
		// object defaults
		defaults : {
			'firstName' :		'',
			'lastName' :		'',
			'email' :			'',
			'phone' :			'',
			'dateCreated' :		new Date(),
			'dateModified' :	new Date()
		}, // end defaults
		
		initialize : function(){
			this.validators =			{};
			
			this.validators.firstName = this.validateFirstName;
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
		
		validateFirstName : function(value){
			var results =	{isValid : false, message : ''};
			// make sure it has a valid length
			if(value.length > 0){
				results.isValid = 	true;
			}else{
				results.message = 	"A valid name is required";
			}
			return results;
		} // end validateFirstName function
		
	}); // end User
	
})();
