
$(function(){
	
	window.fms.UserRow = Backbone.View.extend({
		
		tagName :	'li',
		
		// establish the template for this view
		template :	_.template( $('#userRow').html() ),
		
		// register view events
		events : {
			"click .remove" :	"removeUser"
		}, // end view events
		
		// initialize application
		initialize : function(){
			// bind model events
			this.model.on('change', this.render, this);
			this.model.on('destroy', this.remove, this);
		}, // end initialize function
		
		render : function(){
			$(this.el).html( this.template(this.model.toJSON()) );
			return this;
		}, // end render function
		
		removeUser : function(){
			// delete the user
			this.model.clear();
		} // end removeUser function
		
	});
	
});

