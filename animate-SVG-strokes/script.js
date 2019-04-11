let grayLine = document.querySelectorAll('.gray-line');
let greenLine = document.querySelectorAll('.green-line');
let greenLineThin = document.querySelectorAll('.green-line-thin');
let pluginStroke = document.querySelectorAll('.plugin-stroke');

TweenLite.set(grayLine, {
    visibility: "visible"
});
TweenLite.set(greenLine, {
    visibility: "visible"
});
TweenLite.set(greenLineThin, {
    visibility: "visible"
});
TweenLite.set(pluginStroke, {
    visibility: "visible"
});


let tl = new TimelineLite({

});

tl.from(pluginStroke, 4, {  })
