function startSlideshow() {
    const resourcesDiv = document.getElementById("resources");
    const slideshowDiv = document.getElementById("slideshow");

    resourcesDiv.style.display = "none";
    slideshowDiv.style.display = "flex";
    slideshowDiv.style.justifyContent = "center";

    let images = slideshowDiv.getElementsByTagName("img");
    let currentImageIndex = 0;

    function slide() {
        images[currentImageIndex].style.display = "none";
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = "flex";
    }

    slide(slide());
    setInterval(slide, 3000);
}