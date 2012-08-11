component extends="coldbox.system.Coldbox"{

	// Application CFC Properties
	this.name = 						"GroupManager" & hash( getCurrentTemplatePath() );
	this.sessionManagement = 			true;
	this.sessionTimeout = 				createTimeSpan(0, 8, 0, 0); // 8 hours
	this.setClientCookies = 			true;
	this.mappings["/GroupManager"]=		getDirectoryFromPath( getCurrentTemplatePath() );
	
	// ColdBox Settings
	COLDBOX_APP_ROOT_PATH = 			getDirectoryFromPath( getCurrentTemplatePath() );
	COLDBOX_APP_MAPPING   = 			"";
	COLDBOX_CONFIG_FILE   = 			"";
	COLDBOX_APP_KEY 	  = 			"";
	
	// ORM Settings
	this.ormEnabled 	  = 			true;
	this.datasource		  = 			"groupManager";
	this.ormSettings	  = {
		cfcLocation =					"model",
		dialect 	= 					"MySQL",
		dbcreate =						"update",
		/*
		dbcreate 	= 					"none",
		dbcreate 	= 					"dropcreate",
		sqlscript =						"setupScript.sql",
		*/
		cfclocation = 					"model/entities/",
		logSQL 		= 					true,
		flushAtRequestEnd = 			false,
		autoManageSession =				false
		/*
		eventHandling =					true,
		eventHandler =					"model.handlers.ORMEventHandler"
		*/
	};

	public boolean function onApplicationStart(){
		loadColdBox();
		return true;
	}// end onApplicationStart function
	
	public boolean function onRequestStart(targetPage){
	
		// ORM Reload Check
		if( structKeyExists(url,"ormReinit") ){
			ORMReload();
		}
		
		// Reload ColdBox?
		reloadChecks();
		
		// process a coldbox request only
		if( findNoCase('index.cfm', listLast(arguments.targetPage, '/')) ){
			processColdBoxRequest();
		}
		
		return true;			
	}// end onRequestStart function
	
	public function onError(required any exception, required string eventName){
		// TODO : Do global error handling here (last call after ColdBox handling fails)
		writeDump(arguments); abort;
	}// end onError function
	
}