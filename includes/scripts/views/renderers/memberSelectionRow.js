
(function(){
	
	window.fms.MemberSelectionRow = Backbone.View.extend({
		
		tagName :	'tr',
		
		// establish the template for this view
		template :	_.template( $('#memberSelectionRow').html() ),
		
		// register view events
		event : {
			
			
		}, // end view events
		
		initialize : function(){
			// bind model events
			
		}, // end initialize function
		
		render : function(){
			$(this.el).html( this.template(this.model.toJSON()) );
			return this;
		} // end render function		
		
	}); // end MemberSelectionRow
	
})();
