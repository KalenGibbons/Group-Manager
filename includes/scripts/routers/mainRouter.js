
(function(){
	
	window.fms.ApplicationRouter = Backbone.Router.extend({
		
		// define routes
		routes : {
			"" :						"goHome", 				// default route
			"members/edit/:id" :		"gotoMemberEdit",		// edit member form
			"members/new" :				"gotoMemberNew",		// new member form
			"members/:id" :				"gotoMemberDetails",	// displays member details
			"members" :					"gotoMembers", 			// list of all available members
			"meetings/edit/:id" :		"gotoMeetingEdit",		// edit meeting form
			"meetings/new" :			"gotoMeetingNew",		// new meeting form
			"meetings/:id/attendees" :	"gotoMeetingAttendees",	// display attendee selector list
			"meetings/:id/presenters" : "gotoMeetingPresenters",// display presenter selector list
			"meetings/:id" :			"gotoMeetingDetails",	// displays meeting details
			"meetings" :				"gotoMeetings",			// list of all meetings
			"raffles/edit/:id" :		"gotoRaffleEdit",		// edit raffle form
			"raffles/new" :				"gotoRaffleNew",		// new raffle form
			"raffles/:id" :				"gotoRaffleDetails",	// view raffle details
			"raffles" :					"gotoRaffles"			// list of all raffles
		}, // end routes
		
		initialize : function(applicationContext){
			if(applicationContext){
				this.app =	applicationContext;
			}else{
				throw("App parameter is required for ApplicationRouter");
			}
			// bind events
			var self = this;
			this.app.on("navigate", function(path){
				self.navigate(path, {trigger : true});
			});
		}, // end initialize function
		
		goHome : function(){
			this.app.showView('Home');
		}, // end goHome function
		
		/* ************************************************************
		**					MEETING HANDLERS
		************************************************************ */
		
		gotoMeetingAttendees : function(id){
			this.app.showView('MemberList', [id, 'attendees']);
		}, // end gotoMeetingAttendees function
		
		gotoMeetingDetails : function(id){
			this.app.showView('MeetingDetails', [id]);
		}, // end gotoMeetingDetails function
		
		gotoMeetingEdit : function(id){
			this.app.showView('MeetingForm', [id]);
		}, // end gotoMeetingEdit function
		
		gotoMeetingNew : function(){
			this.app.showView('MeetingForm', [0]);
		}, // end gotoMeetingNew function
		
		gotoMeetingPresenters : function(id){
			this.app.showView('MemberList', [id, 'presenters']);
		}, // end gotoMeetingPresenters function
		
		gotoMeetings : function(){
			this.app.showView('Meetings');
		}, // end gotoMeetings function
		
		/* ************************************************************
		**					RAFFLE HANDLERS
		************************************************************ */
		
		gotoRaffleDetails : function(id){
			this.app.showView('RaffleDetails', [id]);
		}, // end gotoRaffleDetails function
		
		gotoRaffleEdit : function(id){
			this.app.showView('RaffleForm', [id])
		}, // end gotoRaffleEdit function
		
		gotoRaffleNew : function(){
			this.app.showView('RaffleForm', [0]);
		}, // end gotoRaffleNew function
		
		gotoRaffles : function(){
			this.app.showView('Raffles');
		}, // end gotoRaffles function
		
		/* ************************************************************
		**					MEMBER HANDLERS
		************************************************************ */
		
		gotoMemberDetails : function(id){
			this.app.showView('MemberDetails', [id]);
		}, // end gotoMemberDetails function
		
		gotoMemberEdit : function(id){
			this.app.showView('MemberForm', [id]);
		}, // end gotoMemberEdit function
		
		gotoMemberNew : function(){
			this.app.showView('MemberForm', [0]);
		}, // end gotoMemberNew function
		
		gotoMembers : function(){
			this.app.showView('Members');
		} // end gotoMembers function
		
	}); // end ApplicationRouter
	
})();
