/**
 * TODO: Add a fallback for browsers that do not support scroll-timeline
 */
async function initAnimationTimeline() {
  if (CSS.supports("animation-timeline: view()")) {
    console.debug("Scroll timeline is supported");
    return;
  }

  console.debug("Scroll timeline is not supported. Loading polyfill...");
  await import(
    "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"
    );

  document.querySelectorAll(".animation-timeline").forEach((element) => {
    const styles = getComputedStyle(element);
    element.animate(
      {
        color: "white",
        scale: "1.5",
        marginBlock: "5rem 10rem"
      },
      {
        fill: "both",
        timeline: new ScrollTimeline({
          source: document.documentElement
        }),
        rangeStart: new CSSUnitValue(0, "px"),
        rangeEnd: new CSSUnitValue(200, "px")
      }
    );
  });
}

// initAnimationTimeline().catch(console.error);
