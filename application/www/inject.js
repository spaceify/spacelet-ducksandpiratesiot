var exampleSpacelet1 = null;

	// EVENTS -- -- -- -- -- -- -- -- -- -- //
window.addEventListener("spaceifyReady", function()
	{ // EVENT IS FIRED WHEN SPACEIFY/INJECTION IS READY!
	exampleSpacelet1 = new ExampleSpacelet1();
	});

	// SPACELET -- -- -- -- -- -- -- -- -- -- //
function ExampleSpacelet1()
{
var self = this;

var exampleSpacelet1UniqueName = "example/spacelet1";

var exampleSpacelet1Service = null;
var exampleSpacelet1ServiceName = "spaceify.org/services/example/spacelet1";

var spacelet = new Spacelet();						// Start the spacelet
spacelet.start(self, exampleSpacelet1UniqueName);

self.start = function()
	{ // The spacelet is now started
	exampleSpacelet1Service = spacelet.getRequiredService(exampleSpacelet1ServiceName);
	exampleSpacelet1Service.callRpc("sayHello", ["Web Page"], self, hello);
	}

self.fail = function()
	{ // Failed to start the spacelet, try to start it again
	window.setTimeout(spacelet.start, 10000, self, exampleSpacelet1UniqueName);
	}
	
var hello = function(err, response)
	{
	var newDiv = document.createElement("DIV");
	newDiv.appendChild(document.createTextNode(err ? err.message : response));
	document.body.appendChild(newDiv);
	}

}