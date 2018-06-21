function menuAppear() {
  const openBtn = document.querySelector(".js-openmenu");
  const closeBtn = document.querySelector(".js-closemenu");
  const menuBlock = document.querySelector(".js-menu");
  const leftDoor = document.querySelector(".hamburgermenu__leftdoor");
  const rightDoor = document.querySelector(".hamburgermenu__rightdoor");
  let doorcountLeft = -100;
  let doorcountRight = 100;
  let doorcountLeftAfter = 0;
  let doorcountRightAfter = 0;
  let opD = 1;
  let opM = 0;
  let closeInit = false;
  let openInit = false;

  openBtn.addEventListener("click", function() {
   	leftDoor.classList.add("hamburgermenu__leftdoor_active");
	rightDoor.classList.add("hamburgermenu__rightdoor_active");
	menuBlock.classList.add("js-menu_visible");
	doorcountLeft = -100;
    doorcountRight = 100;
    opD = 1;
    opM = 0; 	
  
     setTimeout(function doors() {
       if (doorcountLeft <= 0 && doorcountRight >= 0) {
          leftDoor.style.transform = "translateX(" + doorcountLeft + "%" + ")";
          rightDoor.style.transform = "translateX(" + doorcountRight + "%" + ")";
          doorcountLeft += 2;
          doorcountRight -= 2;
		
        }
        setTimeout(doors, 40);
		
      openInit = true;
         
      }, 40);
   
     if(openInit = true) {
      setTimeout(function foo() {
        if (opD > 0 && opM <1) {
          leftDoor.style.opacity = opD;
          rightDoor.style.opacity = opD; 
          menuBlock.style.opacity = opM; 
          opD -= 0.1;
          opM += 0.1;
		  
	   }
	   setTimeout(foo, 50);
	 }, 2500);
     }
  });
  
  
    
  closeBtn.addEventListener("click", function() {
    doorcountLeftAfter = 0;
    doorcountRightAfter = 0;
    setTimeout(function closeDoor() {
     if (doorcountLeftAfter >= -100 && doorcountRightAfter <= 100) {
      leftDoor.style.opacity = 1; 
      rightDoor.style.opacity = 1;
       menuBlock.style.opacity = 0;
      leftDoor.style.transform = "translateX(" + doorcountLeftAfter + "%" + ")";
      rightDoor.style.transform = "translateX(" + doorcountRightAfter + "%" + ")";
      doorcountLeftAfter -= 2;
      doorcountRightAfter += 2;
   
     }
      setTimeout(closeDoor, 50);
       
      closeInit = true;
         
    }, 50);
      
    if (closeInit = true) {  
     setTimeout (function closeFoo() { leftDoor.classList.remove("hamburgermenu__leftdoor_active");
      rightDoor.classList.remove("hamburgermenu__rightdoor_active");
	  menuBlock.classList.remove("js-menu_visible");
 }, 2500);
    }
	

  });
}

menuAppear();
