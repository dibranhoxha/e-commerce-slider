let sliderContainer = document.querySelector('div.slider-container');
let leftArrow = document.querySelector('div.navigation-left');
let rightArrow = document.querySelector('div.navigation-right');
let card = document.querySelector("div.slider-box")

const iphoneData = [
    {
        id: 1,
        name: 'Apple iphone 12 Pro max - Space Grey',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro_Max-retina.png',
        price: "1500 &euro;",
        market: 'Back Market',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(16.209)",
        shipping: 'Free shipping'
    },
    {
        id: 2,
        name: 'Apple iphone 12 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro-retina.png',
        price: "1300 &euro;",
        market: 'Cyber Port',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(7.534)",
        shipping: '+ 5.84 &euro; shipping...'
    },
    {
        id: 3,
        name: 'Apple iPhone 12',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12-retina.png',
        price: "1100 &euro;",
        market: 'Telekom',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(8.689)",
        shipping: 'Free shipping'
    },
    {
        id: 4,
        name: 'Apple iPhone 11 Pro max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11ProMax.png',
        price: "999 &euro;",
        market: 'Cleverbuy',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(25.176)",
        shipping: 'Free shipping'
    },
    {
        id: 5,
        name: 'Apple iPhone 11 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11PRO.png',
        price: "900 &euro;",
        market: 'Back Market',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(8.689)",
        shipping: 'Free shipping'
    },
    {
        id: 6,
        name: 'Apple iPhone 11',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11.png',
        price: "799 &euro;",
        market: 'Cyber Port',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(12.304)",
        shipping: '+ 6.64 &euro; shipping...'
    },
    {
        id: 7,
        name: 'Apple iPhone XS max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXsMax.png',
        price: "650 &euro;",
        market: 'Telekom',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(15.126)",
        shipping: '+ 3.84 &euro; shipping...'
    },
    {
        id: 8,
        name: 'Apple iPhone XS',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXs.png',
        price: "599 &euro;",
        market: 'Cleverbuy',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(5.346)",
        shipping: 'Free shipping'
    },
    {
        id: 9,
        name: 'Apple iPhone XR',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXR.png',
        price: "550 &euro;",
        market: 'Cyberport',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(5.076)",
        shipping: 'Free shipping'
    },
    {
        id: 10,
        name: 'Apple iPhone X',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXs.png',
        price: "480 &euro;",
        market: 'Cyberport',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(15.146)",
        shipping: 'Free shipping'
    },
    {
        id: 11,
        name: 'Apple iPhone 8 Plus',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone8Plus.png',
        price: "330 &euro;",
        market: 'Telekom',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(2.223)",
        shipping: '+ 5.84 &euro; shipping...'
    },
    {
        id: 12,
        name: 'Apple iphone 12 Pro max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro_Max-retina.png',
        price: "1500 &euro;",
        market: 'Cleverbuy',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(25.176)",
        shipping: 'Free shipping'
    },
    {
        id: 13,
        name: 'Apple iphone 12 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro-retina.png',
        price: "1300 &euro;",
        market: 'Cleverbuy',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(4.564)",
        shipping: 'Free shipping'
    },
    {
        id: 14,
        name: 'Apple iPhone 12',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12-retina.png',
        price: "1100 &euro;",
        market: 'Back Market',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(6.143)",
        shipping: '+ 5.84 &euro; shipping...'
    },
    {
        id: 15,
        name: 'Apple iPhone 11 Pro max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11ProMax.png',
        price: "999 &euro;",
        market: 'Back Market',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(8.156)",
        shipping: 'Free shipping'
    },
    {
        id: 16,
        name: 'Apple iPhone 11 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11PRO.png',
        price: "900 &euro;",
        market: 'Back Market',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(3.176)",
        shipping: 'Free shipping'
    },
    {
        id: 17,
        name: 'Apple iPhone 11',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11.png',
        price: "799 &euro;",
        market: 'Telekom',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(15.176)",
        shipping: '+ 5.84 &euro; shipping...'
    },
    {
        id: 18,
        name: 'Apple iPhone XS max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXsMax.png',
        price: "650 &euro;",
        market: 'Cyberport',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(12.136)",
        shipping: '+ 5.84 &euro; shipping...'
    },
    {
        id: 19,
        name: 'Apple iPhone XS',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXs.png',
        price: "599 &euro;",
        market: 'Back Market',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(7.689)",
        shipping: 'Free shipping'
    },
    {
        id: 20,
        name: 'Apple iPhone XR',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXR.png',
        price: "550 &euro;",
        market: 'Cleverbuy',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(9.876)",
        shipping: 'Free shipping'
    },
    {
        id: 21,
        name: 'Apple iPhone X',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXs.png',
        price: "480 &euro;",
        market: 'Cleverbuy',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(5.432)",
        shipping: 'Free shipping'
    },
    {
        id: 22,
        name: 'Apple iPhone 8 Plus',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone8Plus.png',
        price: "330 &euro;",
        market: 'Telekom',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(7.176)",
        shipping: '+ 5.84 &euro; shipping...'
    },
    {
        id: 23,
        name: 'Apple iphone 12 Pro max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro_Max-retina.png',
        price: "1500 &euro;",
        market: 'Cyberport',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(25.176)",
        shipping: 'Free shipping'
    },
    {
        id: 24,
        name: 'Apple iphone 12 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro-retina.png',
        price: "1300 &euro;",
        market: 'Cleverbuy',
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(5.112)",
        shipping: '+ 5.84 ${&euro}; shipping...'
    },
];

