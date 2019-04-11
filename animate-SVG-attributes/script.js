let cssCircle = document.getElementById('cssCircle');
let attrCircle = document.getElementById('attrCircle');
let svgRect = document.getElementById('svgRect');
let play = document.getElementById('play');



let tl = new TimelineMax({
    repeat: 1,
    yoyo: true,
    paused: true
});



tl.to(cssCircle, 1, { x: 50, scale: 1.5 })
  .to(cssCircle, 0.5, { strokeWidth: 4, stroke: "#fff" })
  .to(attrCircle, 1, { attr: { cx: 200 } })
  .to(attrCircle, 1, { attr: { r: 30 }})
  .to(svgRect, 1, { attr: { rx: "30" } });



play.addEventListener('click', function() {
    tl.restart();
});
