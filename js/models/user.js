
(function(){
	
	window.fms.User = Backbone.Model.extend({
		
		clear : function(){
			alert('CLEARING');
			this.destroy();
		} // end clear function
		
	}); // end User
	
})();
