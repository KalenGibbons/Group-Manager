
(function(){
	
	window.fms.UserForm = Backbone.View.extend({
		
		// establish the template for this view
		template : _.template( $('#userEditPage').html() ),
		
		// register view events
		events : {
			"change" :	"changeHandler"
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
		
		updateFormElement : function(element, _cssClass, _message){
			var cssClass =	_cssClass || "";
			var message =	_message || "";
			// reset values
			$(element).parent().attr('class', 'input-block').addClass(cssClass);
			$(element).next().text(message);
		} // end updateFormElement function
		
	}); // end UserForm
	
})();
