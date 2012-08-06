
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
		
		loadView_Raffles : function(){
			// create the raffles page if it doesn't already exist
			if(! this.rafflesPage){
				this.rafflesPage = new window.fms.RafflesPage();
			}
			// inject the content into the page
			this.$container.html( this.rafflesPage.render().el );
		}, // end loadView_Raffles function
		
		loadView_Users : function(){
			// create the homePage if it doesn't already exist
			if(! this.usersPage){
				this.usersPage = new window.fms.UsersPage({model : this.users});
				this.usersPage.render();
				this.users.fetch();
			}
			// inject the content into the page
			this.$container.html( this.usersPage.render().el );
		}, // end loadView_Users function
		
		showView : function(pageName){
			var functionName = 'loadView_' + pageName;
			if( typeof this[functionName] === "function" ){
				this[functionName].call(this);
			}else{
				console.log("Invalid page provided: " + pageName);
			}
		} // end showView function
		
	});// end GroupManager
	
});

