function createStars() {
    const galaxy = document.getElementById("galaxy");
    const starCount = 250;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * 4;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        const duration = Math.random() * 2 + 1;
        star.style.setProperty("--duration", `${duration}s`);

        galaxy.appendChild(star);
    }
}

function animateText() {
    const text = document.getElementById("dynamic-text");
    const phrases = [
        "Your Gateway to Landing the Perfect Bootcamps!",
        "Discover New Worlds",
        "Reach for the Stars",
    ];
    let index = 0;

    setInterval(() => {
        text.style.opacity = 0;
        setTimeout(() => {
            text.textContent = phrases[index];
            text.style.opacity = 1;
            index = (index + 1) % phrases.length;
        }, 500);
    }, 4000);
}

createStars();
animateText();