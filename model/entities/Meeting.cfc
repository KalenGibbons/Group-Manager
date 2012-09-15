component  extends="BaseEntity" persistent="true" accessors="true" displayname="Meeting" entityname="Meeting" table="Meetings" hint="Meeting object" output="false"{
	
	/* *********************************************************************
	**							PROPERTIES									
	********************************************************************* */
		
	property name="topic"		column="topic"
								type="string"
								notnull="false";	
								
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
				"topic" =		variables.topic};
	}// end getEntityData function
	
}