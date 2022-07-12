const burgerMenu = document.querySelector(".hamburger");
const menuList = document.querySelector(".nav-list");
const MENU = document.querySelector(".navigation");

if (burgerMenu) {
	burgerMenu.addEventListener("click", function (e) {
		burgerMenu.classList.toggle("active");
		menuList.classList.toggle("active");
		MENU.classList.toggle("active");
	});
}

if (MENU) {
	MENU.addEventListener("click", function (e) {
		burgerMenu.classList.remove("active");
		menuList.classList.remove("active");
		MENU.classList.remove("active");
	});
}
