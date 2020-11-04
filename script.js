import iPhoneData from './products-data/products.js';

let sliderContainer = document.querySelector('div.slider-container');
let leftArrow = document.querySelector('div.navigation-left');
let rightArrow = document.querySelector('div.navigation-right');


displayCards();
leftArrow.addEventListener('click', () => scroll(leftArrow.className));
rightArrow.addEventListener('click', () => scroll(rightArrow.className));



function displayCards() {

    var cardsHtml = ""
    iPhoneData.map(product => {
        cardsHtml += `
        <div class="slider-box">
            <div class="slider-img">
                <img src="${product.photoUrl}" alt="">
            </div>
            <div class="slider-details">
                <div class="type">
                    <a href="#">${product.name}</a>
                </div>
                <div class="price-container">
                    <a href="#"><span class="price">${product.price} &euro;</span></a>
                </div>
                <div class="feedback">
                    <span class="feedback-stars">${product.feedback}</span>
                </div>
            </div>
        </div>
        `
    })
    sliderContainer.innerHTML += cardsHtml;
}

function scroll(scrollSide) {
    (scrollSide == 'navigation navigation-left') ? sliderContainer.scrollLeft -= 100 : sliderContainer.scrollLeft += 100;
}

