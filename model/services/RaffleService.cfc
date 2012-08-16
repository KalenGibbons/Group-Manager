component  extends="BaseEntityService" displayname="Raffle Service" hint="Service that handles all raffle related tasks" singleton{
	
	public RaffleService function init(){
		super.init(entityName="Raffle");
		return this;
	}// end init function

}