displayCards(iphoneData);
leftArrow.addEventListener('click', () => scroll(leftArrow.className));
rightArrow.addEventListener('click', () => scroll(rightArrow.className));




function displayCards(iPhoneData) {
    let template = document.querySelector("template");
    iPhoneData.map(product => {
        let clone = template.content.cloneNode(true);
        let img = clone.querySelector(".slider-img img");
        let model = clone.querySelector(".model-container a");
        let price = clone.querySelector(".price-container .price");
        let market = clone.querySelector('.market');
        let feedback = clone.querySelector(".feedback-stars");
        let feedbackAmount = clone.querySelector(".feedback-amount");
        let shipping = clone.querySelector(".product-shipping");

        img.setAttribute("src", product.photoUrl);
        model.innerText = product.name;
        price.innerHTML = product.price;
        market.innerText = product.market;
        feedback.innerHTML = product.feedback;
        feedbackAmount.innerHTML = product.feedbackAmount;
        shipping.innerHTML = product.shipping;
        sliderContainer.appendChild(clone);

    })


    // var cardsHtml = ""
    // iPhoneData.map(product => {
    //     cardsHtml += `
    //     <div class="slider-box">
    //         <div class="slider-img">
    //             <img src="${product.photoUrl}" alt="">
    //         </div>
    //         <div class="slider-details">
    //             <div class="type">
    //                 <a href="#">${product.name}</a>
    //             </div>
    //             <div class="price-container">
    //                 <a href="#"><span class="price">${product.price} &euro;</span></a>
    //             </div>
    //             <div class="feedback">
    //                 <span class="feedback-stars">${product.feedback}</span>
    //             </div>
    //         </div>
    //     </div>
    //     `
    // })
    // sliderContainer.innerHTML += cardsHtml;
}


function checkScroll() {
    let difference = sliderContainer.scrollWidth - sliderContainer.offsetWidth;
    // console.log(sliderContainer.scrollLeft, difference)
    if (sliderContainer.scrollLeft >= difference) {
        rightArrow.style.display = "none";
    } else if (sliderContainer.scrollLeft > 0) {
        leftArrow.style.display = "flex";
        rightArrow.style.display = "flex"
    } else {
        leftArrow.style.display = "none";
    }
}

function scroll(scrollSide) {
    scrollSide == 'navigation navigation-left' ? sliderContainer.scrollLeft -= (sliderContainer.offsetWidth - sliderContainer.offsetLeft / 2) : sliderContainer.scrollLeft += (sliderContainer.offsetWidth - sliderContainer.offsetLeft / 2);
    checkScroll();
}

