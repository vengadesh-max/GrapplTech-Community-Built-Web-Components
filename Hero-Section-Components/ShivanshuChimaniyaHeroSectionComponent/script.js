document.getElementById("navbarToggle").addEventListener("click", function () {
	var navbarLinks = document.getElementById("navbarLinks");
	navbarLinks.classList.toggle("active");
});

function toggleDarkMode() {
	if (document.documentElement.classList.contains("light")) {
		document.documentElement.classList.remove("light");
		document.documentElement.classList.add("dark");
	} else if (document.documentElement.classList.contains("dark")) {
		document.documentElement.classList.remove("dark");
		document.documentElement.classList.add("light");
	} else {
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.add("light");
		}
	}
	// Toggle dark mode icon between sun and moon
	const toggleButton = document.getElementById("darkModeToggle");
	toggleButton.textContent = toggleButton.textContent === "🌙" ? "☀️" : "🌙";
}

document
	.getElementById("darkModeToggle")
	.addEventListener("click", toggleDarkMode);

toggleDarkMode();
