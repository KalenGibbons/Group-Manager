component  extends="BaseEntity" persistent="true" accessors="true" displayname="Meeting" entityname="Meeting" table="Meetings" hint="Meeting object" output="false"{
	
	/* *********************************************************************
	**							PROPERTIES									
	********************************************************************* */
		
	property name="topic"		column="topic"
								type="string"
								notnull="true";	
								
	property name="meetingDate" column="meetingDate"
								type="date"
								notnull="false";
								
	/* *********************************************************************
	**							RELATIONSHIPS								
	********************************************************************* */
	
	property name="presenters" 	type="array"
								singularname="presenter" 
								linktable="meetingPresenters"
								cascade="refresh"        
								fieldtype="one-to-many" 
								cfc="Person" 
								fkcolumn="presenterID";
								
	property name="attendees" 	type="array"
								singularname="attendee" 
								linktable="meetingAttendees"
								cascade="refresh"        
								fieldtype="one-to-many" 
								cfc="Person" 
								fkcolumn="attendeeID";
								
	property name="raffles" 	type="array"
								singularname="raffle" 
								linktable="meetingRaffles"
								cascade="refresh"        
								fieldtype="one-to-many" 
								cfc="Raffle" 
								fkcolumn="raffleID";
								
	/* *********************************************************************
	**						PUBLIC FUNCTIONS								
	********************************************************************* */
	
	public Meeting function init(){
		super.init();
		return this;
	}// end init function
	
	public struct function getEntityData(){
		return {"id" = 			variables.id, 
				"created" = 	variables.created,
				"modified" = 	variables.modified,
				"topic" =		variables.topic,
				"meetingDate" =	dateFormat(variables.meetingDate, 'MM/DD/YYYY'),
				"presenters" =	getEntityLists(variables.presenters),
				"attendees" =	getEntityLists(variables.attendees),
				"raffles" =		getEntityLists(variables.raffles)};
	}// end getEntityData function
	
	private array function getEntityLists(required array list){
		var len =				arrayLen(arguments.list);
		var serializedList =	[];
		
		// loop over entities and serialize them
		for(var i = 1; i <= len; i++){
			arrayAppend(serializedList, arguments.list[i].getEntityData());
		}
		
		return serializedList;
	}// end getEntityLists function
	
}





