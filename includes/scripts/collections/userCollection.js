
(function(){
	
	window.fms.UserCollection = Backbone.Collection.extend({
		
		// reference this collection's model
		model :	window.fms.User,
		
		// TODO : use custom URL until REST services are available
		url : 'index.cfm?event=api.users',
		
		// custom properties
		loaded : false // TODO : This should be inherited from base collection
		
	}); // end UserCollection
	
})();

