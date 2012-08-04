

(function(){
	
	window.fms.MeetingsPage = Backbone.View.extend({
		
		// establish the template for this view
		template : _.template( $('#meetingsPage').html() ),
		
		initialize : function(){
			
		}, // end initialize function
		
		render : function(){
			// simply render the template
			$(this.el).html( this.template() );
			return this;
		} // end render function
		
	}); // end MeetingsPage
	
})();
