
$(function(){
	
	window.fms.GroupManager = Backbone.View.extend({
		
		el :		$('body'),
		
		// register view events
		events : {
			
		}, // end view events
		
		// initialize application
		initialize : function(){
			// create base variables
			this.router =		new window.fms.ApplicationRouter(this);
			this.users =		new window.fms.UserCollection();
			this.meetings =		new window.fms.MeetingCollection();
			this.raffles =		new window.fms.RaffleCollection();
			// DOM references
			this.$container = 	$('#content'),
			
			// bind model events
			
			// jumpstart the app
			Backbone.history.start();
		}, // end initialize function
		
		loadCollection : function(collection, callback, args){
			var self = this;
			collection.fetch({
				success : function(){
					collection.loaded = true;
					callback.call(self, args);
				}
				// TODO : Add error handling
			});
		}, // end loadCollection function
		
		loadView_Home : function(){
			// create the home page
			this.homePage = new window.fms.HomePage();
			this.$container.html( this.homePage.render().el );
		}, // end loadView_Home function
		
		/* ************************************************************
		**					MEETING PAGES
		************************************************************ */
		
		loadView_MeetingForm : function(id){
			// make sure the meetings are loaded
			if(! this.meetings.loaded){
				this.loadCollection.call(this, this.meetings, arguments.callee, id);
				return;
			}
			
			// get the meeting, or create a new one if a valid ID isn't present
			var meetingID =		id || 0;
			var editMeeting =	(meetingID !== 0) ? this.meetings.get(id) : new window.fms.Meeting();
			// create a new form and add it to the page
			this.meetingForm =	new window.fms.MeetingForm({model : editMeeting, collection : this.meetings});
			this.$container.html( this.meetingForm.render().el );
			// convert date fields into pickers
			$('#meetingDate').datepicker();
			// focus on the first field
			$('#topic').focus();
			// set the navigation to the correct element
			this.setNavigation('meetings');
		}, // end loadView_MeetingForm function
		
		loadView_Meetings : function(){
			// make sure the meetings are loaded
			if(! this.meetings.loaded){
				this.loadCollection.call(this, this.meetings, arguments.callee);
				return;
			}
			
			// create the meetings page
			this.meetingsPage = new window.fms.MeetingsPage({collection : this.meetings});
			this.$container.html( this.meetingsPage.render().el );
			// set the navigation to the correct element
			this.setNavigation('meetings');
		}, // end loadView_Meetings function
		
		loadView_PersonList : function(id, selector){
			// make sure the meetings are loaded
			if(! this.meetings.loaded){
				this.loadCollection.call(this, this.meetings, arguments.callee, id, selector);
				return;
			}

			// get the meeting, or create a new one if a valid ID isn't present
			var meetingID =		id || 0;
			var editMeeting =	(meetingID !== 0) ? this.meetings.get(id) : new window.fms.Meeting();
			if(meetingID === 0){
				alert('invalid'); // TODO : do something to handle invalid ids
			}
			
			// create the selector page
			this.selectorPage =	new window.fms.PersonSelector({model : editMeeting, collection : this.meetings});
			this.$container.html( this.selectorPage.render().el );
		}, // end loadView_PersonList function
		
		/* ************************************************************
		**					RAFFLE PAGES
		************************************************************ */
		
		loadView_RaffleForm : function(id){
			// make sure the raffles are loaded
			if(! this.raffles.loaded){
				this.loadCollection.call(this, this.raffles, arguments.callee, id);
				return;
			}
			
			// get the raffle, or create a new one if a valid ID isn't present
			var raffleID = 		id || 0;
			var editRaffle =	(raffleID !== 0) ? this.raffles.get(id) : new window.fms.Raffle();
			// create a new form and add it to the page
			this.raffleForm =	new window.fms.RaffleForm({model : editRaffle, collection : this.raffles});
			this.$container.html( this.raffleForm.render().el );
			// focus on the first field
			$('#prize').focus();
			// set the navigation to the correct element
			this.setNavigation('raffles');
		}, // end loadView_RaffleForm function
		
		loadView_Raffles : function(){
			// make sure the raffles are loaded
			if(! this.raffles.loaded){
				this.loadCollection.call(this, this.raffles, arguments.callee);
				return;
			}

			// load the raffles page	
			this.rafflesPage = new window.fms.RafflesPage({model : this.raffles});
			this.$container.html( this.rafflesPage.render().el );
			// set the navigation to the correct element
			this.setNavigation('raffles');
		}, // end loadView_Raffles function
		
		/* ************************************************************
		**					USER PAGES
		************************************************************ */
		
		loadView_UserForm : function(id){
			// make sure the users are loaded
			if(! this.users.loaded){
				this.loadCollection.call(this, this.users, arguments.callee, id);
				return;
			}
			
			// get the user, or create a new one if a valid ID isn't present
			var userID =	id || 0;
			var editUser =	(userID !== 0) ? this.users.get(id) : new window.fms.User();
			// TODO : Handle if user comes back null (not found by id)
			// create the user form
			this.userForm =		new window.fms.UserForm({model : editUser, collection : this.users});
			this.$container.html( this.userForm.render().el );
			// focus on the first field
			$('#firstName').focus();
			// set the navigation to the correct element
			this.setNavigation('users');
		}, // end loadView_UserForm function
		
		loadView_UserDetails : function(id){
			// make sure the users are loaded
			if(! this.users.loaded){
				this.loadCollection.call(this, this.users, arguments.callee, id);
				return;
			}
			// get the user requested
			var userID =	id || 0;
			var editUser =	this.users.get(id);
			// TODO : Handle if user comes back null (not found by id)
			// create the user page
			this.userDetailsPage =	new window.fms.UserDetails({model : editUser});
			// update the model
			this.userDetailsPage.model = editUser;
			// inject the content into the page
			this.$container.html( this.userDetailsPage.render().el );
			// set the navigation to the correct element
			this.setNavigation('users');
		}, // end loadView_UserDetails function
		
		loadView_Users : function(){
			// make sure the users are loaded
			if(! this.users.loaded){
				this.loadCollection.call(this, this.users, arguments.callee);
				return;
			}
			
			// load the users page
			this.usersPage = new window.fms.UsersPage({model : this.users});
			this.$container.html( this.usersPage.render().el );
			// set the navigation to the correct element
			this.setNavigation('users');
		}, // end loadView_Users function
		
		setNavigation : function(activeItem){
			// deselect current navigation element
			$('#navigation li').removeClass('active');
			// select the correct element
			$('#' + activeItem + 'Nav')	.addClass('active')
										.children('a').blur(); // removes dotted line around link
		}, // end setNavigation function
		
		showView : function(pageName, params){
			var functionName = 'loadView_' + pageName;
			if( typeof this[functionName] === "function" ){
				this[functionName].call(this, params);
			}else{
				console.log("Invalid page provided: " + pageName);
			}
		} // end showView function
		
	});// end GroupManager
	
});

