const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

// 
// 
//  

const products = [
    {
        name: "Рельефная печать",
        size: "Макс. 41мм * 24мм",
        price: 3500,
        image: "./assets/card-image.png",
        colors: ["white", "gray", "black", "red", "green", "blue"]
    },
    // Add 11 more products similarly...
    {
        name: "Продукт 2",
        size: "Размер 2",
        price: 4200,
        image: "./assets/card-image.png",
        colors: ["white", "gray", "red"]
    },
    {
        name: "Продукт 3",
        size: "Размер 3",
        price: 3000,
        image: "./assets/card-image.png",
                colors: ["white", "gray", "black", "red", "green", "blue"]

    },
    {
        name: "Продукт 3",
        size: "Размер 3",
        price: 3000,
        image: "./assets/card-image.png",
                colors: ["white", "gray", "black", "red", "green", "blue"]

    },
    {
        name: "Продукт 3",
        size: "Размер 3",
        price: 3000,
        image: "./assets/card-image.png",
                colors: ["white", "gray", "black", "red", "green", "blue"]

    },
    {
        name: "Продукт 3",
        size: "Размер 3",
        price: 3000,
        image: "./assets/card-image.png",
                colors: ["white", "gray", "black", "red", "green", "blue"]

    },
    {
        name: "Продукт 3",
        size: "Размер 3",
        price: 3000,
        image: "./assets/card-image.png",
                colors: ["white", "gray", "black", "red", "green", "blue"]

    },
    {
        name: "Продукт 3",
        size: "Размер 3",
        price: 3000,
        image: "./assets/card-image.png",
                colors: ["white", "gray", "black", "red", "green", "blue"]

    },
    {
        name: "Продукт 3",
        size: "Размер 3",
        price: 3000,
        image: "./assets/card-image.png",
                colors: ["white", "gray", "black", "red", "green", "blue"]

    },
    {
        name: "Продукт 3",
        size: "Размер 3",
        price: 3000,
        image: "./assets/card-image.png",
                colors: ["white", "gray", "black", "red", "green", "blue"]

    },
    {
        name: "Продукт 3",
        size: "Размер 3",
        price: 3000,
        image: "./assets/card-image.png",
                colors: ["white", "gray", "black", "red", "green", "blue"]

    },
    {
        name: "Продукт 3",
        size: "Размер 3",
        price: 3000,
        image: "./assets/card-image.png",
                colors: ["white", "gray", "black", "red", "green", "blue"]

    },
    // ... up to 12 products
];

const productContainer = document.getElementById('product-container');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    productCard.innerHTML = `
        <div class="product-header">
            <span class="product-price">${product.price} с.</span>
            <span class="product-favorite">&#10084;</span>
        </div>
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-details">
            <h3>${product.name}</h3>
            <p>Размер: ${product.size}</p>
            <div class="color-options">
                ${product.colors.map(color => `<span class="color color-${color}"></span>`).join('')}
            </div>
            <div class="product-footer">
                <span class="product-price-final">${product.price} с.</span>
                <div class="product-cart">
                    <button class="add-to-cart">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.75 2.9375C2.43934 2.9375 2.1875 3.18934 2.1875 3.5C2.1875 3.81066 2.43934 4.0625 2.75 4.0625C3.36279 4.0625 3.89336 4.48811 4.02629 5.0863L4.34874 6.53731C4.35108 6.57255 4.35676 6.60779 4.36587 6.64256L4.40708 6.79985L4.45089 6.99702C4.45951 7.0358 4.47194 7.07274 4.4877 7.10755L5.74408 11.9029C6.1546 13.4698 7.57049 14.5625 9.19026 14.5625H12.5C12.8107 14.5625 13.0625 14.3107 13.0625 14C13.0625 13.6893 12.8107 13.4375 12.5 13.4375H9.19026C8.082 13.4375 7.11323 12.6899 6.83235 11.6178L5.63886 7.0625H13.2735C14.2734 7.0625 15.1719 7.67316 15.5399 8.60288C15.6543 8.89174 15.9811 9.03321 16.27 8.91887C16.5588 8.80453 16.7003 8.47768 16.586 8.18883C16.0481 6.83001 14.7349 5.9375 13.2735 5.9375H5.36789L5.1245 4.84226C4.87718 3.72933 3.89007 2.9375 2.75 2.9375Z" fill="white"/>
                            <path d="M8 16.25C8 16.6642 7.66421 17 7.25 17C6.83579 17 6.5 16.6642 6.5 16.25C6.5 15.8358 6.83579 15.5 7.25 15.5C7.66421 15.5 8 15.8358 8 16.25Z" fill="white"/>
                            <path d="M14 16.25C14 16.6642 13.6642 17 13.25 17C12.8358 17 12.5 16.6642 12.5 16.25C12.5 15.8358 12.8358 15.5 13.25 15.5C13.6642 15.5 14 15.8358 14 16.25Z" fill="white"/>
                            <path d="M14.75 9.6875C15.0607 9.6875 15.3125 9.93934 15.3125 10.25V11.1875H16.25C16.5607 11.1875 16.8125 11.4393 16.8125 11.75C16.8125 12.0607 16.5607 12.3125 16.25 12.3125H15.3125V13.25C15.3125 13.5607 15.0607 13.8125 14.75 13.8125C14.4393 13.8125 14.1875 13.5607 14.1875 13.25V12.3125H13.25C12.9393 12.3125 12.6875 12.0607 12.6875 11.75C12.6875 11.4393 12.9393 11.1875 13.25 11.1875H14.1875V10.25C14.1875 9.93934 14.4393 9.6875 14.75 9.6875Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    productContainer.appendChild(productCard);
});
