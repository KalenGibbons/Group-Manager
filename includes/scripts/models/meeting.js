
(function(){
	
	window.fms.Meeting = Backbone.Model.extend({
		
		// TODO : use custome URL until REST services are available
		url : function(){ return 'index.cfm?event=api.meetings&id=' + encodeURIComponent(this.id) },
		
		getCurrentDate : function(){
			var today =		new Date();
			var month =		today.getMonth() + 1;
			return month + '/' + today.getDate() + '/' + today.getFullYear();
		}, // end getCurrentDate function
		
		// object defaults
		defaults : {
			id :			0,
			topic :			'',
			meetingDate :	'',
			presenters :	[],
			attendees :		[],
			raffles :		[]
		}, // end defaults
		
		initialize : function(){
			this.validators =		{};
		}, // end initialize function
		
		clear : function(){
			this.destroy();
		}, // end clear function
		
		validateItem : function(item){
			var results =	{isValid : true, message : ''};
			if( this.validators[item] ){
				results =	this.validators[item]( this.get(item) );
			}
			return results;
		}, // end validateItem function
		
	}); // end Meeting
	
})();

