
(function(){
	
	window.fms.MemberRow = Backbone.View.extend({
		
		tagName :	'tr',
		
		// establish the template for this view
		template :	_.template( $('#memberRow').html() ),
		
		// register view events
		events : {
			"click .remove" :	"removeMember",
			"click .edit" :		"editMember",
			"click .view" :		"viewMember"
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
		
		editMember : function(){
			App.trigger("navigate", "members/edit/" + this.model.get('id'));
		}, // end editMember function
		
		removeMember : function(){
			// delete the member
			this.model.clear();
		}, // end removeMember function
		
		viewMember : function(){
			App.trigger("navigate", "members/" + this.model.get('id'));
		} // end viewMember function
		
	});
	
})();

