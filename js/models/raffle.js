
(function(){
	
	window.fms.Raffle = Backbone.Model.extend({
		
		// TODO : use custome URL until REST services are available
		url : 'index.cfm?event=api.raffles',
		
		// object defaults
		defaults : {
			id :	0,
			prize :	''
		}, // end defaults
		
		initialize : function(){
			this.validators =		{};
			
		}, // end initialize function
		
		clear : function(){
			console.log("DESTROY.  Is new? " + this.isNew());
			console.info(this);
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

