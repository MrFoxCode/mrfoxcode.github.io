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

  //refresh page by clicking on title
  let titleArea = document.querySelector('.nav-title h1');
  titleArea.addEventListener('click',()=>{
  //refresh page
  location.reload();    
  });
    
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

  //BRING BACK THE NAV BAR 
  nav.classList.toggle('nav-active');
  //Animate Nav-Links li
  navLinks.forEach((link, index)=>{
      if(link.style.animation){
         link.style.animation ="";
      }else{
         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.1}s`   
      }
  });

  burger.classList.toggle('toggle');   

});
//scroll to About Section
aboutHref.addEventListener('click', () => {
  scrollTo(aboutSection);

  //BRING BACK THE NAV BAR 
  nav.classList.toggle('nav-active');
  //Animate Nav-Links li
  navLinks.forEach((link, index)=>{
      if(link.style.animation){
         link.style.animation ="";
      }else{
         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.1}s`   
      }
  });
  burger.classList.toggle('toggle');

});
//scroll to Projects Section
projectHref.addEventListener('click', () => {
  scrollTo(projectSection);

  
  //BRING BACK THE NAV BAR 
  nav.classList.toggle('nav-active');
  //Animate Nav-Links li
  navLinks.forEach((link, index)=>{
      if(link.style.animation){
         link.style.animation ="";
      }else{
         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.1}s`   
      }
  });

  burger.classList.toggle('toggle');

});

//scroll to Contact Section
contactHref.addEventListener('click', () => {
  scrollTo(contactSection);

  //BRING BACK THE NAV BAR 
  nav.classList.toggle('nav-active');
  //Animate Nav-Links li
  navLinks.forEach((link, index)=>{
      if(link.style.animation){
         link.style.animation ="";
      }else{
         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.1}s`   
      }
  });

  burger.classList.toggle('toggle');

});

//-----------------------------------------------------------------
//                  CHANGE LANGUAGE FUNCTION
//-----------------------------------------------------------------
// button to toggle the list
const englishButton = document.getElementById('englishButton');
const listLangShow = document.getElementById('languageList');

//blank space to detect click not in the button
const blankClick = document.querySelector('main');

//
// ACTIVE LANGUAGE BUTTON 
//

//OPEN THE LANGUAGE LIST OPTION
  englishButton.addEventListener('click', ()=>{
  listLangShow.classList.toggle('langList-active');
  });

  
  //DISABLE LIST IS CLICK IS OUTSIDE OF NAVBAR OR BUTTON
  blankClick.addEventListener('click', ()=>{
    if(listLangShow.classList.contains('langList-active')){
       listLangShow.classList.toggle('langList-active');  
    }else if(!listLangShow.classList.contains('langList-active')){
     //Do nothing
    }
});

//-----------------------------------------------------------------
//                  CHECK VIEWPORT REVEAL
//-----------------------------------------------------------------

//Vars
const aboutcontainer = document.querySelector('.container-main');
const blankArea = document.querySelector('main');
const aboutcontainer2 = document.querySelector('.container-main-textside');
const aboutcontainer3 = document.querySelector('.container-main-textside2');

//GET THE WHOLE SECTION IN ABOUT
const getScreenSize = document.querySelector('.container-main-bg');

//CHECK IF USER IS VIEWING ON SCREEN WHERE "WHO I AM" AND "MY JOURNEY" IS LOCATED.
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

//BARS OVER THE GRAY BAR THAT ARE BEING ANIMATED.
const getProgressBar1 = document.querySelector('.barProgress1');
const getProgressBar2 = document.querySelector('.barProgress2');
const getProgressBar3 = document.querySelector('.barProgress3');

const getProgressBar4 = document.querySelector('.barProgress4');
const getProgressBar5 = document.querySelector('.barProgress5');
const getProgressBar6 = document.querySelector('.barProgress6');

const getProgressBar7 = document.querySelector('.barProgress7');
const getProgressBar8 = document.querySelector('.barProgress8');
const getProgressBar9 = document.querySelector('.barProgress9');

const getProgressBar10 = document.querySelector('.barProgress10');
const getProgressBar11 = document.querySelector('.barProgress11');
const getProgressBar12 = document.querySelector('.barProgress12');

const allBars = [getProgressBar1, getProgressBar2, getProgressBar3,
getProgressBar4, getProgressBar5, getProgressBar6, getProgressBar7, 
getProgressBar8, getProgressBar9, getProgressBar10,getProgressBar11,getProgressBar12];


//check if progress Bars in .Skill-Bar is on the viewport
document.addEventListener('scroll', function(){
  
const checkScreen = document.documentElement.clientHeight;

//CHECK EVERY SINGLE CSS ELEMENT INSIDE THE ARRAY
for (i=0; i<allBars.length; i++){
  const getScreenTop = allBars[i].getBoundingClientRect().y;  

  //ACTIVE BAR ANIMATION BASED ON THE VIEWPORT
  if(checkScreen > getScreenTop){
    allBars[i].style.animation = 'progressBar 2s ease 0.5s forwards';
    }
  
  }

});

//---------------------------------------------------------------
//                      MOBILE FUNCTION
//---------------------------------------------------------------

// --- MOBILE MODE // RESPONSIVE NAV BAR 
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
// Nav Slide Behavior
//const navSlide=()=>{}
function navSlide(){ 
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
//----------------------------------------------------------