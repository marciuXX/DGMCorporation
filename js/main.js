const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const allNavLinks = document.querySelectorAll('.nav__link');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	if (navBtn.classList.contains('is-active')) {
		document.body.style.setProperty('overflow', 'hidden');
	} else {
		document.body.style.removeProperty('overflow');
	}

	allNavLinks.forEach((item) => {
		item.addEventListener('click', () => {
			navBtn.classList.remove('is-active');
			navMobile.classList.remove('nav-mobile--active');
			document.body.style.removeProperty('overflow');
		});
	});
};

navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
