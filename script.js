const hamburger = document.querySelector(".hamburger-menu");
const navButtons = document.querySelector('.btns');
const navBar = document.querySelector('.navbar')

hamburger.addEventListener("click", ()=>{
	hamburger.classList.toggle("active");
	navButtons.classList.toggle("active");
	navBar.classList.toggle("active");

})
