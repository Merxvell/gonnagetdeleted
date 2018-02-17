//Creating a blob
//first arguement must be a regular array. the array can be of ANY javascript objects. Array can contain array to make it multi dimensional
//second parameter must be a BlogPropertyBag object containging MIME property

var myBlob = new Blob(["This is my blob content"], {type: "text/plain"});
var myReader = new FileReader(); //you can read data from a blob using FileReader class 

myReader.addEventListener("loadend", function(e){
	document.getElementById("paragraph").innerHTML = e.srcElement.result; //prints this is my blob content
});

//start the reading process.

myReader.readAsText(myBlob);

