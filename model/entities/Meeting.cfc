component  extends="BaseEntity" persistent="true" accessors="true" displayname="Meeting" entityname="Meeting" table="Meetings" hint="Meeting object" output="false"{
	
	/* *********************************************************************
	**							PROPERTIES									
	********************************************************************* */
			
	/*					
	property name="prize"		column="prize"
								type="string"
								notnull="true";
								
	property name="winner"		column="nameOfWinner"
								type="string";
	*/
								
	/* *********************************************************************
	**						PUBLIC FUNCTIONS								
	********************************************************************* */
	
	public Raffle function init(){
		super.init();
		return this;
	}// end init function
	
	public struct function getEntityData(){
		return {"id" = 			variables.id, 
				"created" = 	variables.created,
				"modified" = 	variables.modified};
	}// end getEntityData function
	
}