let mainElement = document.querySelector('main');
let avatars = document.querySelector('.avatars');

mainElement.scrollTop = 0; // reset top when init page

// on load
window.onload = () => {
	showAvatars();
};

// DISABLE END AND HOME KEYBOARD BUTTONS (navigation)
document.addEventListener('keydown', (event) => {
	if (event.key === 'Home' || event.key === 'End') {
		event.preventDefault();
	}
});

// SCROLL STATUS
mainElement.addEventListener('scroll', () => {
	showAvatars();
});

// MOBILE MENU
document
	.querySelector('.mobile-menu')
	.addEventListener('mousedown', (event) => {
		event.target.getAttribute('aria-menu-action') == 'open'
			? event.target.setAttribute('aria-menu-action', 'close')
			: event.target.setAttribute('aria-menu-action', 'open');
		document.querySelector('.menuNav').classList.toggle('opened');
	});

// MOBILE MENU OPENED - ACORDEONS
document.querySelectorAll('.dropdown').forEach((itemDropdown) => {
	itemDropdown.children[0].addEventListener('mousedown', () => {
		if (itemDropdown.classList.contains('opened')) {
			itemDropdown.classList.remove('opened');
		} else {
			let beforeActive = document.querySelector('li.dropdown.opened');
			if (beforeActive) beforeActive.classList.remove('opened');
			itemDropdown.classList.add('opened');
		}
	});
});

// DESKTOP SUBMENU
document.querySelectorAll('.desktop-subMenu').forEach((itemBtn) => {
	let subMenuContent = document.querySelector('.subMenu-content');
	itemBtn.addEventListener('mousedown', () => {
		if (itemBtn.getAttribute('aria-menu-action') == 'open') {
			subMenuContent.style.transform = 'translateY(0)';
			subMenuContent.style.transition = 'transform .5s';
		} else {
			subMenuContent.style.transform = 'translateY(100vh)';
			subMenuContent.style.transition = 'transform .5s';
		}
	});
});

// SUBMENU SHOW NESTED LI LINKS WHEN SELECT PARENT LI
document.documentElement.style.setProperty(
	'--aside-active-item-height',
	`calc(${
		document.querySelector('.asideMenu > ul > li.active').children[1]
			.childElementCount
	} * 3.5rem)`
);
let subMenuContainer = document.querySelector('.submenu-images');
let activeItemId;
document.querySelectorAll('.asideMenu > ul > li > a').forEach((subMenuItem) => {
	subMenuItem.addEventListener('click', (e) => {
		e.preventDefault();
		subMenuContainer.scrollTop = document.querySelector(subMenuItem.hash).y;
		document
			.querySelector('.asideMenu > ul > li.active')
			.classList.remove('active');
		document.documentElement.style.setProperty(
			'--aside-active-item-height',
			`calc(${subMenuItem.parentElement.children[1].childElementCount} * 3.5rem)`
		);
		subMenuItem.parentElement.classList.add('active');
	});
});

// Hide Avatars
function showAvatars() {
	if (mainElement.scrollTop > mainElement.clientHeight / 2) {
		avatars.style.transform = 'translateY(6rem)';
	} else {
		avatars.style.transform = 'translateY(0)';
	}
}
