document.getElementById("navbarToggle").addEventListener("click", function () {
	var navbarLinks = document.getElementById("navbarLinks");
	navbarLinks.classList.toggle("active");
});

// document
// 	.getElementById("darkModeToggle")
// 	.addEventListener("click", function () {
// 		document.body.classList.toggle("dark-mode");
// 		document.querySelector(".navbar").classList.toggle("dark-mode");
// 		document
// 			.querySelectorAll(".navbar-links a")
// 			.forEach((link) => link.classList.toggle("dark-mode"));
// 		document.querySelector(".hero-section").classList.toggle("dark-mode");
// 		document.querySelector(".left-section").classList.toggle("dark-mode");
// 		document.querySelector(".right-section").classList.toggle("dark-mode");
// 		document.querySelector(".cta-button").classList.toggle("dark-mode");
// 		document
// 			.querySelector(".hero-content::before")
// 			.classList.toggle("dark-mode");
// 		document.querySelector(".main-image").classList.toggle("dark-mode");

// 		// Toggle dark mode icon between sun and moon
// 		const toggleButton = document.getElementById("darkModeToggle");
// 		toggleButton.textContent =
// 			toggleButton.textContent === "🌙" ? "☀️" : "🌙";
// 	});

function ToggleDarkMode() {
	document.body.classList.toggle("dark-mode");
	document.querySelector(".navbar").classList.toggle("dark-mode");
	document
		.querySelectorAll(".navbar-links a")
		.forEach((link) => link.classList.toggle("dark-mode"));
	document.querySelector(".hero-section").classList.toggle("dark-mode");
	document.querySelector(".left-section").classList.toggle("dark-mode");
	document.querySelector(".right-section").classList.toggle("dark-mode");
	document.querySelector(".cta-button").classList.toggle("dark-mode");
	document
		.querySelector(".hero-content::before")
		.classList.toggle("dark-mode");
	document.querySelector(".main-image").classList.toggle("dark-mode");

	// Toggle dark mode icon between sun and moon
	const toggleButton = document.getElementById("darkModeToggle");
	toggleButton.textContent = toggleButton.textContent === "🌙" ? "☀️" : "🌙";
}

document
	.getElementById("darkModeToggle")
	.addEventListener("click", ToggleDarkMode);
