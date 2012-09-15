

(function(){
	
	window.fms.MeetingsPage = Backbone.View.extend({
		
		// establish the template for this view
		template : _.template( $('#meetingsPage').html() ),
		
		initialize : function(){
			// bind model events
			this.collection.on('all', this.updateMeetings, this);
			this.collection.on('add', this.addMeeting, this);
			this.collection.on('reset', this.resetMeetings, this);
			
			// DOM references
			this.$list =	this.$('#meetingList');
		}, // end initialize function
		
		render : function(){
			// simply render the template
			$(this.el).html( this.template() );
			// reset DOM references
			this.$list =	this.$('#meetingList');
			// re-render meeting rows
			this.updateMeetings.call(this);
			
			return this;
		}, // end render function
		
		addMeeting : function(){
			
		}, // end addMeeting function
		
		resetMeetings : function(){
			
		}, // end resetMeetings function
		
		updateMeetings : function(){
			var self =	this;
			// reset the meetings list
			this.$list.empty();
			// loop through and render all meetings
			_.each(this.collection.models, function(meeting){
				self.$list.append( new window.fms.MeetingRow( {model:meeting} ).render().el );
			});
		} // end updateMeetings function
		
	}); // end MeetingsPage
	
})();
