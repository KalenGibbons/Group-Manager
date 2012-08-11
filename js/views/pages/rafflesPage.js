
(function(){
	
	window.fms.RafflesPage = Backbone.View.extend({
		
		// establish the template for this view
		template : _.template( $('#rafflesPage').html() ),
		
		initialize : function(){
			// bind model events
			this.model.on('all', this.updateRaffles, this);
			this.model.on('add', this.addRaffle, this);
			this.model.on('reset', this.resetRaffles, this);
			
			// DOM references
			this.$list = this.$('#raffleList');
		}, // end initialize function
		
		render : function(){
			// simply render the template
			$(this.el).html( this.template() );
			// reset DOM references
			this.$list = this.$('#raffleList');
			// re-render raffle rows
			this.updateRaffles.call(this);
			
			return this;
		}, // end render function
		
		addRaffle : function(){
			
			
		}, // end addRaffle function
		
		resetRaffles : function(){
			
			
		}, // end resetRaffles function
		
		updateRaffles : function(){
			var self =	this;
			// reset the raffle list
			this.$list.empty();
			// loop through and render all raffles
			_.each(this.model.models, function(raffle){
				self.$list.append( new window.fms.RaffleRow( {model:raffle} ).render().el );
			});
		} // end updateRaffles function
		
	}); // end RafflesPage
	
})();
