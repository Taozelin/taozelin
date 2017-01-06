function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}else {
		window.onload = function () {
			oldonload();
			func();   
		}
	}
}

function prepareEvent() {
	var list = document.getElementById("list");
	var alist = list.getElementsByTagName("a");
	for (var i = 0; i < alist.length; i++) {
		alist[i].onclick = function() {
            showPic(this);
            return false;
	    }
	}
}

function showPic(whichpic) {
	var ahref = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",ahref);
	var atitle = whichpic.getAttribute("title");
	var text = document.getElementById("text");
	text.firstChild.nodeValue = atitle;
}

addLoadEvent(prepareEvent);
