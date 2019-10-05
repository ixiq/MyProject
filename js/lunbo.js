var ul = document.querySelector(".banner_lunbo");
var li = document.querySelectorAll(".banner_lunbo li");
var playBg = document.getElementById("picturePlay");

var index = 0;
var timer;

playBg.style.background = "rgb(39,21,59)";
var ol_li = document.querySelectorAll(".curren li");
ol_li[0].style.background = "#9966CC";

function autoplay() {

	timer = setInterval(function () {
		index++;

		if (index >= li.length) {
			index = 0;
		}

		ul.style.left = -index * 100 + "%";
		changeBgColor(index);

		for (var i = 0; i < ol_li.length; i++) {
			ol_li[i].style.background = "rgb(172,171,175)";
			if (i == index) {
				ol_li[i].style.background = "#9966CC";
			}
		}

	}, 2000)
}

function changeBgColor(index) {
	switch (index) {
		case 0:
			playBg.style.background = "rgb(39,21,59)";
			break;
		case 1:
			playBg.style.backgroundColor = "rgb(249,205,241)";
			break;
		case 2:
			playBg.style.backgroundColor = "#000000";
			break;
		case 3:
			playBg.style.backgroundColor = "#FFFFFF";
			break;
		case 4:
			playBg.style.backgroundColor = "rgb(191,209,255)";
			break;
	}
}

autoplay();

$(".glyphicon-menu-left").click(function () {
	index--;
	if (index < 0) {
		index = li.length - 1;
	}
	clearInterval(timer);
	ul.style.left = -index * 100 + "%";
	$(this).siblings("li").css("background", "rgb(172,171,175)");
	for (var i = 0; i < ol_li.length; i++) {
		ol_li[i].style.background = "rgb(172,171,175)";
		if (i == index) {
			ol_li[i].style.background = "#9966CC";
		}
	}
	autoplay();
	changeBgColor(index);
})

$(".glyphicon-menu-right").click(function () {
	index++;
	if (index >= li.length) {
		index = 0;
	}
	clearInterval(timer);
	ul.style.left = -index * 100 + "%";
	$(this).siblings("li").css("background", "rgb(172,171,175)");
	for (var i = 0; i < ol_li.length; i++) {
		ol_li[i].style.background = "rgb(172,171,175)";
		if (i == index) {
			ol_li[i].style.background = "#9966CC";
		}
	}
	autoplay();
	changeBgColor(index);
})

$(".curren li").mouseenter(function () {
	clearInterval(timer);
	index = $(this).attr("class") - 1;
	ul.style.left = -index * 100 + "%";
	$(this).siblings().css("background", "rgb(172,171,175)");
	$(this).css("background", "#9966CC");
	changeBgColor(index);
})

$(".curren li").mouseleave(function () {
	autoplay();
	changeBgColor(index);
})