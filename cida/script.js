//====================================================
//           REFRESH AND SCROLL FUNCTIONS
//====================================================

// ID SECTIONS
const topOfHome = document.getElementById('home');
const topOfAbout = document.getElementById('about-cida');
const topOfCommands = document.getElementById('commands');
const topOfCreator = document.getElementById('creator');

// NAV BAR ID REFS
const homeRef = document.getElementById('nav-home');
const aboutRef = document.getElementById('nav-about');
const commandsRef = document.getElementById('nav-commands');
const creatorRef = document.getElementById('nav-creator');


// FUNCTIONS


//go back to top once the page is refreshed 
window.onbeforeunload = function (){   
    topOfHome.scrollIntoView();  
}


// FUNCTION SCROLL WITH SCROLL BEHAVIOR
function scrollTo(element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }

homeRef.addEventListener('click', ()=>{
scrollTo(topOfHome);
});

aboutRef.addEventListener('click', ()=>{
    scrollTo(topOfAbout);
});

commandsRef.addEventListener('click', ()=>{
    scrollTo(topOfCommands);
});

creatorRef.addEventListener('click', ()=>{
    scrollTo(topOfCreator);
});


//====================================================
//       CHANGE IMAGE IN COMMANDS SECTION
//====================================================
const pokedex = document.querySelector('.cpokedex h3');
const mute = document.querySelector('.cmute h3');
const kick = document.querySelector('.ckick h3');
const ban = document.querySelector('.cban h3');
const purge = document.querySelector('.cpurge h3');

let img = document.getElementById('pokedexgif');

pokedex.addEventListener('click', ()=>{
    img.src = "/cida/images/gifs/pokedex.gif";
});

mute.addEventListener('click', ()=>{
    img.src = "/cida/images/gifs/mute.gif";
});

kick.addEventListener('click', ()=>{
    img.src = "/cida/images/gifs/kick.gif";
});

ban.addEventListener('click', ()=>{
    img.src = "/cida/images/gifs/ban.gif";
});

purge.addEventListener('click', ()=>{
    img.src = "/cida/images/gifs/purge.gif";
});

//====================================================