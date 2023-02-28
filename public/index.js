let isMobileView = window.innerWidth <= 425;

// Influencer Categories
const influencerCategories = [
	{ slug: "foodie", name: "Foodie", imgUrl: "" },
	{ slug: "vlogger", name: "Vlogger", imgUrl: "" },
	{ slug: "gammer", name: "Gammer", imgUrl: "" },
	{ slug: "petfluencer", name: "Petfluencer", imgUrl: "" },
	{ slug: "trainer-coach", name: "Trainer / Coach", imgUrl: "" },
];

for (let i = 0; i < influencerCategories.length; i++) {
	const child = document.getElementById("child");
	const childDiv = document.createElement("div");
	childDiv.innerHTML = influencerCategories[i]?.name;
	childDiv.id = `select${i}`;
	childDiv.className = `cate${i}`;
	const img = document.createElement("img");
	img.src = influencerCategories[i].imgUrl;
	child.appendChild(img);
	child.appendChild(childDiv);
	changeCategory(i, influencerCategories[i]);
}

document.getElementById("image1").src = "./images/foodie_links.png";
document.getElementById("image2").src = "./images/foodie_brand.png";
document.getElementById("image3").src = "./images/foodie_links.png";
// document.getElementById("mv-image").src = "./images/foodie_brand.png";
// document.getElementById("brand-collaboration").style.marginTop = "100px";
document.getElementById("influencer-list").innerHTML =
	" Share your culinary journeys and connect with food lovers.";
document.getElementById("profile-li").innerHTML =
	"One-stop ideal platform for foodies to showcase your recipes, food reviews and cooking tips. With PickMy link's microsite, foodies can create a personalised hub for all their food-related content and stay connected with their followers in a more engaging way.";
document.getElementById("brand-collab").innerHTML =
	"Build meaningful relationships with food brands in the most secure way! Collaboration with your favourite food brands.";
// document.getElementById("brand-mobile").innerHTML =
// 	"Build meaningful relationships with food brands in the most secure way! Collaboration with your favourite food brands.";

let renderImage = "foodie"; // Initialize Influencer Category
document.getElementById("mainDiv").innerHTML = influencerCategories[0]?.name;
function changeCategory(index, value) {
	document.getElementById(`select${index}`).addEventListener("click", () => {
		profileLink(value.slug);
		document.getElementById("mainDiv").innerHTML = value.name;
		renderImage = value.slug;
		document.getElementById("child").style.display = "none";
		// if (document.getElementById("scroll-app").scrollTop > 35) {
		// 	brandCollaboration(value.slug);
		// }
		// if (document.getElementById("scroll-app").scrollTop < 20) {
		// 	profileLink(value.slug);
		// }
	});
}

// document.getElementById("scroll-app").onscroll = function () {
// 	if (document.getElementById("scroll-app").scrollTop > 35) {
// 		document.getElementById("profile-link").style.opacity = 0.5;
// 		// document.getElementById("brand-collaboration").style.opacity = 1;
// 		document.getElementById("land-change").style.backgroundImage =
// 			"linear-gradient(to left, #f4d03f, #16a085)";
// 		// document.getElementById("brand-collaboration").style.marginTop = "100px";
// 		brandCollaboration(renderImage);
// 	}
// 	if (document.getElementById("scroll-app").scrollTop < 20) {
// 		document.getElementById("land-change").style.backgroundImage =
// 			"linear-gradient(to left, #f4d03f, #16a085)";
// 		// document.getElementById("land-mobile").style.backgroundImage =
// 		// 	"linear-gradient(to left, #f4d03f, #16a085)";
// 		// document.getElementById("brand-collaboration").style.marginTop = "119px";
// 		document.getElementById("profile-link").style.opacity = 1;
// 		// document.getElementById("brand-collaboration").style.opacity = 0.5;
// 		profileLink(renderImage);
// 	}
// };

