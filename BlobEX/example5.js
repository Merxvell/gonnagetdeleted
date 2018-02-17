var element = document.getElementsByTagName("body")[0];

//files is a filelist
function fileselected(files){
	for(var i = 0; i < files.length; i++){
		var f = files[i];
		element.innerHTML = element.innerHTML + f.name + " " + f.size + " " + f.type;
	}
}
