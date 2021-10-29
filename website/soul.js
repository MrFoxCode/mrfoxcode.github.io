//
// CODE HERE
//
//dark theme mode
function changeDark(){
    document.body.classList.toggle('dark');

}

// --- MOBILE MODE // RESPONSIVE NAV BAR 

// Nav Slide Behavior
//const navSlide=()=>{}
function navSlide(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggle sidebar (nav)
    burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');

    //Animate Nav-Links li
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
           link.style.animation ="";
        }else{
           link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.2}s`   
        }
    });


    burger.classList.toggle('toggle');    


  });
    
}
navSlide();
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

//jQuery smooth scroll function

 $('.nav-links a').on('click', function (e) {
   if (this.hash !== '') {
     e.preventDefault();

     const hash = this.hash;

     $('html, body')
       .animate({
         scrollTop: $(hash).offset().top
       },800);
   }
 });


//----------------------------------------------------------
//                   NAV BAR FUNCTIONS
//----------------------------------------------------------

const about = document.getElementById('aboutest');
const aboutcontainer = document.querySelector('.container-main');
const blankArea = document.querySelector('main');
const disableBar = document.querySelector('.container-main-disable');
const aboutcontainer2 = document.querySelector('.container-main-textside');

// ABOUT ME 

//toggle information clicking on about
function toggleAbout(){     
    //active the side bar(container) by clicking on ABOUT ME and keep it on the screen
    about.addEventListener('click', function(){
      if(!aboutcontainer.classList.contains('container-main-active')){        
        //add animation to container at left side
         aboutcontainer.classList.toggle('container-main-active');
        //add animation to contianer at the right side         
         aboutcontainer2.classList.toggle('container-main-active');
         
         
      } 
    });
    // check if the bar is in the screen already
    aboutcontainer.addEventListener('click', function(){
     if(aboutcontainer.classList.contains('container-main-active')){
     // aboutcontainer.classList.toggle('container-main-active')
     }
});


}
toggleAbout();

//---------------------------------------------------------------

