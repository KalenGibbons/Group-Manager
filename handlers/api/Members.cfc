component  extends="APIEntityHandler" displayname="Members Handler" hint="Handles all member based API calls"{
			
	property name="memberService" 	inject="model:services.MemberService";
	
	public void function preHandler(event, action, eventArguments){
		super.preHandler(argumentCollection=arguments);
		var rc = event.getCollection();
		// override the event - TODO : this is only temporary until REST services are setup; it delegates to the appropriate method based on HTTP verb
		var eventName =	"";
		switch(GetHttpRequestData().method){
			case "POST":	
			case "PUT":		eventName =		"api.members.saveEntity"; 
							rc.postData =	super.getJSONDataFromHTTP();
							break;
			case "DELETE": 	eventName =		"api.members.deleteEntity"; 
							break;
			case "GET":		
			default:		eventName =		"api.members.getEntities"; 
							break;
		}
		event.overrideEvent(eventName);
	} // end preHandler function		
			
	public void function injectionHandler() onDiComplete{
		entityService =		memberService;
	} // end injectionHandler function
			
	public any function index(event, action, eventArguments){
		// NOTE: This method is overridden in the preHandler function
	} // end index function
			
}