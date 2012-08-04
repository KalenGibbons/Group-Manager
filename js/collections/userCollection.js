
(function(){
	
	window.fms.UserCollection = Backbone.Collection.extend({
		
		// reference this collection's model
		model :	window.fms.User,
		
		// TODO : Wire this in, don't hardcode
		// use localStorage for temporary persistence
		localStorage : new Store('group-manager-test')
		
	});
	
})();

