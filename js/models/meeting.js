
(function(){
	
	window.fms.Meeting = Backbone.Model.extend({
		
		// TODO : use custome URL until REST services are available
		url : function(){ return 'index.cfm?event=api.raffles&id=' + encodeURIComponent(this.id) },
		
		// object defaults
		defaults : {
			id :	0,
			topic :	''
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
		
	}); // end Meeting
	
})();

