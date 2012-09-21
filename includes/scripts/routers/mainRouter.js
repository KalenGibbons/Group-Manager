
(function(){
	
	window.fms.ApplicationRouter = Backbone.Router.extend({
		
		// define routes
		routes : {
			"" :						"goHome", 				// default route
			"users/edit/:id" :			"gotoUserEdit",			// edit user form
			"users/new" :				"gotoUserNew",			// new user form
			"users/:id" :				"gotoUserDetails",		// displays user details
			"users" :					"gotoUsers", 			// list of all available users
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
			this.app.showView('PersonList', {id : id, selector : 'attendees'});
		}, // end gotoMeetingAttendees function
		
		gotoMeetingDetails : function(id){
			this.app.showView('MeetingDetails', id);
		}, // end gotoMeetingDetails function
		
		gotoMeetingEdit : function(id){
			this.app.showView('MeetingForm', id);
		}, // end gotoMeetingEdit function
		
		gotoMeetingNew : function(){
			this.app.showView('MeetingForm', 0);
		}, // end gotoMeetingNew function
		
		gotoMeetingPresenters : function(id){
			this.app.showView('PersonList', {id : id, selector : 'presenter'});
		}, // end gotoMeetingPresenters function
		
		gotoMeetings : function(){
			this.app.showView('Meetings');
		}, // end gotoMeetings function
		
		/* ************************************************************
		**					RAFFLE HANDLERS
		************************************************************ */
		
		gotoRaffleDetails : function(id){
			this.app.showView('RaffleDetails', id);
		}, // end gotoRaffleDetails function
		
		gotoRaffleEdit : function(id){
			this.app.showView('RaffleForm', id)
		}, // end gotoRaffleEdit function
		
		gotoRaffleNew : function(){
			this.app.showView('RaffleForm', 0);
		}, // end gotoRaffleNew function
		
		gotoRaffles : function(){
			this.app.showView('Raffles');
		}, // end gotoRaffles function
		
		/* ************************************************************
		**					USER HANDLERS
		************************************************************ */
		
		gotoUserDetails : function(id){
			this.app.showView('UserDetails', id);
		}, // end gotoUserDetails function
		
		gotoUserEdit : function(id){
			this.app.showView('UserForm', id);
		}, // end gotoUserEdit function
		
		gotoUserNew : function(){
			this.app.showView('UserForm', 0);
		}, // end gotoUserNew function
		
		gotoUsers : function(){
			this.app.showView('Users');
		} // end gotoUsers function
		
	}); // end ApplicationRouter
	
})();
