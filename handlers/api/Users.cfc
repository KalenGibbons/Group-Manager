component  extends="APIEntityHandler" displayname="Users Handler" hint="Handles all user based API calls"{
			
	property name="userService" 	inject="model:services.UserService";
	
	public void function preHandler(event, action, eventArguments){
		super.preHandler(argumentCollection=arguments);
		var rc = event.getCollection();
		// override the event - TODO : this is only temporary until REST services are setup; it delegates to the appropriate method based on HTTP verb
		var eventName =	"";
		switch(GetHttpRequestData().method){
			case "POST":	
			case "PUT":		eventName =		"api.users.saveEntity"; 
							rc.postData =	super.getJSONDataFromHTTP();
							break;
			case "DELETE": 	eventName =		"api.users.deleteEntity"; 
							break;
			case "GET":		
			default:		eventName =		"api.users.getEntities"; 
							break;
		}
		event.overrideEvent(eventName);
	} // end preHandler function		
			
	public void function injectionHandler() onDiComplete{
		entityService =		userService;
	} // end injectionHandler function
			
	public any function index(event, action, eventArguments){
		// NOTE: This method is overridden in the preHandler function
	} // end index function
			
}