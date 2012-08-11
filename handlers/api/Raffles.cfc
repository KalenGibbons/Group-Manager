component  extends="BaseAPIHandler" displayname="Raffles Handler" hint="Handles all raffle based API calls"{
			
	public void function preHandler(event, action, eventArguments){
		super.preHandler(argumentCollection=arguments);
		// override the event - TODO : this is only temporary until REST services are setup; it delegates to the appropriate method based on HTTP verb
		var eventName =	"";
		switch(GetHttpRequestData().method){
			case "POST":	eventName =	"api.raffles.createRaffle"; break;
			case "PUT":		eventName =	"api.raffles.getRaffle"; break;
			case "DELETE": 	eventName =	"api.raffles.getRaffle"; break;
			case "GET":		
			default:		eventName =	"api.raffles.getRaffle"; break;
		}
		event.overrideEvent(eventName);
	} // end preHandler function	
			
	public any function index(event, action, eventArguments){
		// TODO : this method is overridden in the preHandler function
	}		
			
	public query function getRaffles(event, action, eventArguments){
	
		rc.results.getData().method = "getRaffles";	
		
	} // end getRaffles function
	
	public void function getRaffle(){
		/*
		var test = entityNew('Raffle');
		test.setPrize('ColdBox book');
		entitySave(test);
		ormFlush();
		*/
		rc.results.setData( entityLoad('Raffle') );	
	} // end getRaffle function
	
	public void function createRaffle(event, action, eventArguments){
		//var raffle =	deserializeJSON(jsonvar)
		//rc.results.getData().method = "createRaffle";	
		//$dump(rc.prize, true);
		// TODO : figure out how to get the JSON POST data
		rc.results.setData( rc.prize );
		
	} // end createRaffle function
	
	public void function updateRaffle(event, action, eventArguments){
		
		rc.results.getData().method = "updateRaffle";	
		
	} // end updateRaffle function
			
}