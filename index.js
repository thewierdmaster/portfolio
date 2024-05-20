import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
    {
        transform: ["scalex(0)", "scalex(1)"],
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
);



var links = document.querySelectorAll(".nav a");

    // Add a click event listener to each link
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Remove the "active" class from all links
            links.forEach(function(item) {
                item.classList.remove("active");
            });

            // Add the "active" class to the clicked link
            link.classList.add("active");

            // Scroll to the target section specified by href
            var targetId = link.getAttribute("href").substring(1); // Remove the "#" symbol
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });