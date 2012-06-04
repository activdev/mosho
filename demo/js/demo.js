
mosho.plugin({
  name: "scaleActiveSlide",
  preShow: function (evt) {
    prv = evt.detail.prevSlide;
    nxt = evt.detail.nextSlide;
    if (prv) { prv.scale(0.25) }
    if (nxt) { nxt.scale(4) }
  }
});

mosho.enter("nonlinear-more", function () {
  setTimeout(function () {
    document.getElementById("nonlinear-tag").innerHTML = "did I mention...";
  }, 250);
});

mosho.init();