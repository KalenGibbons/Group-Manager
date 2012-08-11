
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
			this.raffles =		new window.fms.RaffleCollection();
			// DOM references
			this.$container = 	$('#content'),
			
			// bind model events
			
			// jumpstart the app
			Backbone.history.start();
		}, // end initialize function
		
		loadView_Home : function(){
			// create the home page if it doesn't already exist
			if(! this.homePage){
				this.homePage = new window.fms.HomePage();
			}
			// inject the content into the page
			this.$container.html( this.homePage.render().el );
		}, // end loadView_Home function
		
		loadView_Meetings : function(){
			// create the meetings page if it doesn't already exist
			if(! this.meetingsPage){
				this.meetingsPage = new window.fms.MeetingsPage();
			}
			// inject the content into the page
			this.$container.html( this.meetingsPage.render().el );
		}, // end loadView_Meetings function
		
		loadView_RaffleForm : function(id){
			// TODO : Make sure raffles are loaded first
			// get the raffle, or create a new one if a valid ID isn't present
			var raffleID = 		id || 0;
			var editRaffle =	(raffleID !== 0) ? this.raffles.get(id) : new window.fms.Raffle();
			// create a new form and add it to the page
			this.raffleForm =	new window.fms.RaffleForm({model : editRaffle});
			this.$container.html( this.raffleForm.render().el );
		}, // end loadView_RaffleForm function
		
		loadView_Raffles : function(){
			var self =	this;
			// grab the raffles and load the page
			this.raffles.fetch({
				success : function(){
					self.rafflesPage = new window.fms.RafflesPage({model : self.raffles});
					self.$container.html( self.rafflesPage.render().el );
				}
			});
		}, // end loadView_Raffles function
		
		loadView_UserForm : function(id){
			// make sure we have the user data available
			/* TODO : figure out how not to break this if there's no users yet
			if(this.users.length < 1){
				var self = this;
				// TODO : add fault handler
				// pull the user data and then call this function again
				this.users.fetch({success : function(){
					if(self.users.length){
						self.loadView_UserForm(id);
					}
				}});
				return;
			}
			*/
			
			// get the user, or create a new one if a valid ID isn't present
			var userID =	id || 0;
			var editUser =	(userID !== 0) ? this.users.get(id) : this.users.create();
			// create the 
			// TODO : Handle if user comes back null (not found by id)
			// create a new form and add it to the page
			this.userForm =		new window.fms.UserForm({model : editUser});
			this.$container.html( this.userForm.render().el );
		}, // end loadView_UserForm function
		
		loadView_UserDetails : function(id){
			// make sure we have the user data available
			/* TODO : figure out how not to break this if there's no users yet
			if(this.users.length < 1){
				var self = this;
				// TODO : add fault handler
				// pull the user data and then call this function again
				this.users.fetch({success : function(){
					if(self.users.length){
						self.loadView_UserForm(id);
					}
				}});
				return;
			}
			*/
			
			var userID =	id || 0;
			var editUser =	this.users.get(id);
			// TODO : Handle if user comes back null (not found by id)
			// create userDetails page if it doesn't already exist
			if(! this.userDetailsPage){
				this.userDetailsPage =	new window.fms.UserDetails({model : editUser});
			}else{
				// update the model
				this.userDetailsPage.model = editUser;
			}
			// inject the content into the page
			this.$container.html( this.userDetailsPage.render().el );
		}, // end loadView_UserDetails function
		
		loadView_Users : function(){
			var self =	this;
			// grab the users and load the page
			this.users.fetch({
				success : function(){
					self.usersPage = new window.fms.UsersPage({model : self.users});
					self.$container.html( self.usersPage.render().el );
				}
			});
		}, // end loadView_Users function
		
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

