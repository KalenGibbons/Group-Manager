component  extends="BaseAPIHandler" displayname="Users Handler" hint="Handles all user based API calls"{
			
	public void function preHandler(event, action, eventArguments){
		super.preHandler(argumentCollection=arguments);
		// override the event - TODO : this is only temporary until REST services are setup; it delegates to the appropriate method based on HTTP verb
		var eventName =	"";
		switch(GetHttpRequestData().method){
			case "POST":	eventName =	"api.users.getUser"; break;
			case "PUT":		eventName =	"api.users.getUser"; break;
			case "DELETE": 	eventName =	"api.users.getUser"; break;
			case "GET":		
			default:		eventName =	"api.users.getUser"; break;
		}
		event.overrideEvent(eventName);
	} // end preHandler function	
			
	public any function index(){
		// TODO : this method is overridden in the preHandler function
	}		
			
	public query function getUsers(){
	
		rc.results.getData().method = "getUsers";	
		
	} // end getUsers function
	
	public void function getUser(){
		/*
		var kalen = entityNew('Person');
		kalen.setFirstname('kalen');
		kalen.setLastName('Gibbons');
		kalen.setEmail('kgibbons@esri.com');
		kalen.setPhone('999-888-7777');
		entitySave(kalen);
		ormFlush();
		*/
	
		rc.results.setData( entityLoad('Person') );	
	} // end getUser function
	
	public void function createUser(){
		
		rc.results.getData().method = "createUser";	
		
	} // end createUser function
	
	public void function updateUser(){
		
		rc.results.getData().method = "updateUser";	
		
	} // end updateUser function
			
}