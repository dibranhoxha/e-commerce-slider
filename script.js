let sliderContainer = document.querySelector('div.slider-container');
let leftArrow = document.querySelector('div.navigation-left');
let rightArrow = document.querySelector('div.navigation-right');
let card = document.querySelector("div.slider-box")

const iphoneData = [
    {
        id: 1,
        name: 'Apple iphone 12 Pro max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro_Max-retina.png',
        price: 1500,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(16.209)"
    },
    {
        id: 2,
        name: 'Apple iphone 12 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro-retina.png',
        price: 1300,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(7.534)"
    },
    {
        id: 3,
        name: 'Apple iPhone 12',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12-retina.png',
        price: 1100,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(8.689)"
    },
    {
        id: 4,
        name: 'Apple iPhone 11 Pro max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11ProMax.png',
        price: 999,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(25.176)"
    },
    {
        id: 5,
        name: 'Apple iPhone 11 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11PRO.png',
        price: 900,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(8.689)"
    },
    {
        id: 6,
        name: 'Apple iPhone 11',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11.png',
        price: 799,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(12.304)"
    },
    {
        id: 7,
        name: 'Apple iPhone XS max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXsMax.png',
        price: 650,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(15.126)"
    },
    {
        id: 8,
        name: 'Apple iPhone XS',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXs.png',
        price: 599,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(5.346)"
    },
    {
        id: 9,
        name: 'Apple iPhone XR',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXR.png',
        price: 550,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(5.076)"
    },
    {
        id: 10,
        name: 'Apple iPhone X',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXs.png',
        price: 480,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(15.146)"
    },
    {
        id: 11,
        name: 'Apple iPhone 8 Plus',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone8Plus.png',
        price: 330,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(2.223)"
    },
    {
        id: 12,
        name: 'Apple iphone 12 Pro max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro_Max-retina.png',
        price: 1500,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(25.176)"
    },
    {
        id: 13,
        name: 'Apple iphone 12 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro-retina.png',
        price: 1300,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(4.564)"
    },
    {
        id: 14,
        name: 'Apple iPhone 12',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12-retina.png',
        price: 1100,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(6.143)"
    },
    {
        id: 15,
        name: 'Apple iPhone 11 Pro max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11ProMax.png',
        price: 999,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(8.156)"
    },
    {
        id: 16,
        name: 'Apple iPhone 11 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11PRO.png',
        price: 900,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(3.176)"
    },
    {
        id: 17,
        name: 'Apple iPhone 11',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11.png',
        price: 799,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(15.176)"
    },
    {
        id: 18,
        name: 'Apple iPhone XS max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXsMax.png',
        price: 650,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(12.136)"
    },
    {
        id: 19,
        name: 'Apple iPhone XS',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXs.png',
        price: 599,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(7.689)"
    },
    {
        id: 20,
        name: 'Apple iPhone XR',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXR.png',
        price: 550,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(9.876)"
    },
    {
        id: 21,
        name: 'Apple iPhone X',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXs.png',
        price: 480,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(5.432)"
    },
    {
        id: 22,
        name: 'Apple iPhone 8 Plus',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone8Plus.png',
        price: 330,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(7.176)"
    },
    {
        id: 23,
        name: 'Apple iphone 12 Pro max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro_Max-retina.png',
        price: 1500,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(25.176)"
    },
    {
        id: 24,
        name: 'Apple iphone 12 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro-retina.png',
        price: 1300,
        feedback: '&starf;&starf;&starf;&starf;&starf;',
        feedbackAmount: "(5.112)"
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
        img.setAttribute("src", product.photoUrl);
        let model = clone.querySelector(".type a");
        model.innerText = product.name;
        let price = clone.querySelector(".price-container .price");
        price.innerText = product.price;
        let feedback = clone.querySelector(".feedback-stars");
        feedback.innerHTML = product.feedback;
        let feedbackAmount = clone.querySelector(".feedback-amount");
        feedbackAmount.innerHTML = product.feedbackAmount;
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

