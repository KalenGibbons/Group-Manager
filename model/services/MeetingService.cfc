component  extends="BaseEntityService" displayname="Meeting Service" hint="Service that handles all meeting related tasks" singleton{
	
	public MeetingService function init(){
		super.init(entityName="Meeting");
		return this;
	}// end init function
	
	/* Override the base populate method */
	any function populate(required any target,
						   required struct memento,
						   string scope="",
					 	   boolean trustedSetter=false,
						   string include="",
						   string exclude="",
						   boolean ignoreEmpty=false){
		
		// first convert plain structs relationships into entities
		arguments.memento.raffles =		populateEntities(arguments.memento.raffles, 'Raffle');
		arguments.memento.attendees =	populateEntities(arguments.memento.attendees, 'Person');
		arguments.memento.presenters =	populateEntities(arguments.memento.presenters, 'Person');
					   	   
		return beanPopulator.populateFromStruct(argumentCollection=arguments);
	}// end populate override function
	
	/* Takes a plain array of structs and does the lookup to get the correct entity representation */
	private array function populateEntities(required array structEntities, required string entityName){
		var populatedArray =	[];
		var numEntities =		arrayLen(arguments.structEntities);
		var entity =			"";
		for(var i = 1; i <= numEntities; i++){
			entity =	entityLoadByPK(arguments.entityName, arguments.structEntities[i].id);
			if(NOT isNull(entity)){
				arrayAppend(populatedArray, entity);
			}
		}
		return populatedArray;
	}// end populateEntities function
}