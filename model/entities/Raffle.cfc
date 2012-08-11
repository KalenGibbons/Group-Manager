component  extends="BaseEntity" persistent="true" accessors="true" displayname="Raffle" entityname="Raffle" table="Raffles" hint="Raffle object" output="false"{
	
	/* *********************************************************************
	**							PROPERTIES									
	********************************************************************* */
								
	property name="prize"		column="prize"
								type="string"
								notnull="true";
								
	/* *********************************************************************
	**						PUBLIC FUNCTIONS								
	********************************************************************* */
	
	public Raffle function init(){
		super.init();
		return this;
	}// end init function
	
}