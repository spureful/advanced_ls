//import preloader from "./modules/preloader";
import "./modules/blur";
import "./modules/slider";
import "./modules/headerparallax";
import menuAppear from "./modules/menu";

const preloader = (function() {

  const preloaderImg = document.getElementsByTagName("*");
  const preloaderBlock = document.querySelector(".js-preloader");
  const preloaderText = document.querySelector(".js-preloader__text");
  const regImg = /background-image: url\(['"]?(.*?)['"]?\)/i;
  const wrapper = document.querySelector(".js-wrapper-preloader");
  const imagesArray = [];	
  let addImg;
  let img;
  let allImages;
  let percents = 0;
	
  return {
    imgAdd: function() {
	  addImg = document.createElement("img");
	  addImg.setAttribute("src", img);
	  imagesArray.push(addImg);
		
	},
	  
	show: function() {
//	 wrapper.classList.add("wrapper-hide");
		
	 return new Promise((resolve, reject) => {
	   for (let i = 0; i < preloaderImg.length; i++ ) {
		 if (preloaderImg[i].matches("img")) {
		   img = preloaderImg[i].getAttribute("src");
		   this.imgAdd();
		 } else if (preloaderImg[i].hasAttribute("style") && regImg.test(preloaderImg[i].getAttribute("style"))) {
			img = (preloaderImg[i].getAttribute("style").slice(22, -2));
			 this.imgAdd();
		 }
	   }
	
	
		
	allImages = 100 / imagesArray.length;
	
	for (let j = 0; j < imagesArray.length; j++) {
	  imagesArray[j].onload = function() {
		percents += allImages;
		 console.log(percents.toFixed()); 
		if (percents < 100) {
		preloaderText.innerText = percents.toFixed() + "%";
		}  else {
			percents = 100;
			preloaderText.innerText = percents + "%";
		}
		  
		  if(percents === 100) {
			  resolve();
		  }
	  }	
	   };
	}).then(function() {
		 
		 preloaderBlock.classList.add("preloader_done");
	 });
	}
	  
	};
})();

preloader.show();
