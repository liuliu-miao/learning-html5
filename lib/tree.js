//version: 1.0
make_click=function(i, contents, switches) {
	function fun() {
		if (contents[i].style.display == "none") {
		    contents[i].style.display = "block";
		    switches[i].classList.add("rotate");
		}
		else {
		    contents[i].style.display = "none";
		    switches[i].classList.remove("rotate");
		}
	}
	return fun;
}

tree=function(container, content_selector, switch_selector) {
    var contents = container.querySelectorAll(content_selector);
    var switches = container.querySelectorAll(switch_selector);
    for (var i = 0; i < contents.length; ++i) {
        contents[i].style.display = "none";
        switches[i].onclick = make_click(i, contents, switches);
    }
}