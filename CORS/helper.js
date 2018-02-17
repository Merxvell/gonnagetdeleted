/*
*ORIGINAL CODE WRITTEN BY NICHOLAS ZAKAS
*https://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/
*/


function createCORSRequest(method, url){
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr){
	//check if the XMLHttpRequest object has a "withCredentials" property
	//"withCredentials only exists on XMLHTTPRequest2 objects
	xhr.open(method,url,true);
	
	} else if (typeof XDomainRequest != "undefined"){
		//otherwise check if XDomainRequest.
		//XDomainRequest only exists in IE, and is IE's way of makig CORs requests.
		xhr = new XDomainRequest();
		xhr.open(method, url);

	} else {
		//otherwise, CORS is not supported by the browser
		xhr = null;

	}

	return xhr;
}

var xhr = createCORSRequest("GET", url);
if(!xhr){
	throw new Error("CORS not supported");
}

