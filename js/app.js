//initial DB
const images = [
    {
        image: './assets/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    
    {
        image: './assets/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    
    {
        image: './assets/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    
    {
        image: './assets/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    
    {
        image: './assets/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



//recall carousel element
let carouselElement = document.querySelector('.carousel');

//make slide in DOM
images.forEach(({image, title, text}, i) => {
    let numSlide = i;
    // const {image, title, text} = el; posso destrutturare direttamente in funzione
    
    let slide = getSlide(numSlide, image, title, text);

    carouselElement.innerHTML += slide;
});


//recal completed carousel + arrows
let slideElements = document.querySelectorAll('.slide');
const rightBtnElement = document.querySelector('.arrow-right');
const leftBtnElement = document.querySelector('.arrow-left');
let backwardBtnElement = document.querySelector('.backward-btn');
let pauseBtnElement = document.querySelector('.pause-btn');
let stopBtnElement = document.querySelector('.stop-btn');
let forwardBtnElement = document.querySelector('.forward-btn');


//set index and clock for events
let indexActiveSlide = 0;
let clock = undefined;
//add event on carousel-arrows (infinite loop)
rightBtnElement.addEventListener('click', goForward);
leftBtnElement.addEventListener('click', goBack);
//add events on btns
backwardBtnElement.addEventListener('click', function(){
    if (clock === undefined){
        clock = setInterval(goBack, 1000)
        // console.log('ongoing clock', clock);
    }
})

forwardBtnElement.addEventListener('click', function(){
    if (clock === undefined){
        clock = setInterval(goForward, 1000)
        // console.log('ongoing clock', clock);
    }
});

pauseBtnElement.addEventListener('click', function(){
    clearInterval(clock);
    clock = undefined;
});


stopBtnElement.addEventListener('click', function(){
    clearInterval(clock);
    clock = undefined;
    goStart();
})




/////////////////////////////////////////////////////
//////////////////////// FUNZIONI //////////////////
////////////////////////////////////////////////////

function getSlide (numSlide, src, title, text){

    let addClassActive = '';
    if (numSlide === 0){
        addClassActive = 'active';
    };

    return `
        <div class="slide__title slide ${addClassActive}">
            <img src="${src}" alt="">
            <div class="slide__content dark-text-bg">
                <h1 class="text-center px-3">
                    ${title}
                </h1>
                <p class="slide__text text-center px-3">
                    ${text}
                </p>
            </div>
        </div>
    `

}


function goForward (){

    let currentSlide = slideElements[indexActiveSlide];
    currentSlide.classList.remove('active');

    //controllo l'indice per creare uno scroll infinito
    if (indexActiveSlide < slideElements.length - 1){
        indexActiveSlide +=1;
    
    } else {
        indexActiveSlide = 0;
    }
    
    let nextSlide = slideElements[indexActiveSlide]; 
    nextSlide.classList.add('active');

    console.log(indexActiveSlide);

}

function goBack(){

    let currentSlide = slideElements[indexActiveSlide];
    currentSlide.classList.remove('active');

    if (indexActiveSlide > 0){
        indexActiveSlide -=1;
    } else {
        indexActiveSlide = slideElements.length - 1;
    }
    
    let nextSlide = slideElements[indexActiveSlide]; 
    nextSlide.classList.add('active');

    console.log(indexActiveSlide);

}


function goStart (){

    let currentSlide = slideElements[indexActiveSlide];
    currentSlide.classList.remove('active');
    
    indexActiveSlide = 0;

    let nextSlide = slideElements[indexActiveSlide]; 
    nextSlide.classList.add('active');

    console.log(indexActiveSlide);

}
