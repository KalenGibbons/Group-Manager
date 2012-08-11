
(function(){
	
	window.fms.Raffle = Backbone.Model.extend({
		
		// TODO : use custome URL until REST services are available
		url : 'index.cfm?event=api.raffles',
		
		// object defaults
		defaults : {
			prize :	''
		}, // end defaults
		
		initialize : function(){
			this.validators =		{};
			
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
		
	}); // end Raffle
	
})();

