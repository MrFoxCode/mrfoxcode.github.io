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

let pageRefresh = document.querySelector('.cida-title');
//reflesh page
pageRefresh.addEventListener('click', ()=>{
location.reload();
});


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
navBar.classList.remove('active-nav');
});

aboutRef.addEventListener('click', ()=>{
    scrollTo(topOfAbout);
    navBar.classList.remove('active-nav');
});

commandsRef.addEventListener('click', ()=>{
    scrollTo(topOfCommands);
    navBar.classList.remove('active-nav');
});

creatorRef.addEventListener('click', ()=>{
    scrollTo(topOfCreator);
    navBar.classList.remove('active-nav');
});


//====================================================
//       CHANGE IMAGE IN COMMANDS SECTION
//====================================================
const pokedex = document.querySelector('.cpokedex h3');
const mute = document.querySelector('.cmute h3');
const kick = document.querySelector('.ckick h3');
const ban = document.querySelector('.cban h3');
const purge = document.querySelector('.cpurge h3');

//RESPONSIVE DIV
const pokedexR = document.querySelector('.pokeR');
const muteR = document.querySelector('.muteR');
const kickR = document.querySelector('.kickR');
const banR = document.querySelector('.banR');
const purgeR = document.querySelector('.purgeR');

//SCREEN ID
let img = document.getElementById('pokedexgif');

// CHANGES THE GIF DIRECTORY
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
//                 RESPONSIVE DIV
//====================================================

pokedexR.addEventListener('click', ()=>{
    img.src = "/cida/images/gifs/pokedex.gif";
});
muteR.addEventListener('click', ()=>{
    img.src = "/cida/images/gifs/mute.gif";
});

kickR.addEventListener('click', ()=>{
    img.src = "/cida/images/gifs/kick.gif";
});

banR.addEventListener('click', ()=>{
    img.src = "/cida/images/gifs/ban.gif";
});

purgeR.addEventListener('click', ()=>{
    img.src = "/cida/images/gifs/purge.gif";
});



//====================================================
//    BURGER - ACTIVE NAV BAR IN RESPONSIVE MODE
//====================================================

let burger = document.querySelector('.burger');
let navBar = document.querySelector('.nav-options');

burger.addEventListener('click', ()=>{
    navBar.classList.toggle('active-nav');
});


//====================================================