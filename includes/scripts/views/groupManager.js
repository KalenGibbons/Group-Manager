
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
			this.members =		new window.fms.MemberCollection();
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
					callback.apply(self, args);
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
				this.loadCollection.apply(this, [this.meetings, arguments.callee, [id]]);
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
				this.loadCollection.apply(this, [this.meetings, arguments.callee]);
				return;
			}
			
			// create the meetings page
			this.meetingsPage = new window.fms.MeetingsPage({collection : this.meetings});
			this.$container.html( this.meetingsPage.render().el );
			// set the navigation to the correct element
			this.setNavigation('meetings');
		}, // end loadView_Meetings function
		
		loadView_MemberList : function(id, selector){
			// TODO : see if we can figure out a way to load members and meeting simultaneously without a double callback

			// make sure the meetings are loaded
			if(! this.meetings.loaded){
				this.loadCollection.apply(this, [this.meetings, arguments.callee, [id, selector]]);
				return;
			}
			// make sure the members are loaded
			if(! this.members.loaded){
				this.loadCollection.apply(this, [this.members, arguments.callee, [id, selector]]);
				return;
			}

			// get the meeting, or create a new one if a valid ID isn't present
			var meetingID =		id || 0;
			var editMeeting =	(meetingID !== 0) ? this.meetings.get(id) : new window.fms.Meeting();
			if(meetingID === 0){
				alert('invalid'); // TODO : do something to handle invalid ids
			}
			
			// create the selector page
			this.selectorPage =	new window.fms.MemberSelector({model : editMeeting, collection : this.members, selectionType : selector});
			this.$container.html( this.selectorPage.render().el );
		}, // end loadView_MemberList function
		
		/* ************************************************************
		**					RAFFLE PAGES
		************************************************************ */
		
		loadView_RaffleForm : function(id){
			// make sure the raffles are loaded
			if(! this.raffles.loaded){
				this.loadCollection.apply(this, [this.raffles, arguments.callee, [id]]);
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
				this.loadCollection.apply(this, [this.raffles, arguments.callee]);
				return;
			}

			// load the raffles page	
			this.rafflesPage = new window.fms.RafflesPage({model : this.raffles});
			this.$container.html( this.rafflesPage.render().el );
			// set the navigation to the correct element
			this.setNavigation('raffles');
		}, // end loadView_Raffles function
		
		/* ************************************************************
		**					MEMBER PAGES
		************************************************************ */
		
		loadView_MemberForm : function(id){
			// make sure the members are loaded
			if(! this.members.loaded){
				this.loadCollection.apply(this, [this.members, arguments.callee, [id]]);
				return;
			}
			
			// get the member, or create a new one if a valid ID isn't present
			var memberID =	id || 0;
			var editMember =	(memberID !== 0) ? this.members.get(id) : new window.fms.Member();
			// TODO : Handle if member comes back null (not found by id)
			// create the member form
			this.memberForm =		new window.fms.MemberForm({model : editMember, collection : this.members});
			this.$container.html( this.memberForm.render().el );
			// focus on the first field
			$('#firstName').focus();
			// set the navigation to the correct element
			this.setNavigation('members');
		}, // end loadView_MemberForm function
		
		loadView_MemberDetails : function(id){
			// make sure the members are loaded
			if(! this.members.loaded){
				this.loadCollection.apply(this, [this.members, arguments.callee, [id]]);
				return;
			}
			// get the member requested
			var memberID =	id || 0;
			var editMember =	this.members.get(id);
			// TODO : Handle if member comes back null (not found by id)
			// create the member page
			this.memberDetailsPage =	new window.fms.MemberDetails({model : editMember});
			// update the model
			this.memberDetailsPage.model = editMember;
			// inject the content into the page
			this.$container.html( this.memberDetailsPage.render().el );
			// set the navigation to the correct element
			this.setNavigation('members');
		}, // end loadView_MemberDetails function
		
		loadView_Members : function(){
			// make sure the members are loaded
			if(! this.members.loaded){
				this.loadCollection.apply(this, [this.members, arguments.callee]);
				return;
			}
			
			// load the members page
			this.membersPage = new window.fms.MembersPage({model : this.members});
			this.$container.html( this.membersPage.render().el );
			// set the navigation to the correct element
			this.setNavigation('members');
		}, // end loadView_Members function
		
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
				this[functionName].apply(this, params);
			}else{
				console.log("Invalid page provided: " + pageName);
			}
		} // end showView function
		
	});// end GroupManager
	
});