function profileLink(type) {
	if (type == "vlogger") {
		document.getElementById("image1").src = "./images/vlog_links.png";
		document.getElementById("image2").src = "./images/vlog_brand.png";
		document.getElementById("image3").src = "./images/vlog_links.png";
		document.getElementById("mainDiv").innerHTML = "Vlogger";
		document.getElementById("affiliate-content").innerHTML = "";
		// document.getElementById("image").src = "./images/vlog_links.png";
		// document.getElementById("mv-image").src = "./images/vlog_brand.png";
		document.getElementById("influencer-list").innerHTML =
			"Share your latest adventures with the world in one link.Effortlessly Manage Links,Grow Presence.";
		document.getElementById("profile-li").innerHTML =
			"With PickMy.link, you can share your vlogs in unlimited ways on your personalised microsite. Engage with your followers, stay connected and earn money all in one place - for free, forever.";
		document.getElementById("brand-collab").innerHTML =
			"Easily connect with brands for paid collaborations and promotions across socials. Finally that one platform for every creator's needs. Showcase your content, Sell more and track earnings, all this on your connected dashboard.";
		// document.getElementById("brand-mobile").innerHTML =
		// 	"Easily connect with brands for paid collaborations and promotions across socials. Finally that one platform for every creator's needs. Showcase your content, Sell more and track earnings, all this on your connected dashboard.";
		// document.getElementById("land-change").style.background = "#ffa42b";
		// document.getElementById("land-mobile").style.background = "#b71952";
	}
	if (type == "gammer") {
		document.getElementById("image1").src = "./images/gamer_links.png";
		document.getElementById("image2").src = "./images/gamer_brand.png";
		document.getElementById("image3").src = "./images/gamer_links.png";
		document.getElementById("mainDiv").innerHTML = "Gammer";
		document.getElementById("affiliate-content").innerHTML = "";

		// document.getElementById("image").src = "./images/gamer_links.png";
		// document.getElementById("mv-image").src = "./images/gamer_brand.png";
		document.getElementById("influencer-list").innerHTML =
			"Showcase your gaming skills and connect with your followers.";
		document.getElementById("profile-li").innerHTML =
			"Gaming Influencers can now take their gaming content to the next level with PickMy link. With the platform's microsite, they can easily share all their gaming content in one place and engage with their followers on a deeper level.";
		document.getElementById("brand-collab").innerHTML =
			"A link in your bio can earn more for each game! Promote products from brands on your content or use an affiliate link on your microsite, either way your game will be upped!";
		// document.getElementById("brand-mobile").innerHTML =
		// 	"A link in your bio can earn more for each game! Promote products from brands on your content or use an affiliate link on your microsite, either way your game will be upped!";
		// document.getElementById("land-change").style.backgroundImage =
		// 	"linear-gradient(to left, #fcb4b4, #e1adfa)";
		// document.getElementById("land-mobile").style.backgroundImage =
		// 	"linear-gradient(to left, #66a6ff, #89f7fe)";
	}
	if (type == "petfluencer") {
		document.getElementById("image1").src = "./images/petfluencer_links.png";
		document.getElementById("image2").src = "./images/petfluencer_brand.png";
		document.getElementById("image3").src = "./images/petfluencer_links.png";
		document.getElementById("mainDiv").innerHTML = "Petfluencer";
		document.getElementById("affiliate-content").innerHTML = "";

		// document.getElementById("image").src = "./images/petfluencer_links.png";
		// document.getElementById("mv-image").src = "./images/petfluencer_brand.png";
		document.getElementById("influencer-list").innerHTML =
			"Share your love for pets and build your pet-loving community.";
		document.getElementById("profile-li").innerHTML =
			"It's you or your pet, both can have a personalized ‘pet’ site to unleash all your content. Share it through PickMy.link’s specially designed platform and see your follower count grow as more people are exposed to your message.";
		document.getElementById("brand-collab").innerHTML =
			"At PickMy.Link, our goal is to make influencer marketing easier than ever before. Forget about spending hours trying to build relationships with brands - let PickMy.Link help make it easier for you!";
		// document.getElementById("brand-mobile").innerHTML =
		// 	"At PickMy.Link, our goal is to make influencer marketing easier than ever before. Forget about spending hours trying to build relationships with brands - let PickMy.Link help make it easier for you!";
		// document.getElementById("land-change").style.backgroundImage =
		// 	"linear-gradient(to left, #ffb199, #e32c58)";
		// document.getElementById("land-mobile").style.background = "#3d0b3e";
	}
	if (type == "trainer-coach") {
		document.getElementById("image1").src = "./images/trainer_links.png";
		document.getElementById("image2").src = "./images/trainer_brand.png";
		document.getElementById("image3").src = "./images/trainer_links.png";
		document.getElementById("mainDiv").innerHTML = "Trainer coach";
		document.getElementById("affiliate-content").innerHTML = "";

		// document.getElementById("image").src = "./images/trainer_links.png";
		// document.getElementById("mv-image").src = "./images/trainer_brand.png";
		document.getElementById("influencer-list").innerHTML =
			"Inspire and motivate others with your expert knowledge and skills.";
		document.getElementById("profile-li").innerHTML =
			"Hey Trainers and coaches, now you can focus on building your brand and engaging with your followers on a more personal level with our microsite. You can easily share all their content, training programs and services in one place and stand out from the competition.";
		document.getElementById("brand-collab").innerHTML =
			"Be part of the growing community with access to dozens of tools that help you to get collaborations, manage brand campaigns and monetize your content and stay connected with your clients.";
		// document.getElementById("brand-mobile").innerHTML =
		// 	"Be part of the growing community with access to dozens of tools that help you to get collaborations, manage brand campaigns and monetize your content and stay connected with your clients.";
		// document.getElementById("land-change").style.backgroundImage =
		// 	"linear-gradient(220deg, #d858cb, #7292f7)";
		// document.getElementById("land-mobile").style.background = "#2e2d32";
	}
	if (type == "foodie") {
		document.getElementById("image1").src = "./images/foodie_links.png";
		document.getElementById("image2").src = "./images/foodie_brand.png";
		document.getElementById("image3").src = "./images/foodie_links.png";
		document.getElementById("mainDiv").innerHTML = "Foodie";
		document.getElementById("affiliate-content").innerHTML = "";

		// document.getElementById("image").src = "./images/foodie_links.png";
		// document.getElementById("mv-image").src = "./images/foodie_brand.png";
		document.getElementById("influencer-list").innerHTML =
			" Share your culinary journeys and connect with food lovers.";
		document.getElementById("profile-li").innerHTML =
			"One-stop ideal platform for foodies to showcase your recipes, food reviews and cooking tips. With PickMy link's microsite, foodies can create a personalised hub for all their food-related content and stay connected with their followers in a more engaging way.";
		document.getElementById("brand-collab").innerHTML =
			"Build meaningful relationships with food brands in the most secure way! Collaboration with your favourite food brands.";
		// document.getElementById("brand-mobile").innerHTML =
		// 	"Build meaningful relationships with food brands in the most secure way! Collaboration with your favourite food brands.";
		// document.getElementById("land-change").style.backgroundImage =
		// 	"linear-gradient(to left, #00c9ff, #92fe9d)";
		// document.getElementById("land-mobile").style.backgroundImage =
		// 	"linear-gradient(to left, #f4d03f, #16a085)";
	}
	imageChange();
}

