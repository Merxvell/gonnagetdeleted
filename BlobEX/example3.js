//remote data as blobs
//can retrieve remote files using AJAX and store the file data inside a blob.
//AJAX API provides us a method to download and store remote files in form of blobs

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.youtube.com/watch?v=41tIUr_ex3g");
xhr.responseType = "blob"; //force the HTTP response, response-type header to be blob
xhr.onload = function(){
	document.getElementsByTagName("body")[0].innerHTML = xhr.response; //xhr.response is now a blob object
}
xhr.send();
