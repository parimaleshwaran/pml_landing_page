// Influencer Categories
const influencerCategories = [
	{ slug: "vlogger", name: "Vlogger", imgUrl: "" },
	{ slug: "gammer", name: "Gammer", imgUrl: "" },
	{ slug: "petfluencer", name: "Petfluencer", imgUrl: "" },
	{ slug: "trainer-coach", name: "Trainer / Coach", imgUrl: "" },
	{ slug: "foodie", name: "Foodie", imgUrl: "" },
];

for (i = 0; i < influencerCategories.length; i++) {
	const child = document.getElementById("child");
	const childDiv = document.createElement("div");
	childDiv.innerHTML = influencerCategories[i].name;
	childDiv.id = `select${i}`;
	const img = document.createElement("img");
	img.src = influencerCategories[i].imgUrl;
	child.appendChild(img);
	child.appendChild(childDiv);
	listen(i, influencerCategories[i]);
}

//

$("#child").hide();

$("#mainDiv").click(function () {
	event.stopPropagation();
	$("#child").toggle();
});

$(window).click(function (e) {
	$("#child").hide();
});

$("#drop-down-arrow").click(function () {
	event.stopPropagation();
	$("#child").toggle();
});

document.getElementById("image").src = "./images/camera.png";
document.getElementById("mv-image").src = "./images/man.png";

var renderImage = "vlogger";

function listen(index, value) {
	document.getElementById(`select${index}`).addEventListener("click", () => {
		const val = document.getElementById(`select${index}`).innerHTML;
		document.getElementById("mainDiv").innerHTML = value.name;
		renderImage = value.slug;
		$("#child").hide();
		if (document.getElementById("scrol-app").scrollTop > 200) {
			brandCollabRenderImage(value.slug);
		}
		if (document.getElementById("scrol-app").scrollTop < 80) {
			profileLinkRenderImage(value.slug);
		}
	});
}
document.getElementById("mainDiv").innerHTML = influencerCategories[0].name;
//

document.getElementById("scrol-app").onscroll = function () {
	if (document.getElementById("scrol-app").scrollTop > 200) {
		document.getElementById("profile-link").style.visibility = "hidden";
		document.getElementById("land-change").style.backgroundColor = "#290038";
		// document.getElementById("image").src = "./images/man.png";
		brandCollabRenderImage(renderImage);
		document.getElementById("brand-collab").style.marginTop = "170px";
	}
	if (document.getElementById("scrol-app").scrollTop < 80) {
		document.getElementById("land-change").style.backgroundColor = "#ffa42b";
		document.getElementById("brand-collab").style.marginTop = "278px";
		document.getElementById("profile-link").style.visibility = "visible";
		profileLinkRenderImage(renderImage);
		// document.getElementById("image").src = "./images/camera.png";
	}
};

function profileLinkRenderImage(type) {
	if (type == "vlogger") {
		document.getElementById("image").src = "./images/camera.png";
		document.getElementById("mv-image").src = "./images/man.png";
	}
	if (type == "gammer") {
		document.getElementById("image").src = "./images/man.png";
		document.getElementById("mv-image").src = "./images/camera.png";
	}
	if (type == "petfluencer") {
		document.getElementById("image").src = "./images/camera.png";
		document.getElementById("mv-image").src = "./images/man.png";
	}
	if (type == "trainer-coach") {
		document.getElementById("image").src = "./images/man.png";
		document.getElementById("mv-image").src = "./images/camera.png";
	}
	if (type == "foodie") {
		document.getElementById("image").src = "./images/man.png";
		document.getElementById("mv-image").src = "./images/camera.png";
	}
}

function brandCollabRenderImage(type) {
	if (type == "vlogger") {
		document.getElementById("image").src = "./images/man.png";
		document.getElementById("mv-image").src = "./images/camera.png";
	}
	if (type == "gammer") {
		document.getElementById("image").src = "./images/camera.png";
		document.getElementById("mv-image").src = "./images/man.png";
	}
	if (type == "petfluencer") {
		document.getElementById("image").src = "./images/man.png";
		document.getElementById("mv-image").src = "./images/camera.png";
	}
	if (type == "trainer-coach") {
		document.getElementById("image").src = "./images/camera.png";
		document.getElementById("mv-image").src = "./images/man.png";
	}
	if (type == "foodie") {
		document.getElementById("image").src = "./images/camera.png";
		document.getElementById("mv-image").src = "./images/man.png";
	}
}
