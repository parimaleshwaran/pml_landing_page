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
  childDiv.innerHTML = influencerCategories[i].name;
  childDiv.id = `select${i}`;
  const img = document.createElement("img");
  img.src = influencerCategories[i].imgUrl;
  child.appendChild(img);
  child.appendChild(childDiv);
  changeCategory(i, influencerCategories[i]);
}

document.getElementById("image").src = "./images/foodie_links.png";
document.getElementById("mv-image").src = "./images/foodie_brand.png";
document.getElementById("brand-collaboration").style.marginTop = "100px";

let renderImage = "vlogger"; // Initialize Influencer Category
document.getElementById("mainDiv").innerHTML = influencerCategories[0].name;

function changeCategory(index, value) {
  document.getElementById(`select${index}`).addEventListener("click", () => {
    document.getElementById("mainDiv").innerHTML = value.name;
    renderImage = value.slug;
    document.getElementById("child").style.display = "none";
    if (document.getElementById("scroll-app").scrollTop > 35) {
      brandCollaboration(value.slug);
    }
    if (document.getElementById("scroll-app").scrollTop < 20) {
      profileLink(value.slug);
    }
  });
}

document.getElementById("scroll-app").onscroll = function () {
  if (document.getElementById("scroll-app").scrollTop > 35) {
    document.getElementById("profile-link").style.opacity = 0.5;
    document.getElementById("brand-collaboration").style.opacity = 1;
    document.getElementById("land-change").style.backgroundColor = "#B4B719";
    document.getElementById("brand-collaboration").style.marginTop = "100px";
    brandCollaboration(renderImage);
  }
  if (document.getElementById("scroll-app").scrollTop < 20) {
    document.getElementById("land-change").style.backgroundColor = "#ffa42b";
    document.getElementById("brand-collaboration").style.marginTop = "119px";
    document.getElementById("profile-link").style.opacity = 1;
    document.getElementById("brand-collaboration").style.opacity = 0.5;
    profileLink(renderImage);
  }
};

function profileLink(type) {
  if (type == "vlogger") {
    document.getElementById("image").src = "./images/vlog_links.png";
    document.getElementById("mv-image").src = "./images/vlog_brand.png";
  }
  if (type == "gammer") {
    document.getElementById("image").src = "./images/gamer_links.png";
    document.getElementById("mv-image").src = "./images/gamer_brand.png";
  }
  if (type == "petfluencer") {
    document.getElementById("image").src = "./images/petfluencer_links.png";
    document.getElementById("mv-image").src = "./images/petfluencer_brand.png";
  }
  if (type == "trainer-coach") {
    document.getElementById("image").src = "./images/trainer_links.png";
    document.getElementById("mv-image").src = "./images/trainer_brand.png";
  }
  if (type == "foodie") {
    document.getElementById("image").src = "./images/foodie_links.png";
    document.getElementById("mv-image").src = "./images/foodie_brand.png";
  }
}

function brandCollaboration(type) {
  if (type == "vlogger") {
    document.getElementById("image").src = "./images/vlog_brand.png";
    document.getElementById("mv-image").src = "./images/vlog_links.png";
  }
  if (type == "gammer") {
    document.getElementById("image").src = "./images/gamer_brand.png";
    document.getElementById("mv-image").src = "./images/gamer_links.png";
  }
  if (type == "petfluencer") {
    document.getElementById("image").src = "./images/petfluencer_brand.png";
    document.getElementById("mv-image").src = "./images/petfluencer_links.png";
  }
  if (type == "trainer-coach") {
    document.getElementById("image").src = "./images/trainer_brand.png";
    document.getElementById("mv-image").src = "./images/trainer_links.png";
  }
  if (type == "foodie") {
    document.getElementById("image").src = "./images/foodie_brand.png";
    document.getElementById("mv-image").src = "./images/foodie_links.png";
  }
}

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
