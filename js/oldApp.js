//START MLS 3
//Creo elementi in DOM partendo da una lista di img
let imgSrcList = [
    './assets/old/one.png',
    './assets/old/two.png',
    './assets/old/three.png',
    './assets/old/four.png',
    './assets/old/five.png'
];

let carouselElement = document.querySelector('.carousel');

for (i = 0; i < imgSrcList.length; i++){

    //mi serve la classe active solo nella prima slide che creo
    let addClassActive = ' ';
    if (i === 0){
        addClassActive = ' active';
    };

    let currentImg = `
    <div class="slide` + addClassActive + `">
        <img src="${imgSrcList[i]}" alt="">
    </div>
    `;

    carouselElement.innerHTML += currentImg;
    
};

let slideElements = document.querySelectorAll('.slide');
const rightBtnElement = document.querySelector('.arrow-right');
const leftBtnElement = document.querySelector('.arrow-left');

//setto un indice per controllare gli eventi delle frecce
let indexActiveSlide = 0;

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


