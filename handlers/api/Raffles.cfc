component  extends="BaseAPIHandler" displayname="Raffles Handler" hint="Handles all raffle based API calls"{
			
	property name="raffleService" 	inject="model:services.RaffleService";		
			
	public void function preHandler(event, action, eventArguments){
		super.preHandler(argumentCollection=arguments);
		var rc = event.getCollection();
		// override the event - TODO : this is only temporary until REST services are setup; it delegates to the appropriate method based on HTTP verb
		var eventName =	"";
		switch(GetHttpRequestData().method){
			case "POST":	
			case "PUT":		eventName =		"api.raffles.saveRaffle"; 
							rc.postData =	super.getJSONDataFromHTTP();
							break;
			case "DELETE": 	eventName =		"api.raffles.deleteRaffle"; 
							rc.postData =	super.getJSONDataFromHTTP();
							break;
			case "GET":		
			default:		eventName =		"api.raffles.getRaffles"; 
							break;
		}
		event.overrideEvent(eventName);
	} // end preHandler function	
			
	public any function index(event, action, eventArguments){
		// TODO : this method is overridden in the preHandler function
	} // end index function
			
	public void function getRaffles(event, action, eventArguments){
		var raffleEntities =	entityLoad('Raffle');
		var raffles =			[];
		// loop through entities for custom serialization
		for(var i = 1; i <= arrayLen(raffleEntities); i++){
			arrayAppend(raffles, raffleEntities[i].getEntityData());
		}
		rc.results.setData(raffles);	
	} // end getRaffles function
	
	public void function getRaffle(){
		rc.results.setData( entityLoad('Raffle') );	
	} // end getRaffle function
	
	public void function saveRaffle(event, action, eventArguments){
		var rc =			event.getCollection();
		var raffleID =		structKeyExists(rc.postData, 'id') ? rc.postData.id : 0;
		var editRaffle =	raffleService.get(raffleID);
		raffleService.populate(editRaffle, rc.postData);
		raffleService.save(entity=editRaffle, flush=true);
		// reload all raffles
		rc.results.setData( entityLoad('Raffle') );	
	} // end saveRaffle function
	
	public void function deleteRaffle(event, action, eventArguments){
		var rc =			event.getCollection();
		var raffleID =		structKeyExists(rc.postData, 'id') ? rc.postData.id : 0;
		var editRaffle =	raffleService.deleteByID(raffleID);
		// reload all raffles
		rc.results.setData( entityLoad('Raffle') );
	}// end deleteRaffle function
	
	/*
	public void function updateRaffle(event, action, eventArguments){
		var rc =			event.getCollection();
		var updatedRaffle =	raffleService.get(rc.postData.id);
		raffleService.populate(updatedRaffle, rc.postData);
		raffleService.save(entity=updatedRaffle, flush=true);
		// reload all raffles
		rc.results.setData( entityLoad('Raffle') );	
	} // end updateRaffle function
	*/
			
}