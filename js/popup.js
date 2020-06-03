let user_icon = document.querySelector(".popup-number__btn");
user_icon.addEventListener("click", function (e) {
	let user_menu_btn = document.querySelector(".popup-number__btn");
	let user_menu = document.querySelector(".popup-number__wrap-text");
	user_menu.classList.toggle("_active");
	user_menu_btn.classList.toggle("_active");
});