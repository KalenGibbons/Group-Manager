component 	extends="BaseAPIHandler" displayname="API Entity Handler" 
			hint="Provides core functionality for all API handlers that will perform CRUD operations on entities"{
				
	property name="entityService"	type="coldbox.system.orm.hibernate.VirtualEntityService";
	
	
	public void function getEntities(event, action, eventArguments){
		var entities =				entityLoad( entityService.getEntityName() );
		var serializedEntities =	[];
		
		// loop through the entities and do custom serialization
		for(var i = 1; i <= arrayLen(entities); i++){
			arrayAppend(serializedEntities, entities[i].getEntityData());
		}
		rc.results.setData(serializedEntities);
	} // end getEntities function
	
	public void function saveEntity(event, action, eventArguments){
		var rc =			event.getCollection();
		var entityID =		structKeyExists(rc.postData, 'id') ? rc.postData.id : 0;
		var editEntity =	entityService.get(entityID);

		// populate and save the entity
		entityService.populate(editEntity, rc.postData);
		entityService.save(entity=editEntity, flush=true);
		
		// reload all entities
		rc.results.setData( entityLoad( entityService.getEntityName() ) );
	} // end saveEntity function
	
	public void function deleteEntity(event, action, eventArguments){
		var rc =			event.getCollection();
		var entityID =		event.getValue('id', 0);
		
		// TODO : Add validation and authentication before deleting anything
		if(entityID != 0){
			entityService.deleteByID(id=entityID, flush=true);
		}
		
		// reload all entities
		rc.results.setData( entityLoad( entityService.getEntityName() ) );
	}// end deleteEntity function
	
				
}