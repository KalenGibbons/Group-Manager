
(function(){
	
	window.fms.MemberSelector =	Backbone.View.extend({
		
		// establish the template for this view
		template :	_.template( $('#memberSelector').html() ),
		
		// register view events
		events : {
			"keyup #filterMembers" :	"filterMembers",
			"click tr" :				"toggleSelection",
			"click #setSelectionBtn" :	"setSelection",
			"click #cancelSelectionBtn": "cancelSelection"
		}, // end view events
		
		initialize : function(){
			// bind model events
			this.settings =	this.getSettings(this.options.selectionType);
			// DOM references
			this.$list =	this.$('#memberList');
			this.$search =	this.$('#search');
		}, // end initialize function
		
		render : function(){
			// start by rendering the template
			$(this.el).html( this.template() );
			// reset DOM references
			this.$list =	this.$('#memberList');
			this.$search =	this.$('#search');
			// re-render all member rows
			this.updateMembers.call(this);
			return this;
		}, // end render function
		
		cancelSelection : function(){
			alert('cancel selection');
		}, // end cancelSelection function
		
		filterMembers : function(event){
			var searchValue =	_.trim( $(event.target).val().toLowerCase() );
			var rows =			this.$list.find('tr');
			var rowValue =		"";
			var member =		"";
			// loop through all rows and compare values
			_.each(rows, function(row){
				// get member data stored in row
				var member = 	$(row).data('member');
				// extract user's full name
				var rowValue =	_.trim( member.get('firstName') + ' ' + member.get('lastName') ).toLowerCase();
				// look for text matches
				if( searchValue.length == 0 || _.str.include(rowValue, searchValue) ){
					$(row).removeClass('hidden');
				}else{
					$(row).addClass('hidden');
				}
			});
		}, // end filterMembers function
		
		getSettings : function(type){
			var settings =	"";
			switch(type.toLowerCase()){
				case 'presenters':	settings = {title : 'Presenters', field :	'presenters'};
									break;
				case 'attendees':
				default:			settings = {title : 'Attendees', field :	'attendees'};
									break;
			}
			return settings;
		}, // end getSettings function
		
		setSelection : function(event){
			// find all the selected rows
			var $selectedMembers =	this.$list.find('tr.selected');
			// pull the member data out of the rows
			var memberArray =		_.map($selectedMembers, function(row){
										return $(row).data('member');
									});
			// set the members and save
			try{            
				var self =			this;
				this.model.set(this.settings.field, memberArray);
				this.model.save( null, {
					success : function(model, response){
						// return to raffle main page
						App.trigger("navigate", "meetings/edit/" + self.model.get('id'));
					},
					error : function(model, response){
						alert('ERROR'); // TODO : add error handling
					}
				});
            }catch(e){            
				// TODO : add error handling
            	console.info(e);	            
            }
		}, // end setSelection function
		
		toggleSelection : function(event){
			var $row =		$(event.currentTarget);
			$row.toggleClass('selected');
		}, // end toggleSelection function
		
		updateMembers : function(){
			var self =				this;
			var row =				"";
			var $row =				"";
			var selection =			this.model.get(this.settings.field);
			var selectedMember =	"";
			// reset the people list
			this.$list.empty();
			// sort the list by name
			var sortedMembers =		_.sortBy(this.collection.models, function(person){ return person.get('firstName').toLowerCase() });
			// loop through and render all rows
			_.each(sortedMembers, function(member){
				// get HTML for row
				row =	new window.fms.MemberSelectionRow( {model:member} ).render().el;
				$row =	$(row);
				// determine if this person should already be selected
				selectedMember =	_.find(selection, function(person){ return person.id === member.id; });
				if(! _.isUndefined(selectedMember) ){
					$row.addClass('selected')
				}
				// add member data to row for reference
				$row.data('member', member);
				// add to DOM
				self.$list.append(row);
			});
		} // end updateMembers function
		
	}); // end MemberList
	
})();
