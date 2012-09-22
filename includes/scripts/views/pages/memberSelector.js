
(function(){
	
	window.fms.MemberSelector =	Backbone.View.extend({
		
		// establish the template for this view
		template :	_.template( $('#memberSelector').html() ),
		
		// register view events
		events : {
			"keyup #filterMembers" :	"filterMembers"
		}, // end view events
		
		initialize : function(){
			// bind model events
			
			// DOM references
			this.$list =	this.$('#memberList');
			this.$search =	this.$('#search');
		}, // end initialize function
		
		render : function(){
			// start by rendering the template
			$(this.el).html( this.template() );
			//$(this.el).html( this.template(this.model.toJSON()) );
			// reset DOM references
			this.$list =	this.$('#memberList');
			this.$search =	this.$('#search');
			// re-render all member rows
			this.updateMembers.call(this);
			return this;
		}, // end render function
		
		filterMembers : function(event){
			var searchValue =	_.trim( $(event.target).val().toLowerCase() );
			var rows =			this.$list.find('tr');
			var rowValue =		"";
			// loop through all rows and compare values
			_.each(rows, function(row){
				var rowValue = _.trim( $(row).find('td:first').text().toLowerCase() );
				if( searchValue.length == 0 || _.str.include(rowValue, searchValue) ){
					$(row).removeClass('hidden');
				}else{
					$(row).addClass('hidden');
				}
			});
		}, // end filterMembers function
		
		updateMembers : function(){
			var self =	this;
			// reset the people list
			this.$list.empty();
			// loop through and render all rows
			_.each(this.collection.models, function(member){
				self.$list.append( new window.fms.MemberSelectionRow( {model:member} ).render().el );
			});
		} // end updateMembers function
		
	}); // end MemberList
	
})();