// function brandCollaboration(type) {
// 	if (type == "vlogger") {
// 		document.getElementById("image").src = "./images/vlog_brand.png";
// 		document.getElementById("mv-image").src = "./images/vlog_links.png";
// 		document.getElementById("influencer-list").innerHTML =
// 			"Share your latest adventures with the world in one link.Effortlessly Manage Links,Grow Presence.";
// 		document.getElementById("profile-li").innerHTML =
// 			"With PickMy.link, you can share your vlogs in unlimited ways on your personalised microsite. Engage with your followers, stay connected and earn money all in one place - for free, forever.";
// 		document.getElementById("brand-collab").innerHTML =
// 			"Easily connect with brands for paid collaborations and promotions across socials. Finally that one platform for every creator's needs. Showcase your content, Sell more and track earnings, all this on your connected dashboard.";
// 		// document.getElementById("brand-mobile").innerHTML =
// 		// 	"Easily connect with brands for paid collaborations and promotions across socials. Finally that one platform for every creator's needs. Showcase your content, Sell more and track earnings, all this on your connected dashboard.";
// 		document.getElementById("land-change").style.background = "#b71952";
// 		document.getElementById("land-mobile").style.background = "#b71952";
// 	}
// 	if (type == "gammer") {
// 		document.getElementById("image").src = "./images/gamer_brand.png";
// 		document.getElementById("mv-image").src = "./images/gamer_links.png";
// 		document.getElementById("influencer-list").innerHTML =
// 			"Showcase your gaming skills and connect with your followers.";
// 		document.getElementById("profile-li").innerHTML =
// 			"Gaming Influencers can now take their gaming content to the next level with PickMy link. With the platform's microsite, they can easily share all their gaming content in one place and engage with their followers on a deeper level.";
// 		document.getElementById("brand-collab").innerHTML =
// 			"A link in your bio can earn more for each game! Promote products from brands on your content or use an affiliate link on your microsite, either way your game will be upped!";
// 		// document.getElementById("brand-mobile").innerHTML =
// 		// 	"A link in your bio can earn more for each game! Promote products from brands on your content or use an affiliate link on your microsite, either way your game will be upped!";
// 		document.getElementById("land-change").style.backgroundImage =
// 			"linear-gradient(to left, #66a6ff, #89f7fe)";
// 		document.getElementById("land-mobile").style.backgroundImage =
// 			"linear-gradient(to left, #66a6ff, #89f7fe)";
// 	}
// 	if (type == "petfluencer") {
// 		document.getElementById("image").src = "./images/petfluencer_brand.png";
// 		document.getElementById("mv-image").src = "./images/petfluencer_links.png";
// 		document.getElementById("influencer-list").innerHTML =
// 			"Share your love for pets and build your pet-loving community.";
// 		document.getElementById("profile-li").innerHTML =
// 			"It's you or your pet, both can have a personalized ‘pet’ site to unleash all your content. Share it through PickMy.link’s specially designed platform and see your follower count grow as more people are exposed to your message.";
// 		document.getElementById("brand-collab").innerHTML =
// 			"At PickMy.Link, our goal is to make influencer marketing easier than ever before. Forget about spending hours trying to build relationships with brands - let PickMy.Link help make it easier for you!";
// 		// document.getElementById("brand-mobile").innerHTML =
// 		// 	"At PickMy.Link, our goal is to make influencer marketing easier than ever before. Forget about spending hours trying to build relationships with brands - let PickMy.Link help make it easier for you!";
// 		document.getElementById("land-change").style.background = "#3d0b3e";
// 		document.getElementById("land-mobile").style.background = "#3d0b3e";
// 	}
// 	if (type == "trainer-coach") {
// 		document.getElementById("image").src = "./images/trainer_brand.png";
// 		document.getElementById("mv-image").src = "./images/trainer_links.png";
// 		document.getElementById("influencer-list").innerHTML =
// 			"Inspire and motivate others with your expert knowledge and skills.";
// 		document.getElementById("profile-li").innerHTML =
// 			"Hey Trainers and coaches, now you can focus on building your brand and engaging with your followers on a more personal level with our microsite. You can easily share all their content, training programs and services in one place and stand out from the competition.";
// 		document.getElementById("brand-collab").innerHTML =
// 			"Be part of the growing community with access to dozens of tools that help you to get collaborations, manage brand campaigns and monetize your content and stay connected with your clients.";
// 		// document.getElementById("brand-mobile").innerHTML =
// 		// 	"Be part of the growing community with access to dozens of tools that help you to get collaborations, manage brand campaigns and monetize your content and stay connected with your clients.";
// 		document.getElementById("land-change").style.background = "#2e2d32";
// 		document.getElementById("land-mobile").style.background = "#2e2d32";
// 	}
// 	if (type == "foodie") {
// 		document.getElementById("image").src = "./images/foodie_brand.png";
// 		document.getElementById("mv-image").src = "./images/foodie_links.png";
// 		document.getElementById("influencer-list").innerHTML =
// 			"Share your culinary journeys and connect with food lovers.";
// 		document.getElementById("profile-li").innerHTML =
// 			"One-stop ideal platform for foodies to showcase your recipes, food reviews and cooking tips. With PickMy link's microsite, foodies can create a personalised hub for all their food-related content and stay connected with their followers in a more engaging way.";
// 		document.getElementById("brand-collab").innerHTML =
// 			"Build meaningful relationships with food brands in the most secure way! Collaboration with your favourite food brands";
// 		// document.getElementById("brand-mobile").innerHTML =
// 		// 	"Build meaningful relationships with food brands in the most secure way! Collaboration with your favourite food brands";
// 		document.getElementById("land-change").style.backgroundImage =
// 			"linear-gradient(to left, #f4d03f, #16a085)";
// 		document.getElementById("land-mobile").style.backgroundImage =
// 			"linear-gradient(to left, #f4d03f, #16a085)";
// 	}
// }

