let play = document.getElementById('play');

let tl = new TimelineMax({
    repeat: 1,
    yoyo: true,
    paused: true
});



tl.staggerTo("rect", 0.5, { xPercent: 50 }, 0.4);
tl.staggerTo("rect", 0.5, { xPercent: 100 }, 0.4);




play.addEventListener('click', function() {
    tl.restart();
});
