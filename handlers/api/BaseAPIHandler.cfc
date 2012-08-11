component  displayname="Base API Handler" hint="Provides base functionality for all API handlers"{

	// constants
	instance.JSON =		"JSON";
	instance.XML =		"XML";
	instance.DUMP =		"DUMP";
	
	// TODO : wire in default result format from config
	// TODO : wire in user for security checks and such
	
	public void function preHandler(event, action, eventArguments){
		// create result object to be populated with results data
		event.getCollection().results = getModel('beans.RemoteResult');
	} // end preHandler function
	
	public RemoteResults function onError(event, faultAction, exception, eventArguments){
		writeDump(arguments); abort;
		
	} // end onError function
	
	public void function postHandler(event, action, eventArguments){
		/*
		var user =			super.getUser();
		var dumpResults =	event.getValue('dump', false);
		// check to see if the user wants to dump the results (for testing)
		if(dumpResults eq true && user.getIsLoggedIn() && user.hasPermission("troubleshooter")){
			writeDump(event.getCollection().results.getMemento()); abort;
		}
		// TODO : temporary dump
		writeDump(event.getCollection().results.getMemento()); abort;
		*/
		var results =	event.getCollection().results;
		if(results.getStatus() eq 0){
			// for this API only return the data
			// TODO : make output type dynamic
			event.renderData(type='json', data=results.getData());
		}else{
			// TODO : send back error status so error method is called on jquery AJAX request
		}
	} // end postHandler function
	
	
	/*
	
	public void function preHandler(event, action, eventArguments){
		event.getCollection().results = getModel('beans.RemoteResult');
	}// end preHandler function
	
	public RemoteResult function onError(event, faultAction, exception, eventArguments){
		// set error values to be returned
		var rc = 	event.getCollection();
		var user =	super.getUser();
		rc.results.setStatus(9);
		rc.results.setMessage(exception.message);		
		rc.results.setData(exception.tagContext);

		// log the error
		announceInterception("logError", {	error = 	arguments.exception, 
											message = 	"Handler Error: " & arguments.faultAction, 
											info = 		arguments.eventArguments}
		);

		var dumpResults =	event.getValue('dump', false);
		// check to see if the user wants to dump the results (for testing)
		if(dumpResults eq true AND user.hasPermission("troubleshooter")){
			writeDump(event.getCollection().results.getMemento()); abort;
		}

		return rc.results;
	}// end onError function
	
	public void function postHandler(event, action, eventArguments){
		var user =			super.getUser();
		var dumpResults =	event.getValue('dump', false);
		// check to see if the user wants to dump the results (for testing)
		if(dumpResults eq true && user.getIsLoggedIn() && user.hasPermission("troubleshooter")){
			writeDump(event.getCollection().results.getMemento()); abort;
		}
	}// end preHandler function
	*/
			
			
}