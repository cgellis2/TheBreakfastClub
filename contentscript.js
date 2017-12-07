var div2 = document.createElement("div");
div2.id = "circle";
div2.style.background = "gray";

var div = document.createElement("img");
div.id = "icon"; // set id to icon

div.src = 'http://www.free-icons-download.net/images/hot-coffee-icon-74753.png';
document.body.appendChild(div);
document.body.appendChild(div2);

var div3 = document.createElement("img");
div3.id = "gmail";
div3.src = 'https://www.shareicon.net/data/256x256/2016/07/08/117682_mail_512x512.png';
div3.style.display = "none";
document.body.appendChild(div3);

var div4 = document.createElement("img");
div4.id = "messenger";
div4.src = 'https://www.shareicon.net/data/256x256/2016/07/08/117678_messenger_512x512.png';
div4.style.display = "none";
document.body.appendChild(div4);

var div5 = document.createElement("img");
div5.id = "calendar";
div5.src = 'https://image.freepik.com/free-icon/calendar-round_318-28139.jpg';
div5.style.display = "none";
document.body.appendChild(div5);

var div6 = document.createElement("img");
div6.id = "drive";
div6.src = 'https://www.shareicon.net/data/128x128/2017/06/05/886691_media_512x512.png';
div6.style.display = "none";
document.body.appendChild(div6);

var div8  = document.createElement ('img');
div8.src  = 'https://preview.ibb.co/nuzNVG/api.png'
div8.id = "api";
div8.style.display = "none"
document.body.appendChild(div8);
	
document.getElementById('icon').addEventListener('click', function() {
	if (div3.style.display == "none") {
		div3.style.display = "block";
		div4.style.display = "block";
		div5.style.display = "block";
		div6.style.display = "block";
	} else {
		div3.style.display = "none";
		div4.style.display = "none";
		div5.style.display = "none";
		div6.style.display = "none";
	}
});

document.getElementById('gmail').addEventListener('click', function() {
	if(div8.style.display == "none") {
		div8.style.display = "block";
	} else {
		div8.style.display = "none";
	}
});
