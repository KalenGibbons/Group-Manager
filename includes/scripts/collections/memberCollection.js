
(function(){
	
	window.fms.MemberCollection = Backbone.Collection.extend({
		
		// reference this collection's model
		model :	window.fms.Member,
		
		// TODO : use custom URL until REST services are available
		url : 'index.cfm?event=api.members',
		
		// custom properties
		loaded : false // TODO : This should be inherited from base collection
		
	}); // end MemberCollection
	
})();

