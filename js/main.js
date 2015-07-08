var file = require('file.js');

function clickInput(id) {
	var event = document.createEvent('MouseEvents');
	event.initMouseEvent('click');
	document.getElementById(id).dispatchEvent(event);
}

document.addEventListener('keyup', function (e) {
	if (e.keyCode == 'O'.charCodeAt(0) && e.ctrlKey) {
		clickInput('open');
	} else if (e.keyCode == 'S'.charCodeAt(0) && e.ctrlKey) {
		clickInput('save');
	}
});

//if(document.getElementById('open')){
document.getElementById('open').addEventListener('change', function (e) {
    
	file.open(this.value, document);
    //console.log("I run");
});
//}

if(document.getElementById('save')){
document.getElementById('save').addEventListener('change', function (e) {
	file.save(this.value, document);
});
}