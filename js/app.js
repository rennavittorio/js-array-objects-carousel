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
images.forEach((el, i) => {
    let numSlide = i;
    const {image, title, text} = el;
    
    let slide = getSlide(numSlide, image, title, text);

    carouselElement.innerHTML += slide;
});



//recal completed carousel + arrows
let slideElements = document.querySelectorAll('.slide');
const rightBtnElement = document.querySelector('.arrow-right');
const leftBtnElement = document.querySelector('.arrow-left');

//set index for arrows
let indexActiveSlide = 0;

//add event on carousel-arrows (infinite loop)
rightBtnElement.addEventListener('click', function(){
    
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
});


leftBtnElement.addEventListener('click', function(){

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
});


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
                <h1 class="text-end px-3">
                    ${title}
                </h1>
                <p class="slide__text text-end px-3">
                    ${text}
                </p>
            </div>
        </div>
    `

}
