component extends="BaseBean" displayname="Remote Result bean" hint="Contains the common result data for all remote calls"{

	/*  
		Statuses
		------------------
		RESULT_OKAY = 		0;
		NO_RESULTS = 		2;
		REQUIRES_LOGIN =	8;
		GENERAL_ERROR = 	9;
		INVALID_PARAMS =	10;
	*/

	public RemoteResult function init(){
		super.init();
		// set defaults
		setStatus(0);
		setMessage('');
		setData( structNew() );
		return this;
	}// end init function
	
	/* *****************************************************
	**				GETTERS AND SETTERS						
	***************************************************** */
	
	public numeric function getStatus(){
		return instance.status;
	}// end getStatus function
	
	public void function setStatus(required numeric value){
		instance.status = value;
	}// end setStatus function
	
	public string function getMessage(){
		return instance.message;
	}// end getMessage function
	
	public void function setMessage(required string value){
		instance.message = value;
	}// end setMessage function
	
	public any function getData(){
		return instance.data;
	}// end getData function
	
	public void function setData(required any value){
		instance.data = value;
	}// end setData function

}