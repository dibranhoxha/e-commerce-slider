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
        feedback: '&starf;'
    },
    {
        id: 2,
        name: 'Apple iphone 12 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro-retina.png',
        price: 1300,
        feedback: '&starf;'
    },
    {
        id: 3,
        name: 'Apple iPhone 12',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12-retina.png',
        price: 1100,
        feedback: '&starf;'
    },
    {
        id: 4,
        name: 'Apple iPhone 11 Pro max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11ProMax.png',
        price: 999,
        feedback: '&starf;'
    },
    {
        id: 5,
        name: 'Apple iPhone 11 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11PRO.png',
        price: 900,
        feedback: '&starf;'
    },
    {
        id: 6,
        name: 'Apple iPhone 11',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11.png',
        price: 799,
        feedback: '&starf;'
    },
    {
        id: 7,
        name: 'Apple iPhone XS max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXsMax.png',
        price: 650,
        feedback: '&starf;'
    },
    {
        id: 8,
        name: 'Apple iPhone XS',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXs.png',
        price: 599,
        feedback: '&starf;'
    },
    {
        id: 9,
        name: 'Apple iPhone XR',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXR.png',
        price: 550,
        feedback: '&starf;'
    },
    {
        id: 10,
        name: 'Apple iPhone X',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXs.png',
        price: 480,
        feedback: '&starf;'
    },
    {
        id: 11,
        name: 'Apple iPhone 8 Plus',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone8Plus.png',
        price: 330,
        feedback: '&starf;'
    },
    {
        id: 12,
        name: 'Apple iphone 12 Pro max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro_Max-retina.png',
        price: 1500,
        feedback: '&starf;'
    },
    {
        id: 13,
        name: 'Apple iphone 12 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro-retina.png',
        price: 1300,
        feedback: '&starf;'
    },
    {
        id: 14,
        name: 'Apple iPhone 12',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12-retina.png',
        price: 1100,
        feedback: '&starf;'
    },
    {
        id: 15,
        name: 'Apple iPhone 11 Pro max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11ProMax.png',
        price: 999,
        feedback: '&starf;'
    },
    {
        id: 16,
        name: 'Apple iPhone 11 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11PRO.png',
        price: 900,
        feedback: '&starf;'
    },
    {
        id: 17,
        name: 'Apple iPhone 11',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone11.png',
        price: 799,
        feedback: '&starf;'
    },
    {
        id: 18,
        name: 'Apple iPhone XS max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXsMax.png',
        price: 650,
        feedback: '&starf;'
    },
    {
        id: 19,
        name: 'Apple iPhone XS',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXs.png',
        price: 599,
        feedback: '&starf;'
    },
    {
        id: 20,
        name: 'Apple iPhone XR',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXR.png',
        price: 550,
        feedback: '&starf;'
    },
    {
        id: 21,
        name: 'Apple iPhone X',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphoneXs.png',
        price: 480,
        feedback: '&starf;'
    },
    {
        id: 22,
        name: 'Apple iPhone 8 Plus',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/149432-compare-page-iphone8Plus.png',
        price: 330,
        feedback: '&starf;'
    },
    {
        id: 23,
        name: 'Apple iphone 12 Pro max',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro_Max-retina.png',
        price: 1500,
        feedback: '&starf;'
    },
    {
        id: 24,
        name: 'Apple iphone 12 Pro',
        description: 'asdfasdfasdf',
        photoUrl: 'https://www.att.com/idpassets/sales/uf/compare/iphone-compare-page/150304-migration-iPhone12Pro-retina.png',
        price: 1300,
        feedback: '&starf;'
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
    console.log(Math.ceil(sliderContainer.scrollLeft), difference);
    if (Math.ceil(sliderContainer.scrollLeft) == width) {
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

