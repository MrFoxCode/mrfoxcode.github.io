//-----------------------------------------------------------------
//               DARK MODE / REFRESH PAGE TO START
//-----------------------------------------------------------------
//DARK THEME BUTTON
function changeDark(){
    document.body.classList.toggle('dark');

}

//go back to top once the page is refreshed 
window.onbeforeunload = function (){
  
  var topOfThePage = document.getElementById('home');  
  topOfThePage.scrollIntoView();
  
 //window.scrollTo(0,0);
  }
    
 //go to contact section by clcking
  function letsTalk(){
    let buttonTalk = document.getElementById('talkButton');
    let getContactId = document.getElementById('contact');

    buttonTalk.addEventListener('click',()=>{
     getContactId.scrollIntoView({behavior: "smooth"});  
    });    
 
  }
  letsTalk();

//-----------------------------------------------------------------
//           SCROLL FUNCTION (without using #href)
//-----------------------------------------------------------------

// navbar ID Refs
let homeHref = document.getElementById('homeHref');
let aboutHref = document.getElementById('aboutHref');
let projectHref = document.getElementById('projectHref');
let contactHref = document.getElementById('contactme');

// ID sections
let homeSection = document.getElementById('home');
let aboutSection = document.getElementById('aboutme');
let projectSection = document.getElementById('projects');
let contactSection = document.getElementById('contact');

// FUNCTION SCROLL WITH SCROLL BEHAVIOR
function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}
//Scroll to Home Section
homeHref.addEventListener('click', () => {
  scrollTo(homeSection);
});
//scroll to About Section
aboutHref.addEventListener('click', () => {
  scrollTo(aboutSection);
});
//scroll to Projects Section
projectHref.addEventListener('click', () => {
  scrollTo(projectSection);
});

//scroll to Contact Section
contactHref.addEventListener('click', () => {
  scrollTo(contactSection);
});

//-----------------------------------------------------------------
//                  CHECK VIEWPORT REVEAL
//-----------------------------------------------------------------

//Vars
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

  if(checkScreen > getScreenTop){   
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
/*

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

 */
//---------------------------------------------------------------
//                     MOBILE FUNCTION
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