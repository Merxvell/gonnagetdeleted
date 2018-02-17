/*
*onloadstart: when the request starts
*onprogress: while loading and sending data
*onabort: when the request has been aborted. for instance, by invoking the abort() method.
*onerror: when the request has failed
*onload: when the request has successfully completed
*ontimeout: when the author specified timeout has passed before the request could complete
*onloadend: when the request has completed (either in success or failure)
*/

xhr.onload = function(){
	var responseText = xhr.responseText;
	console.log(responseText);
	//process the response
};

xhr.onerror = function(){
	console.log('There was an error!');
};
