
import data from './productsData/products.js';

console.log(data);
displayCards();

function displayCards() {

    var cardsHtml = ""
    data.forEach(() => {
        cardsHtml += `
        <div class="slider-box">
            <div class="slider-img">
                <img src="https://static.toiimg.com/photo/71452088/Apple-iPhone-12-Pro.jpg" alt="">
            </div>
            <div class="slider-details">
                <div class="type">
                    <a href="#">Apple iPhone 12 Pro</a>
                </div>
                <div class="price-container">
                    <a href="#"><span class="price">1100 &euro;</span></a>
                </div>
            </div>
        </div>
        `
    });

    document.querySelector('div.slider-container').innerHTML = cardsHtml;
}