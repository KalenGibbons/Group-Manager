
(function(){
	
	window.fms.UsersPage = Backbone.View.extend({
		
		// establish the template for this view
		template : _.template( $('#usersPage').html() ),
		
		initialize : function(){
			// bind model events
			this.model.on('all', this.updateUsers, this);
			this.model.on('add', this.addUser, this);
			this.model.on('reset', this.resetUser, this);
			
			// DOM references
			this.$list = this.$('#userList');
		}, // end initialize function
		
		render : function(){
			// simply render the template
			$(this.el).html( this.template() );
			// reset DOM references
			this.$list = this.$('#userList');
			// re-render user rows
			this.updateUsers.call(this);

			return this;
		}, // end render function
		
		addUser : function(){
			
			
		}, // end addUser function
		
		resetUser : function(){
			
			
		}, // end resetUser function
		
		updateUsers : function(){
			var $userList =	this.$list;
			// reset the user list
			$userList.empty();
			// loop through and render all users
			_.each(this.model.models, function(user){
				$userList.append( new window.fms.UserRow( {model:user} ).render().el );
			});
		} // end updateUsers function
		
	}); // end UsersPage
	
})();
