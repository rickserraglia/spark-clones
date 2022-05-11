// init
window.onload = function () {
	menuStatus();
};
// scroll
window.addEventListener('scroll', function () {
	menuStatus();
});

//accordion
document.querySelectorAll('.accordion-item-toggle').forEach(function (accordionToggle) {
	accordionToggle.addEventListener('click', function () {
		this.classList.toggle("active");
		var accordionContent = this.nextElementSibling;
		if (accordionContent.style.maxHeight) {
			accordionContent.style.maxHeight = null;
		} else {
			accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
		}
	})
});

function menuStatus() {
	const home = document.querySelector('section#hero');
	if (scrollY >= (home.offsetTop + home.offsetHeight)) {
		document.querySelector('nav').classList.add('scroll');
	} else {
		document.querySelector('nav').classList.remove('scroll');
	}
}