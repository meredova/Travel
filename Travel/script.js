document.addEventListener("DOMContentLoaded", () => {
	const body = document.querySelector("body");
	const menu = body.querySelector(".nav-mobile");
	const burger = body.querySelector(".hamburger");
	const overlay = body.querySelector(".overlay");
	const close = menu.querySelector(".close");
	const headerLogin = document.getElementById("headerLogin");
	const mobileLogin = document.getElementById("mobileLogin");
	const signIn = document.getElementById("signIn");
	const register = document.getElementById("register");
	const logInPopup = document.getElementById("logInPopup");
	const popup = body.querySelector(".popup");
/* burger
------------------------------------------*/

/* PopUp
------------------------------------------*/
	register.addEventListener("click", () => {
		togglePopup(register, "signOn");
	});

	logInPopup.addEventListener("click", () => {
		togglePopup(logInPopup, "signUp");
	});

	function togglePopup(item, flag) {
		let parent = item.closest(".popup");
		let title = parent.querySelector(".popup-title");
		let signInWrap = parent.querySelector(".sign-wrap");
		let forgot = parent.querySelector(".forgot");
		let popupRegQues = parent.querySelector(".popup-reg-ques");
		let logInPopup = parent.querySelector("#logInPopup");

		signInWrap.classList.toggle("active");
		forgot.classList.toggle("active");
		register.classList.toggle("active");
		logInPopup.classList.toggle("active");

		if (flag === "signOn") {
			title.innerText = "Create account";
			popupRegQues.innerText = "Already have an account?";
		}

		if (flag === "signUp") {
			title.innerText = "Log in to your account";
			popupRegQues.innerText = "Don’t have an account?";
		}
	}

	overlay.addEventListener("click", () => {
		let activeItem = body.querySelector(".active");
		hideItem(activeItem);
	});

	headerLogin.addEventListener("click", () => {
		showItem(popup);
	});

	menu.querySelectorAll(".nav-item").forEach((link) => {
		link.addEventListener("click", () => {
			if (link == mobileLogin) {
				hideItem(menu);
				showItem(popup);
			} else {
				hideItem(menu);
			}
		});
	});

	signIn.addEventListener("click", () => {
		hideItem(popup);
		let parent = signIn.closest(".popup");
		let email = parent.querySelector('input[name="email"]').value;
		let password = parent.querySelector('input[name="password"]').value;
		alert(`E-mail: '${email}', Password: '${password}'`);
	});
});
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
	