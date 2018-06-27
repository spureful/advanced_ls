export default function preloader() {
  const imgs = document.images;
//  console.log(imgs);
  const imgTotalCount = imgs.length;
  let imgLoadedCount = 0;
  const preloaderBlock = document.querySelector(".js-preloader");
  const preloaderText = document.querySelector(".js-preloader__text");

  for (let i = 0; i < imgs.length; i++) {
    const imageClone = new Image();
    imageClone.onload = imgLoaded;
    imageClone.onerror = imgLoaded;
    imageClone.src = imgs[i].src;
  }
  function imgLoaded() {
    imgLoadedCount += 1;
	let countPerc = ((100 / imgTotalCount) * imgLoadedCount);
	let fixCount = countPerc.toFixed(); 
    preloaderText.innerText = fixCount + "%";
//      (((100 / img_total_count) * img_loaded_count) << 0) + "%";

    if (imgLoadedCount >= imgTotalCount) {
      setTimeout(function foo() {
        if (!preloaderBlock.classList.contains("preloader_done")) {
          preloaderBlock.classList.add("preloader_done");
		} 
	 }, 1000);
        }
  }


// document.body.onload = function() {
//    const preloaderBlock = document.querySelector(".js-preloader");
//	const preloaderText = document.querySelector(".js-preloader__text");
//	
//
//	  preloaderText.innerText = 53 + "%";
//
//	setTimeout(function foo() {
//    	  
//      if (!preloaderBlock.classList.contains("preloader_done")) {
//          preloaderBlock.classList.add("preloader_done");
//		} 
//	 }, 1000);
//	 
// };
	
};


if (document.getElementsByClassName("js-preloader").length > 0) {
  preloader();
};
