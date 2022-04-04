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
const pokedex = document.querySelector('.cpokedex h1');
const mute = document.querySelector('.cmute h1');

const muteID = document.getElementById('mutegif');


pokedex.addEventListener('click', ()=>{
    let img = document.getElementById('pokedexgif');
    let imageUrl = img.src;
    img.src = "/cida/images/gifs/pokedex.gif";
    img.src = imageUrl;
});

mute.addEventListener('click', ()=>{
    let img = document.getElementById('pokedexgif');
    let imageUrl = img.src;
    img.src = "/cida/images/gifs/mute.gif";
    img.src = imageUrl;
});


/*
pokedex.addEventListener('click', ()=>{   
    if(!pokedexID.classList.contains('screen-active')&&(muteID.classList.contains('screen-active')) ){
    pokedexID.classList.add('screen-active');
    muteID.classList.remove('screen-active');
    }else if(pokedexID.classList.contains('screen-active')){
    //nothing;
    }else{
        pokedexID.classList.add('screen-active');
    }    
});

mute.addEventListener('click', ()=>{   
    if(!muteID.classList.contains('screen-active')&&(pokedexID.classList.contains('screen-active')) ){
    muteID.classList.add('screen-active');
    pokedexID.classList.remove('screen-active');
    }else if(muteID.classList.contains('screen-active')){
    //nothing;
    }else{
        muteID.classList.toggle('screen-active');
        
    }    
});
*/

//====================================================