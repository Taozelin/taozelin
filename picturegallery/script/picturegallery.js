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

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function preparePlaceholder() {
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","image/no.jpg");
	placeholder.setAttribute("alt","This is a blank area.");
	var description = document.createElement("p");
	description.setAttribute("id","text");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	var gallery = document.getElementById("list");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
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
addLoadEvent(preparePlaceholder);
