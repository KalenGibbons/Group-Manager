
(function(){
	
	window.fms.RaffleCollection = Backbone.Collection.extend({
		
		// reference this collection's model
		model :	window.fms.Raffle,
		
		// TODO : use custom URL until REST services are available
		url : 'index.cfm?event=api.raffles',
		
		// custom properties
		loaded : false // TODO : This should be inherited from base collection
		
	}); // end RaffleCollection
	
})();

