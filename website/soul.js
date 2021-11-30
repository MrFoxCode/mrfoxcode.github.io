//-----------------------------------------------------------------
//               DARK MODE / REFRESH PAGE TO START
//-----------------------------------------------------------------
//DARK THEME BUTTON
function changeDark(){
    document.body.classList.toggle('dark');

}
//go back to top once the page is refreshed 
window.onbeforeunload = function (){
    window.scrollTo(0,0);
  }  
//-----------------------------------------------------------------
//                  CHECK VIEWPORT REVEAL
//-----------------------------------------------------------------

//Vars 
const about = document.getElementById('aboutest');
const aboutcontainer = document.querySelector('.container-main');
const blankArea = document.querySelector('main');
const aboutcontainer2 = document.querySelector('.container-main-textside');
const aboutcontainer3 = document.querySelector('.container-main-textside2');


const getScreenSize = document.querySelector('.container-main-bg');
const getProgressBar1 = document.querySelector('.barProgress1');
const getProgressBar2 = document.querySelector('.barProgress2');
const getProgressBar3 = document.querySelector('.barProgress3');
const getProgressBar4 = document.querySelector('.barProgress4');
const getProgressBar5 = document.querySelector('.barProgress5');
const getProgressBar6 = document.querySelector('.barProgress6');

  document.addEventListener('scroll', function(){
  const checkScreen = document.documentElement.clientHeight;
  const getScreenTop = getScreenSize.getBoundingClientRect().y; 

  if(checkScreen < getScreenTop){   
    if(!aboutcontainer.classList.contains('container-main-active')){        
      //add animation to container at left side
      aboutcontainer.classList.toggle('container-main-active');
      //add animation to contianer at the right side         
      aboutcontainer2.classList.toggle('container-main-active');  
      aboutcontainer3.classList.toggle('container-main-active');        
    }
  }

});

//check if progress Bars in .Skill-Bar is on the viewport
document.addEventListener('scroll', function(){
const checkScreen = document.documentElement.clientHeight;
const getScreenTop = getProgressBar1.getBoundingClientRect().y;
const getScreenTop2 = getProgressBar2.getBoundingClientRect().y;
const getScreenTop3 = getProgressBar3.getBoundingClientRect().y;
const getScreenTop4 = getProgressBar4.getBoundingClientRect().y;
const getScreenTop5 = getProgressBar5.getBoundingClientRect().y;
const getScreenTop6 = getProgressBar6.getBoundingClientRect().y;

if(checkScreen > getScreenTop){
  getProgressBar1.style.animation = 'progressBar 2s ease 0.5s forwards';
}
if(checkScreen > getScreenTop2){
  getProgressBar2.style.animation = 'progressBar 2s ease 0.5s forwards';
} 
if(checkScreen > getScreenTop3){
  getProgressBar3.style.animation = 'progressBar 2s ease 0.5s forwards';
}
if(checkScreen > getScreenTop4){
  getProgressBar4.style.animation = 'progressBar 2s ease 0.5s forwards';
}   
if(checkScreen > getScreenTop5){
  getProgressBar5.style.animation = 'progressBar 2s ease 0.5s forwards';
}
if(checkScreen > getScreenTop6){
  getProgressBar6.style.animation = 'progressBar 2s ease 0.5s forwards';
}  
});


//-----------------------------------------------------------------
//               SCROLL NAV FUNCTION IN JQUERY
//-----------------------------------------------------------------
//jQuery smooth scroll function
 $('.nav-links a').on('click', function (e) {
   if (this.hash !== ''){
     e.preventDefault();

     const hash = this.hash;

     $('html, body')
       .animate({
         scrollTop: $(hash).offset().top
       },800);
   }
 });
//-----------------------------------------------------------------
//                     NAV BAR FUNCTIONS
//-----------------------------------------------------------------
// ABOUT ME 
/*
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
*/
//---------------------------------------------------------------

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

//-----------------------------------------------------------