<script>
    // Function to change banner text based on scroll position
    window.addEventListener('scroll', function() {
        var bannerText = document.querySelector('.banner-text');

        // Change the text based on scroll position
        if (window.scrollY > 200) { // Adjust 200 to the scroll position where you want the change to occur
            bannerText.textContent = "Fighting for your rights since 2005";
        } else {
            bannerText.textContent = "TOBEY JONES WILL FIGHT FOR YOU";
        }
    });
</script>
