component  extends="BaseEntity" persistent="true" accessors="true" displayname="Person" entityname="Person" table="People" hint="Person object" output="false"{
	
	/* *********************************************************************
	**							PROPERTIES									
	********************************************************************* */
								
	property name="firstName"	column="firstName"
								type="string"
								notnull="true";
								
	property name="lastName"	column="lastName"
								type="string"
								notnull="true";
								
	property name="email"		column="email"
								type="string" 
								notnull="true";
								/*unique="true"*/
								
	property name="phone"		column="phone"
								type="string"
								notnull="false";
								
	/* *********************************************************************
	**						PUBLIC FUNCTIONS								
	********************************************************************* */
	
	public Person function init(){
		super.init();
		return this;
	}// end init function
	
}