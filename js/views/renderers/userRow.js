
(function(){
	
	window.fms.UserRow = Backbone.View.extend({
		
		tagName :	'li',
		
		// establish the template for this view
		template :	_.template( $('#userRow').html() ),
		
		// register view events
		events : {
			"click .remove" :	"removeUser",
			"click .edit" :		"editUser",
			"click .view" :		"viewUser"
		}, // end view events
		
		initialize : function(){
			// bind model events
			this.model.on('change', this.render, this);
			this.model.on('destroy', this.remove, this);
		}, // end initialize function
		
		render : function(){
			$(this.el).html( this.template(this.model.toJSON()) );
			return this;
		}, // end render function
		
		editUser : function(){
			App.trigger("navigate", "users/edit/" + this.model.get('id'));
		}, // end editUser function
		
		removeUser : function(){
			// delete the user
			this.model.clear();
		}, // end removeUser function
		
		viewUser : function(){
			App.trigger("navigate", "users/" + this.model.get('id'));
		} // end viewUser function
		
	});
	
})();

