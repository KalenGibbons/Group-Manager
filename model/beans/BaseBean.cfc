component  displayname="Base Bean"{

	property name="instance" type="struct";
	
	public BaseBean function init(){
		instance = structNew();		
		return this;
	}// end init function
	
	/* *****************************************************
	**				GETTERS AND SETTERS						
	***************************************************** */
	
	public struct function getMemento(){
		return instance;
	}// end getMemento function
	
	public void function setMemento(required struct value){
		instance = value;
	}// end setMemento function

}