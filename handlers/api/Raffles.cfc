﻿component  extends="APIEntityHandler" displayname="Raffles Handler" hint="Handles all raffle based API calls"{
			
	property name="raffleService" 	inject="model:services.RaffleService";		
	
	public void function preHandler(event, action, eventArguments){
		super.preHandler(argumentCollection=arguments);
		var rc = event.getCollection();
		// override the event - TODO : this is only temporary until REST services are setup; it delegates to the appropriate method based on HTTP verb
		var eventName =	"";
		switch(GetHttpRequestData().method){
			case "POST":	
			case "PUT":		eventName =		"api.raffles.saveEntity"; 
							rc.postData =	super.getJSONDataFromHTTP();
							break;
			case "DELETE": 	eventName =		"api.raffles.deleteEntity"; 
							break;
			case "GET":		
			default:		eventName =		"api.raffles.getEntities"; 
							break;
		}
		event.overrideEvent(eventName);
	} // end preHandler function
	
	public void function injectionHandler() onDiComplete{
		entityService =		raffleService;
	} // end injectionHandler function
			
	public any function index(event, action, eventArguments){
		// NOTE: This method is overridden in the preHandler function
	} // end index function
			
}