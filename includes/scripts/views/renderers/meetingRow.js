
(function(){
	
	window.fms.MeetingRow =	Backbone.View.extend({
		
		tabName :	'tr',
		
		// establish the template for this view
		template :	_.template( $('#meetingRow').html() ),
		
		// register view events
		events : {
			"click .remove" :	"removeMeeting",
			"click .edit" :		"editMeeting",
			"click .view" :		"viewMeeting"
		}, // end view events
		
		initialize : function(){
			// bind model events
			this.model.on('change', this.render, this);
			this.model.on('destroy', this.remove, this);
		}, // end initialize function
		
		render : function(){
			$(this.el).html( this.template( this.model.toJSON() ) );
			return this;
		}, // end render function
		
		editMeeting : function(){
			App.trigger('navigate', 'meetings/edit' + this.model.get('id'));
		}, // end editMeeting function
		
		removeMeeting : function(){
			// delete the meeting
			this.model.clear();
		}, // end remove Meeting function
		
		viewMeeting : function(){
			App.trigger('navigate', 'meetings/' + this.model.get('id'));
		} // end viewMeeting function
		
	}); // End MeetingRow
	
})();

