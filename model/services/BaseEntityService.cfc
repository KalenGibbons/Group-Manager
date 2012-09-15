component 	extends="coldbox.system.orm.hibernate.VirtualEntityService"
			displayname="Base Entity Service" 
			hint="A base service for all entity services"
			singleton{
				
	public BaseEntityService function init(required string entityName){
		// init it
		super.init(entityName=arguments.entityName);
		return this;
	}// end init function

}