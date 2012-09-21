
(function(){
	
	window.fms.PersonSelector =	Backbone.View.extend({
		
		// establish the template for this view
		template :	_.template( $('#personSelector').html() ),
		
		// register view events
		event : {
			
		}, // end view events
		
		initialize : function(){
			// bind model events
			
			// DOM references
			
		}, // end initialize function
		
		render : function(){
			$(this.el).html( this.template(this.model.toJSON()) );
			return this;
		} // end render function
		
	}); // end PersonList
	
})();
