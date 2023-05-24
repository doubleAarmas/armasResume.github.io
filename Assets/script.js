// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
})

// Close hamburger menu when a link is clicked

// Select nav links

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link)=>
link.addEventListener("click", () => {
  ul.classList.remove("show");
})
);



//  // Add event listener to the burger menu button
//  document.getElementById("burger-menu").addEventListener("click", function () {
//   // Toggle the 'active' class on the navbar
//   document.querySelector(".navbar").classList.toggle("active");
// });

// // Add event listener to each navbar link
// var navLinks = document.querySelectorAll(".nav_links");
// for (var i = 0; i < navLinks.length; i++) {
//   navLinks[i].addEventListener("click", function () {
//       // Remove the 'active' class from the navbar
//       document.querySelector(".navbar").classList.remove("active");
//   });
// }