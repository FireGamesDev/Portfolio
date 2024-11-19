const track = document.getElementById("image-track");
const container = document.getElementById("image-container");
const images = document.querySelectorAll("#image-track img");

track.dataset.mouseDownAt = "0";
track.dataset.prevPercentage = "0";

images.forEach(image => {
    image.setAttribute('draggable', false);
});

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
};

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage || "0";
};

container.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const speed = 3;

    let percentage = (mouseDelta / maxDelta) * -100 * speed;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    // Smooth clamping to prevent abrupt stopping
    nextPercentage = Math.max(Math.min(nextPercentage, 0), -300);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage + 36.5}%, 0%)`
    }, { duration: 1200, fill: "forwards" });

    const minPercentage = -100;
    const maxPercentage = 100;

    images.forEach(image => {
        const clampedPercentage = Math.min(Math.max(nextPercentage / 3, minPercentage), maxPercentage);

        image.animate({
            objectPosition: `${clampedPercentage + 100}% center`
        }, { duration: 1200, fill: "forwards" });
    });
}