// Influencer Statement (Monthly Posts and Followers Count)

const followersRange = document.getElementById("followers-range");
const monthlyPostRange = document.getElementById("monthly-post-range");
const monthlyPost = document.getElementById("monthly-post");
const followers = document.getElementById("followers");
const amount = document.getElementById("amount");

const setValue = () => {
	const newValue = Number(
			((followersRange.value - followersRange.min) * 100) /
				(followersRange.max - followersRange.min)
		),
		newPosition = 16 - newValue * 0.32;
	let range1 = "";
	if (followersRange.value >= 1000000)
		range1 = followersRange.value / 1000000 + "M";
	else if (followersRange.value >= 1000) {
		range1 = followersRange.value / 1000 + "K";
	} else range1 = followersRange.value + "";

	monthlyPost.innerHTML = `<span>${range1}</span>`;
	amount.innerHTML = `<span>${range1}</span>`;
	monthlyPost.style.left = `calc(${newValue}% + (${newPosition}px))`;

	followersRange.style.setProperty(
		"--range-progress",
		`calc(${newValue}% + (${newPosition}px))`
	);
};

const setValue2 = () => {
	const newValue = Number(
			((monthlyPostRange.value - monthlyPostRange.min) * 100) /
				(monthlyPostRange.max - monthlyPostRange.min)
		),
		newPosition = 16 - newValue * 0.32;
	followers.innerHTML = `<span>${monthlyPostRange.value}</span>`;
	amount.innerHTML = `<span>${monthlyPostRange.value}</span>`;
	followers.style.left = `calc(${newValue}% + (${newPosition}px))`;
	monthlyPostRange.style.setProperty(
		"--range-progress",
		`calc(${newValue}% + (${newPosition}px))`
	);
};

