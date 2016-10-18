var spaceify = require("/api/spaceifyapplication.js");

function ExampleSpacelet1()
{
var self = this;

var exampleSpacelet1UniqueName = "example/spacelet1";

var exampleSpacelet1Service = null;
var exampleSpacelet1ServiceName = "spaceify.org/services/example/spacelet1";

self.start = function()
	{ // The spacelet is now up and running
	exampleSpacelet1Service = spaceify.getProvidedService(exampleSpacelet1ServiceName);
	exampleSpacelet1Service.exposeRpcMethod("sayHello", self, sayHello);
	}

self.fail = function()
	{ // Failed to start the spacelet
	}

var sayHello = function(name)
	{
	var date = new Date();
	return "Hello, " + name + ". I am " + exampleSpacelet1UniqueName + 
                ". My date and time is now " + date.toUTCString() + ".";
	}
}

var exampleSpacelet1 = new ExampleSpacelet1();

spaceify.start(exampleSpacelet1);