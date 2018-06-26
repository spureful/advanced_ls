export default function preloader() {
  const imgs = document.images;
  console.log(imgs);
  const img_total_count = imgs.length;
  let img_loaded_count = 0;
  const preloaderBlock = document.querySelector(".js-preloader");
  const preloaderText = document.querySelector(".js-preloader__text");
	
  for(let i = 0; i < imgs.length; i++){
	const image_clone = new Image();
    image_clone.onload = img_loaded;
	image_clone.onerror = img_loaded;
	image_clone.src = imgs[i].src;
  }
  function img_loaded() {
    img_loaded_count += 1;
    preloaderText.innerText = (((100 / img_total_count) * img_loaded_count) << 0)  + "%";

    if(img_loaded_count >= img_total_count) {
      setTimeout(function foo() {
        
        if(!preloaderBlock.classList.contains("preloader_done")) {
          preloaderBlock.classList.add("preloader_done");
		} 
	 }, 1000);
	}
  }

   
// document.body.onload = function() {
//    const preloaderBlock = document.querySelector(".js-preloader");
//	const preloaderText = document.querySelector(".js-preloader__text");
//	let pers = 0;
//	
//	while (pers < 100) {
//	  pers += 10;
//	  preloaderText.innerText = pers + "%";
//	}
//	setTimeout(function foo() {
//    	  
//      if(!preloaderBlock.classList.contains("preloader_done")) {
//          preloaderBlock.classList.add("preloader_done");
//		} 
//	 }, 1000);
//	 
// };
	
};

preloader();