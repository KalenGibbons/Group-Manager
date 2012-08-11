
(function(){
	
	window.fms.RaffleRow = Backbone.View.extend({
		
		tagName :	'li',
		
		// establish the template for this view
		template :	_.template( $('#raffleRow').html() ),
		
		// register view events
		events : {
			"click .remove" :	"removeRaffle",
			"click .edit" :		"editRaffle",
			"click .view" :		"viewRaffle"
		}, // end view events
		
		instantiate : function(){
			// bind model events
			this.model.on("change", this.render, this);
			this.model.on("destroy", this.remove, this);
		}, // end instantiate function
		
		render : function(){
			$(this.el).html( this.template(this.model.toJSON()) );
			return this;
		}, // end render function
		
		editRaffle : function(){
			App.trigger("navigate", "raffles/edit/" + this.model.get('id'));
		}, // end editRaffle function
		
		removeRaffle : function(){
			// delete this raffle
			this.model.clear();
		}, // end removeRaffle function
		
		viewRaffle : function(){
			App.trigger("navigate", "raffles/" + this.model.get('id'));
		} // end viewRaffle function
		
	}); // end RaffleRow
	
})();

