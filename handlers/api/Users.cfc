component  extends="BaseAPIHandler" displayname="Users Handler" hint="Handles all user based API calls"{
			
	public query function getUsers(){
	
		rc.results.getData().method = "getUsers";	
		
	} // end getUsers function
	
	public query function getUser(){
	
		rc.results.getData().method = "getUser";	
		
	} // end getUser function
	
	public query function createUser(){
		
		rc.results.getData().method = "createUser";	
		
	} // end createUser function
	
	public query function updateUser(){
		
		rc.results.getData().method = "updateUser";	
		
	} // end updateUser function
			
}