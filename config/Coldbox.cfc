component output="false" hint="Application Configuration"{
			
	// Configure ColdBox Application
	function configure(){
	
		// ColdBox directives
		coldbox = {
			// Application Setup
			appName 				= "Group Manager",
	
			// Development Settings
			debugMode				= true,
			debugPassword			= "",
			reinitPassword			= "",
			handlersIndexAutoReload = true,
	
			// Implicit Events
			defaultEvent			= "general.index",
			requestStartHandler		= "",
			requestEndHandler		= "",
			applicationStartHandler = "",
			applicationEndHandler	= "",
			sessionStartHandler 	= "",
			sessionEndHandler		= "",
			missingTemplateHandler	= "",
	
			// Error/Exception Handling
			exceptionHandler		= "",
			onInvalidEvent			= "",
			customErrorTemplate		= "",
	
			// Application Aspects
			handlerCaching 			= false,
			eventCaching			= false
		};
	
		// Layout Settings
		layoutSettings = {
			defaultLayout = 		"Layout.Main.cfm"
		};
	
		// Register interceptors as an array, we need order
		interceptors = [
			// SES
			/*
			{class = 				"coldbox.system.interceptors.SES",
			 properties	= 			{}
			}
			*/
		];
	
	}

}