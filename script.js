import iPhoneData from './productsData/products.js';

let cardsContainer = document.querySelector('div.cards-container')

displayCards();

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
            </div>
        </div>
        `
    })
    cardsContainer.innerHTML += cardsHtml;
}

