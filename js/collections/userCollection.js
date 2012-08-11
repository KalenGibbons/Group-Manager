
(function(){
	
	window.fms.UserCollection = Backbone.Collection.extend({
		
		// reference this collection's model
		model :	window.fms.User,
		
		// TODO : use custome URL until REST services are available
		url : 'index.cfm?event=api.users'
		
		// TODO : Wire this in, don't hardcode
		// use localStorage for temporary persistence
		//localStorage : new Store('group-manager-test')
		
	}); // end UserCollection
	
})();

