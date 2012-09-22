component  extends="BaseEntityService" displayname="Member Service" hint="Service that handles all member related tasks" singleton{
	
	public MemberService function init(){
		super.init(entityName="Person");
		return this;
	}// end init function

}