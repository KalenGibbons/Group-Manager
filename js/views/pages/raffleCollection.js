
(function(){
	
	window.fms.RaffleCollection = Backbone.Collection.extend({
		
		// reference this collection's model
		model :	window.fms.Raffle,
		
		// TODO : wire this in, don't hardcode
		// use localStorage for temporary persistence
		localStorage :	new Store('group-manager-raffles')
		
	}); // end RaffleCollection
	
})();

