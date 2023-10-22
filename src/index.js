import "./styles/login.css";
import bookmark_logo from "./logos/bookmarks_logo.svg";
// const body = document.getElementById("body");
// const splash_screen = document.createElement("div");

// splash_screen.className = "splash_screen";
// splash_screen.textContent = "test";
// body.append(splash_screen);
console.log("works");

// const test_button = document.querySelector(".test");
// const splash_container = document.querySelector(".splash_container");

export const main_container = document.getElementById("main_container");
export const body = document.getElementById("body");

const test_button = document.createElement("button");
const splash_container = document.createElement("div");
const splash_sphere = document.createElement("div");
// const logo = document.createElement("img");
let logo = new Image();
logo.src = bookmark_logo;

body.append(test_button);
main_container.append(splash_container);
splash_container.append(splash_sphere);
splash_sphere.append(logo);

test_button.textContent = "test";

test_button.className = "test";
splash_container.className = "splash_container";
splash_sphere.className = "splash_sphere";

test_button.addEventListener("click", () => {
  console.log("hm");
  splash_container.classList.add("active");
  //   splash_container.classList.add = "active";
});