document.addEventListener("DOMContentLoaded", setValue);
followersRange.addEventListener("input", setValue);
document.addEventListener("DOMContentLoaded", setValue2);
monthlyPostRange.addEventListener("input", setValue2);

// PickMYLink Name Input Focus
function inputFocus() {
	document.getElementById("profile-outline").style.border = "2px solid white";
	document.getElementById("profile-outline").style.transition = "2s";
}
function hideBorder() {
	document.getElementById("profile-outline").style.border = "2px solid #0f0f0f";
	document.getElementById("profile-outline").style.transition = "2s";
}

// Scroll new design script smooth scroll
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray("section");
let maxWidth = 0;

const getMaxWidth = () => {
	maxWidth = 0;
	sections.forEach((section) => {
		maxWidth += section.offsetWidth;
	});
};
getMaxWidth();
ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

gsap.to(sections, {
	x: () => `-${maxWidth - window.innerWidth}`,
	ease: "none",
	scrollTrigger: {
		trigger: ".wrapper",
		pin: true,
		scrub: true,
		end: () => `+=${maxWidth}`,
		invalidateOnRefresh: true,
	},
});

sections.forEach((sct, i) => {
	ScrollTrigger.create({
		trigger: sct,
		start: () =>
			"top top-=" +
			(sct.offsetLeft - window.innerWidth / 2) *
				(maxWidth / (maxWidth - window.innerWidth)),
		end: () =>
			"+=" + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
		toggleClass: { targets: sct, className: "active" },
	});
});

