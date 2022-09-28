// defaults
ScrollTrigger.defaults({
    markers: true,
});

const first = ScrollTrigger.create({
    trigger: ".block2",
    markers: true,
    start: "30% bottom",
    end: "bottom top",
    // first argument is the element, second is the viewport,
    // values are always relative to the top
    // you could also add elements as triggers, which will be trigger & endtrigger,
    // and the position will be relative to the elements
    toggleActions: "play pause resume pause",
    scrub: true,
    // scrub runs the animation by the scrolling length, not just finish once at a time
    // add a number as value would create a delay for the el,
    // to catchup and make it look smoother
    pin: true,
    // this pins things.
    onEnter: () => console.log("Enter"),
    onLeave: () => console.log("Leave"),
    onEnterBack: () => console.log("EnterBack"),
    onLeaveBack: () => console.log("LeaveBack"),
    // onUpdate: (self) => console.log(self.progress.toFixed(3)),
    onToggle: (self) => console.log(`toggled:${self.isActive}`),
    // above are lifecycle things.
    toggleClass: "cls",
    // this toggles when onToggle is true
    // scroller:""
    // the scroller allows you to change the container to watch
    id: "scrollTrigger-test",
    // allows you to set ID when you have multiple scrollTrigger on ur page
});

gsap.to(".block2", {
    // scrollTrigger also works with timeline
    scrollTrigger: first,
    x: 1000,
    rotation: 360,
    duration: 10,
});
