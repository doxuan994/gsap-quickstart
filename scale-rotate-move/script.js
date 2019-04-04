let play = document.getElementById('play');
let pause = document.getElementById('pause');
let reverse = document.getElementById('reverse');
let resume = document.getElementById('resume');
let restart = document.getElementById('restart');


let tl = new TimelineMax({
    paused: true
});






let svgRect = document.getElementById('svgRect');
console.log(svgRect);


let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;


tl
    .to(svgRect, 2, { rotation: 360, transformOrigin: "50% 50%" }, "+=1")
    .to(svgRect, 2, { rotation: "+=360", transformOrigin: "right bottom" }, "+=1")
    .to(svgRect, 2, { scale: 0, transformOrigin: "0% 0%" }, "+=1")
    .to(svgRect, 2, { scale: 1, transformOrigin: "left top" }, "+=1")
    .to(svgRect, 2, { scaleY: 0, transformOrigin:"0% 50%" }, "+=1")
    .to(svgRect, 2, { scaleY: 1, transformOrigin:"50% bottom" }, "+=1")
    .to(svgRect, 2, { scale: 0.5, rotation: 360, transformOrigin:"50% 50%" }, "+=1")




slider.oninput = function() {
    output.innerHTML = this.value;
    tl.progress(this.value).pause();
}





play.addEventListener('click', function() {
    tl.play();
}, false);

pause.addEventListener('click', function() {
    tl.pause();
}, false);

reverse.addEventListener('click', function() {
    tl.reverse();
}, false);

resume.addEventListener('click', function() {
    tl.resume();
}, false);

restart.addEventListener('click', function() {
    tl.restart();
}, false);
















































//
