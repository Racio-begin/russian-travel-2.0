window.onload = function () {
	var currentYearElement = document.getElementById("current-year");
	var datetime = new Date();
	var currentYear = datetime.getFullYear();
	currentYearElement.innerHTML = currentYear;
};
