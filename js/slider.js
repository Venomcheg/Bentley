let sliders = document.querySelectorAll("._swiper");
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add("swiper-bild");
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);

		}
	}
	sliders_bild_callback();
}
function sliders_bild_callback(params) { }

let main_slider = new Swiper('.slider-pets__body', {
	/*
	effect: 'fade',
	autoplay: {
	delay: 3000,
	disableOnInteraction: false,
	},
	*/
	//observer: true,
	//init: false,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 100,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	simulateTouch: true,
	loop: true,
	centeredSlides: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	// pagination: {
	// 	el: '.slider-top__pagging',
	// 	type: "bullets",
	// },
	// Arrows
	breakpoints: {
		770: {
			slidesPerView: 3,
			spaceBetween: 50
		}
	},
	navigation: {
		nextEl: '.slider-pets__control-before',
		prevEl: '.slider-pets__control-next',

	},

}
);
let our_team = new Swiper('.slider-our-team__body', {
	/*
	effect: 'fade',
	autoplay: {
	delay: 3000,
	disableOnInteraction: false,
	},
	*/
	//observer: true,
	//init: false,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 100,
	// autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	simulateTouch: true,
	loop: true,
	// centeredSlides: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	// pagination: {
	// 	el: '.slider-top__pagging',
	// 	type: "bullets",
	// },
	// Arrows
	breakpoints: {
		768: {
			slidesPerView: 1,
			spaceBetween: 100
		}
	},
	navigation: {
		nextEl: '.slider-our-team__control-prev',
		prevEl: '.slider-our-team__control-next',

	},

}
);
let reviews = new Swiper('.slider-reviews__body', {
	/*
	effect: 'fade',
	autoplay: {
	delay: 3000,
	disableOnInteraction: false,
	},
	*/
	//observer: true,
	//init: false,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 300,
	// autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	simulateTouch: true,
	loop: true,
	// centeredSlides: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	// pagination: {
	// 	el: '.slider-top__pagging',
	// 	type: "bullets",
	// },
	// Arrows
	breakpoints: {
		1360: {
			slidesPerView: 1,
			spaceBetween: 100
		}
	},
	navigation: {
		nextEl: '.slider-reviews__control-prev',
		prevEl: '.slider-reviews__control-next',

	},

}
);