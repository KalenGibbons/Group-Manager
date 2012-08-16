component  extends="BaseEntity" persistent="true" accessors="true" displayname="Raffle" entityname="Raffle" table="Raffles" hint="Raffle object" output="false"{
	
	/* *********************************************************************
	**							PROPERTIES									
	********************************************************************* */
								
	property name="prize"		column="prize"
								type="string"
								notnull="true";
								
	property name="winner"		column="nameOfWinner"
								type="string";
								
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
				"modified" = 	variables.modified,
				"prize" = 		variables.prize, 
				"winner" = 		structKeyExists(variables, 'winner') ? variables.winner : ''};
	}// end getEntityData function
	
}