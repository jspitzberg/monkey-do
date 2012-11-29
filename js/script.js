/* Author: 
Jeremy spitzberg
*/

/* red food */
$("#red-food-modal > .modal-body > p").click(function () {
	incrementCounter();
	$("#red > div").css('background-image','url(img/bullseye-red.png)');
	var t = setTimeout("$('#red > div').css('background-image','url(img/fiveaday/red.png)')",1200);
	$("#food-list-chooser").addClass("close");
});

/* water */
$("#water").click(function () {
	incrementCounter();
	$("#water > div").css('background-image','url(img/bullseye-blue.png)');
	var t = setTimeout("$('#water > div').css('background-image','url(img/fiveaday/water.png)')",1200);
	return false;
});

/* soccer */
$("#soccer-modal > .modal-body > p").click(function () {
	incrementCounter(15);
	$("#red > div").css('background-image','url(img/bullseye-red.png)');
	var t = setTimeout("$('#red > div').css('background-image','url(img/move/soccer.png)')",1200);
	$("#move-list-chooser").addClass("close");
});

/* yoga */
$("#yoga").click(function () {
	/*eraseCookie('counter');*/
	incrementCounter();
	$("#yoga > div").css('background-image','url(img/bullseye-blue.png)');
	var t = setTimeout("$('#yoga > div').css('background-image','url(img/move/yoga.png)')",1200);
	return false;
});

function incrementCounter(inc) {
	if (inc == undefined) {inc = 5;}
	var points = $("h1#counter").text();
	points = (parseInt($("h1#counter").text())+inc);
	$("h1#counter").text(points);
	createCookie('counter',points,30)
}

/* initialize counter */
$(document).ready(function() {
	if (readCookie('counter') == null) {
		createCookie('counter',20,30)
		$("#counter").text(20);
	}
	else {
		$("#counter").text(readCookie('counter'));
	}
});