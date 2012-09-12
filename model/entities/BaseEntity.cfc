component displayname="Base Entity" mappedsuperclass="true" accessors="true" hint="This is the base class for all persistent entities" output="false"{

	/* *********************************************************************
	**							PROPERTIES									
	********************************************************************* */

	property name="id" 			column="id"
								type="numeric"
								ormtype="integer" 
								fieldType="id"
								generator="native";
								
	property name="created" 	column="dateCreated" 
								type="date"
								ormtype="timestamp"
								notnull="true";
								
	property name="modified"	column="dateModified"
								type="date"
								ormtype="timestamp"
								notnull="true";
											
	/* Internal instance variable for storing private properties */							
	property name="instance"	persistent="false"
								type="struct";
	
	/* *********************************************************************
	**						PUBLIC FUNCTIONS								
	********************************************************************* */
	
	public void function setID(required numeric value){
		// ignore potential null ids sent in from Flex
		if(value neq 0){
			variables.id = value;
		}
	}// end setID function
	
	public BaseEntity function init(){
		// create instance
		instance = structNew();
		// set the create date and modified date to now, on account creation
		var now = now();
		setCreated(now);
		setModified(now);
		
		return this;
	}// end init function
	
	public struct function getMemento(){
		return instance;
	}// end getMemento function
	
	public void function setMemento(required struct memento){
		instance = arguments.memento;
	}// end setMemento function
	
	public boolean function getIsPersisted(){
		return (isNull(variables.id) ? false : true);
	}// end getIsPersisted function
	
}