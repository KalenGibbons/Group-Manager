
(function(){
	
	window.fms.MeetingForm = Backbone.View.extend({
		
		// establish the template for this view
		template :	_.template( $('#meetingEditPage').html() ),
		
		// register view events
		events : {
			"change" :						"changeHandler",
			"click #submitBtn" :			"validateForm",
			"click .meeting-list-header" :	"toggleMeetingList",
			"submit form" :					"submitHandler"
		}, // end view events
		
		initialize : function(){
			// bind model events
			
			// DOM references
			
		}, // end intialize function
		
		render : function(){
			// simply render the template
			$(this.el).html( this.template(this.model.toJSON()) );
			return this;
		}, // end render function
		
		changeHandler : function(event){
			// clear out any existing error messges
			
			// apply the change to the model
			var target =			event.target;
			var targetName =		target.name;
			var change =			{};
			change[targetName] =	target.value;
			this.model.set(change);
			
			// run validation (if applicable)
			var validationResults = this.model.validateItem(targetName);
			if(validationResults.isValid){
				this.updateFormElement(target);
			}else{
				this.updateFormElement(target, 'validation-error', validationResults.message);
			}
		}, // end changeHandler function
		
		toggleMeetingList : function(event){
			var $target =	$(event.currentTarget);
			var $dropList =	$target.next();
			
			if( $target.hasClass('expanded') ){
				$target.removeClass('expanded');
				$dropList.slideUp();
			}else{
				$target.addClass('expanded');
				$dropList.slideDown();
			}
		}, // end toggleMeetingList function
		
		updateFormElement : function(element, cssClass, message){
			cssClass =	cssClass || "";
			message =	message || "";
			// reset values
			/*
			$(element).parent().attr('class', 'input-block').addClass(cssClass);
			$(element).next().text(message);
			*/
		}, // end updateFormElement function
		
		saveMeeting : function(){
			var self = this;
			try{            
            	this.model.save( null, {
					success : function(model, response){
						// add the newly saved model to the collection
						self.collection.add(self.model);
						// return to meetings main page
						App.trigger('navigate', 'meetings');
					},
					error : function(model, response){
						alert('ERROR');
					}
				});
			}catch(e){            
            	console.info(e);
            }
		}, // end saveMeeting function
		
		submitHandler : function(){
			this.validateForm.call(this);
			return false;
		}, // end submitHandler function
		
		validateForm : function(){
			// save teh udated meeting
			this.saveMeeting.call(this);
		} // end validateForm function
		
		
	}); // end MeetingForm
	
	
})();
