const track = document.getElementById("image-track");
const images = document.querySelectorAll("#image-track img");

track.dataset.mouseDownAt = "0";
track.dataset.prevPercentage = "0";

images.forEach(image => {
    image.setAttribute('draggable', false);
});

track.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
};

track.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage || "0";
};

track.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const speed = 2;

    let percentage = (mouseDelta / maxDelta) * -100 * speed;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    // Smooth clamping to prevent abrupt stopping
    nextPercentage = Math.max(Math.min(nextPercentage, 0), -200);

    track.dataset.percentage = nextPercentage;

    // Apply transform with easing for smooth clamping
    track.style.transform = `translate(${nextPercentage + 50}%, 0%)`;

    track.animate({
        transform: `translate(${nextPercentage + 50}%, 0%)`
    }, { duration: 1200, fill: "forwards" });

    images.forEach(image => {
        image.animate({
            objectPosition: `${nextPercentage + 70}% center`
        }, { duration: 1200, fill: "forwards" });
    });
}