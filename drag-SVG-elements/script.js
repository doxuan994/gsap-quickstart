let circle = document.getElementById('circle');

let rect = document.getElementById('rect');

let rectBorder = document.getElementById('rectBorder');


Draggable.create(rect, {
    type: "x, y",
    bounds: rectBorder,
    overshootTolerance: 0,
    throwProps: true
});


TweenLite.set(circle, {transformOrigin:"50% 50%"});

Draggable.create(circle, {
    type: "rotation",
    throwProps: true
});
