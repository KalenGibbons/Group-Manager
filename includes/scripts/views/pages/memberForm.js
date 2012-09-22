
(function(){
	
	window.fms.MemberForm = Backbone.View.extend({
		
		// establish the template for this view
		template : _.template( $('#memberEditPage').html() ),
		
		// register view events
		events : {
			"change" :				"changeHandler",
			"click #submitBtn" : 	"validateForm",
			"submit form" :			"submitHandler"
		}, // end view events
		
		initialize : function(){
			// bind model events
			
			// DOM references
			
		}, // end initialize function
		
		render : function(){
			// simply render the template
			$(this.el).html( this.template(this.model.toJSON()) );
			return this;
		}, // end render function
		
		changeHandler : function(event){
			// clear out any existing error messages

			// apply the change to the model
			var target = 			event.target;
			var targetName =		target.name;
			var change =			{};
			change[targetName] = 	target.value;
			this.model.set(change);
			
			// run validation (if applicable)
			var validationResults = this.model.validateItem(targetName);
			if(validationResults.isValid){
				this.updateFormElement(target);
			}else{
				this.updateFormElement(target, 'validation-error', validationResults.message);
			}
		}, // end changeHandler function
		
		saveMember : function(){
			var self =	this;
			try{            
				this.model.save( null, {
					success : function(model, response){
						// return to raffle main page
						App.trigger("navigate", "members");
					},
					error : function(model, response){
						alert('ERROR');
					}
				});
            }catch(e){            
            	console.info(e);	            
            }
		}, // end saveMember function
		
		submitHandler : function(){
			this.validateForm.call(this);
			return false;
		}, // end submitHandler function
		
		updateFormElement : function(element, _cssClass, _message){
			var cssClass =	_cssClass || "";
			var message =	_message || "";
			// reset values
			/*
			$(element).parent().attr('class', 'input-block').addClass(cssClass);
			$(element).next().text(message);
			*/
		}, // end updateFormElement function
		
		validateForm : function(){
			// TODO : validate model
			console.info(this.model);
			// save the updated member
			this.saveMember.call(this);
		} // end validateForm function
		
	}); // end MemberForm
	
})();
