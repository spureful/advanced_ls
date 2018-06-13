var blur = (function() {
  var wrap = document.querySelector(".js-blur-wrap");
  var cont = document.querySelector(".js-blur-container");
  return {
    set: function() {
      var imgWidth = document.querySelector(".js-blur-background").offsetWidth;
      var blurWidth = wrap.offsetWidth;
      var blurHeight = wrap.offsetHeight;
      var posLeft = -wrap.offsetLeft;
	  var posTop = -wrap.offsetTop
//	   var posLeft = -wrap.offsetLeft + (blurWidth/2);
//	  var posTop = -wrap.offsetTop + (blurHeight/2);
//	  таким способо бэкграунд подгоняется только дол определенной ширины, около 1300 пикселей
		console.log(blurHeight);
		console.log(posLeft);
		console.log(posTop);
      var blurCss = cont.style;
      blurCss.backgroundSize = imgWidth + "px" + " " + "auto";
      blurCss.backgroundPosition = posLeft + "px" + " " + posTop + "px";}};
}() );
blur.set();

window.onresize = function() {
  blur.set();
};

