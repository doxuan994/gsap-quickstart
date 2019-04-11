let svgOriginButton = document.getElementById("svgOrigin");
let transformOriginButton = document.getElementById("transformOrigin");
let svgRects = document.querySelectorAll(".svgRect");

// Reset
let myTween = TweenLite.to({}, 1, {});


svgOriginButton.addEventListener('click', function() {

    // Reset
    myTween.seek(0).kill();

    myTween = TweenMax.to(svgRects, 1, { rotation: 360, svgOrigin: "150 150" });

});


transformOriginButton.addEventListener('click', function() {

    // Reset
    myTween.seek(0).kill();

    myTween = TweenMax.to(svgRects, 1, { rotation: 360, transformOrigin: "50% 50%" });

});
