
(function(){
	
	window.fms.MemberDetails = Backbone.View.extend({
		
		// establish the template for this view
		template :	_.template( $('#memberDetailsPage').html() ),
		
		initialize : function(){
			
		}, // end initialize function
		
		render : function(){
			// simply render the template
			$(this.el).html( this.template(this.model.toJSON()) );

			return this;
		} // end render function
		
	}); // end MemberDetails
	
})();