function mobileViewScroll() {
	const dropSection = document
		.getElementById("drop-section")
		.getBoundingClientRect();

	if (dropSection.top > -200) {
		document.getElementById("profile-link").style.display = "none";
		// document.getElementById("brand-collaboration").style.display = "block";
		// document.getElementById("brand-collaboration").style.marginTop = "180px";
	}
	if (dropSection.top > 10) {
		document.getElementById("profile-link").style.display = "block";
		// document.getElementById("brand-collaboration").style.display == "none";
		profileLink(renderImage);
	}

	if (isMobileView) {
		const sectionOne = document
			.getElementById("text-section-1")
			.getBoundingClientRect();
		const sectionTwo = document
			.getElementById("text-section-2")
			.getBoundingClientRect();
		const sectionThree = document
			.getElementById("text-section-3")
			.getBoundingClientRect();
		document.getElementById("text-1").style.color = "white";
		if (sectionOne.top < 300) {
			document.getElementById("text-1").style.opacity = 1;
			document.getElementById("text-2").style.opacity = 0.5;
			document.getElementById("text-3").style.opacity = 0.5;
		}
		if (sectionTwo.top < 300 && sectionThree.top > 80) {
			document.getElementById("text-2").style.transition = "2s";
			document.getElementById("text-2").style.opacity = 1;
			document.getElementById("text-2").style.color = "white";
			document.getElementById("text-1").style.opacity = 0.5;
			document.getElementById("text-3").style.opacity = 0.5;
		} else {
			document.getElementById("text-2").style.opacity = 0.5;
		}

		if (sectionThree.top < 300 && sectionThree.top > 80) {
			document.getElementById("text-3").style.transition = "2s";
			document.getElementById("text-3").style.opacity = 1;
			document.getElementById("text-3").style.color = "white";
			document.getElementById("text-2").style.opacity = 0.5;
			document.getElementById("text-1").style.opacity = 0.5;
		} else {
			document.getElementById("text-3").style.opacity = 0.5;
		}
	}
}
// Enter buttton go to signup

let content = document.getElementById("myClaim");
content.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("myLink").click();
	}
});

// canvas background set
if (typeof window.IntersectionObserver !== "undefined") {
	let options = {
		threshold: [0.5, 1],
	};
	const targets = document.querySelectorAll(".cb");
	const locker = document.querySelector(".locker__container");
	function handleIntersection(entries) {
		entries.map((entry) => {
			if (entry.isIntersecting) {
				entry.target.current = entry.target.dataset.swap;
				document
					.querySelector(".locker__container ." + entry.target.current)
					.classList.add("active");
			} else {
				document
					.querySelector(".locker__container ." + entry.target.current)
					.classList.remove("active");
			}

			if (entry?.target?.current) {
				imageChange();
			}
		});
	}
	const observer = new IntersectionObserver(handleIntersection, options);
	targets.forEach((target) => observer.observe(target));
} else {
	// Fallback
}
function imageChange() {
	let activeImage = 1;
	for (i = 1; i <= 3; i++) {
		document.getElementById(`image${i}`).classList.forEach((c) => {
			if (c === "active") {
				activeImage = i;
			}
		});
	}
	const mainDiv = document.getElementById("mainDiv").innerHTML;
	if (activeImage === 1) {
		switch (mainDiv) {
			case "Foodie":
				setCanvasBg("linear-gradient(to left, #00c9ff, #92fe9d)");
				break;
			case "Vlogger":
				setCanvasBg("#ffa42b");
				break;
			case "Gammer":
				setCanvasBg("linear-gradient(to left, #fcb4b4, #e1adfa)");
				break;
			case "Petfluencer":
				setCanvasBg("linear-gradient(to left, #ffb199, #e32c58)");
				break;
			case "Trainer / Coach":
				setCanvasBg("linear-gradient(220deg, #d858cb, #7292f7)");
				break;
		}
	} else if (activeImage === 2) {
		switch (mainDiv) {
			case "Foodie":
				setCanvasBg("linear-gradient(to left, #f4d03f, #16a085)");
				break;
			case "Vlogger":
				setCanvasBg("#b71952");
				break;
			case "Gammer":
				setCanvasBg("linear-gradient(to left, #66a6ff, #89f7fe)");
				break;
			case "Petfluencer":
				setCanvasBg("#3d0b3e");
				break;
			case "Trainer / Coach":
				setCanvasBg("#2e2d32");
				break;
		}
	} else if (activeImage === 3) {
		switch (mainDiv) {
			case "Foodie":
				setCanvasBg("pink");
				break;
			case "Vlogger":
				setCanvasBg("green");
				break;
			case "Gammer":
				setCanvasBg("linear-gradient(to left, #66a6ff, black)");
				break;
			case "Petfluencer":
				setCanvasBg("gray");
				break;
			case "Trainer / Coach":
				setCanvasBg("blue");
				break;
		}
	}
}

function setCanvasBg(color) {
	document.getElementById("land-change").style.background = color;
}
