function menuAppear() {
  const openBtn = document.querySelector(".js-openmenu");
  const closeBtn = document.querySelector(".js-closemenu");
  const menuBlock = document.querySelector(".js-menu");
  const leftDoor = document.querySelector(".hamburgermenu__leftdoor");
  const rightDoor = document.querySelector(".hamburgermenu__rightdoor");
  let doorcountLeft = -100;
  let doorcountRight = 100;
  let opD = 1;
  let opM = 0;

 	
  function openDoors() {
    const promise = new Promise(function(resolve) {
      setTimeout(function doors() {
        if (doorcountLeft <= 0 && doorcountRight >= 0) {
          leftDoor.style.transform = "translateX(" + doorcountLeft + "%" + ")";
          rightDoor.style.transform = "translateX(" + doorcountRight + "%" + ")";
          doorcountLeft += 2;
          doorcountRight -= 2;
		  
        }
        setTimeout(doors, 40);
		  
      }, 40);
   
      resolve();
    });

	return promise;
  }

  
  openBtn.addEventListener("click", function() {
   	leftDoor.classList.add("hamburgermenu__leftdoor_active");
	rightDoor.classList.add("hamburgermenu__rightdoor_active");
	menuBlock.classList.add("js-menu_visible");
	doorcountLeft = -100;
    doorcountRight = 100;
    opD = 1;
    opM = 0; 
//	debugger;
	openDoors().then(function appearMenuEffect() {
      setTimeout(function foo() {
        if (opD > 0 && opM <1) {
          leftDoor.style.opacity = opD;
          rightDoor.style.opacity = opD; 
          menuBlock.style.opacity = opM; 
          opD -= 0.1;
          opM += 0.1;
		  console.log("done");
	   }
	   setTimeout(foo, 50);
	 }, 2500);
  });
  });
	
  closeBtn.addEventListener("click", function() {
    leftDoor.classList.remove("hamburgermenu__leftdoor_active");
    rightDoor.classList.remove("hamburgermenu__rightdoor_active");
	menuBlock.classList.remove("js-menu_visible");
	

  });
}

menuAppear();
