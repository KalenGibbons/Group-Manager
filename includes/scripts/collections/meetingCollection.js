
(function(){
	
	window.fms.MeetingCollection = Backbone.Collection.extend({
		
		// reference this collection's model
		model :	window.fms.Meeting,
		
		// TODO : use custom URL until REST services are available
		url : 'index.cfm?event=api.meetings',
		
		// custom properties
		loaded : false // TODO : This should be inherited from base collection
		
	}); // end MeetingCollection
	
})();

