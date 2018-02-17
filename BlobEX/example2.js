window.URL = window.URL || window.webkitURL;

var blob = new Blob(['body { background-color: blue; }'], {type: 'text/css'});

var link = document.createElement('link');
link.rel = 'stylesheet';
//createObjectURL returns a blob URL as a string.
link.href = window.URL.createObjectURL(blob);
document.body.appendChild(link);
