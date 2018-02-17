var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.youtube.com/watch?v=41tIUr_ex3g");
//although we can get the remote data directly into an arraybuffer using the string "arraybuffer
//assigned to repsonseType property. For the sake of example we are putting it into a blob then
//copying the blob data into an arraybuffer.
xhr.reponseType = "blob";

function analyze_data(blob){
	var myReader = new FileReader();
	myReader.readAsArrayBuffer(blob);
	
	myReader.addEventListener("loadend", function(e){
		var buffer = e.srcElement.result; //arraybuffer object
	});
}

xhr.onload = function(){
	analyze_data(xhr.reponse);
}

xhr.send();
	
