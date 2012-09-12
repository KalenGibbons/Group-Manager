component  extends="BaseEntityService" displayname="User Service" hint="Service that handles all user related tasks" singleton{
	
	public UserService function init(){
		super.init(entityName="Person");
		return this;
	}// end init function

}