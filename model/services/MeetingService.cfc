component  extends="BaseEntityService" displayname="Meeting Service" hint="Service that handles all meeting related tasks" singleton{
	
	public MeetingService function init(){
		super.init(entityName="Meeting");
		return this;
	}// end init function

}