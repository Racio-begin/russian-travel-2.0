const allLangs = ["ru", "en"];

let currentLang = "ru";

const langButtons = document.querySelectorAll("[data-btn]");

const currentPathName = window.location.pathname;
console.log(currentPathName);

let currentTexts = {};

const leadTexts = {
	"lead__title-text": {
		ru: "Путешествия по России",
		en: "Russian Travel",
	},
	"lead__subtitle-text": {
		ru: "Настоящая страна не в выпусках новостей, а здесь.",
		en: "The real country is not in the news, but here.",
	},
};

function checkPagePathName() {
	switch (currentPathName) {
		case "/":
			currentTexts = leadTexts;
			break;

		default:
			currentTexts = leadTexts;
			break;
	}
}
checkPagePathName();

function changeLang() {
	for (const key in currentTexts) {
		let elem = document.querySelector(`[data-lang=${key}]`);
		if (elem) {
			elem.textContent = currentTexts[key][currentLang];
		};
	};
};
changeLang();

langButtons.forEach((btn => {
	btn.addEventListener('click', (event) => {
		currentLang = event.target.dataset.btn;
		resetActiveClass(langButtons, "header__lang-button_active");
		btn.classList.add('header__lang-button_active');
		changeLang();
	});
}));

function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
};
