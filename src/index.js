import "./styles/login.css";
import bookmark_logo from "./logos/bookmarks_logo.svg";

console.log("works");

export const main_container = document.getElementById("main_container");
export const body = document.getElementById("body");

const phone_status = document.createElement("div");
const test_button = document.createElement("button");
const splash_container = document.createElement("div");
const splash_sphere = document.createElement("div");
let logo = document.createElement("img");

const login_container = document.createElement("div");
const email_pass_container = document.createElement("div");
const label_email = document.createElement("label");
const input_email = document.createElement("input");
const label_pass = document.createElement("label");
const input_pass = document.createElement("input");

// let logo = new Image();
logo.src = bookmark_logo;

body.append(test_button);
main_container.append(phone_status);
// main_container.append(splash_sphere);
splash_sphere.append(logo);
// main_container.append(splash_container);
main_container.append(login_container);
login_container.append(email_pass_container);
email_pass_container.append(label_email);
label_email.append(input_email);
email_pass_container.append(label_pass);
label_pass.append(input_pass);

input_email.placeholder = "Enter email address";
input_pass.placeholder = "Enter password";

test_button.textContent = "test";
phone_status.className = "phone_status";
test_button.className = "test";
splash_container.className = "splash_container";
splash_sphere.className = "splash_sphere";
login_container.className = "login_container";
email_pass_container.className = "email_pass_container";

test_button.addEventListener("click", () => {
  splash_container.classList.add("active");
  splash_sphere.classList.add("splash_sphere_active");
});
