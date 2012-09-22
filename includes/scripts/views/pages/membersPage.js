
(function(){
	
	window.fms.MembersPage = Backbone.View.extend({
		
		// establish the template for this view
		template : _.template( $('#membersPage').html() ),
		
		initialize : function(){
			// bind model events
			this.model.on('all', this.updateMembers, this);
			this.model.on('add', this.addMember, this);
			this.model.on('reset', this.resetMembers, this);
			
			// DOM references
			this.$list = this.$('#memberList');
		}, // end initialize function
		
		render : function(){
			// simply render the template
			$(this.el).html( this.template() );
			// reset DOM references
			this.$list = this.$('#memberList');
			// re-render member rows
			this.updateMembers.call(this);

			return this;
		}, // end render function
		
		addMember : function(){
			
			
		}, // end addMember function
		
		resetMembers : function(){
			
			
		}, // end resetMembers function
		
		updateMembers : function(){
			var self = this;
			// reset the member list
			this.$list.empty();
			// loop through and render all members
			_.each(this.model.models, function(member){
				self.$list.append( new window.fms.MemberRow( {model:member} ).render().el );
			});
		} // end updateMembers function
		
	}); // end MembersPage
	
})();
