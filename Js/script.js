/*const notifElem = document.querySelector('.notification')

const notif = {
	open: (color = 'blue') => notifElem.classList.add('go', color),
	close: () => notifElem.classList.remove('go')
}

setTimeout(() => {
	notif.open('blue')
	setTimeout(() => {
		notif.close()
	}, 15000);
}, 5000);
/*-------------------------*/
/*-------SLIDER---------*/
let imageSwiper = new Swiper('.image-slider', {
	loop: true,

	pagination: {
		el: '.swiper-pagination',
	},

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination :{
		el:'.swiper-pagination',
		//БУЛЕТЫ
		clickable:true,
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	}
})
/*----------------------*/