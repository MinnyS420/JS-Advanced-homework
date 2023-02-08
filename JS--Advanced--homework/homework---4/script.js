// const limitProductResultsURL = 'https://fakestoreapi.com/products?limit=5';
const getAllProductsURL = 'https://fakestoreapi.com/products';
const jeweleryURL = 'https://fakestoreapi.com/products/category/jewelery';
const electronicsURL = 'https://fakestoreapi.com/products/category/electronics';
const womensClothingURL = `https://fakestoreapi.com/products/category/women's clothing`;
const mansClothingURL = `https://fakestoreapi.com/products/category/men's clothing`;

const male = document.getElementById("male");
const female = document.getElementById('female');
const jewelery = document.getElementById('jewelery-container');
const electronics = document.getElementById('electronics-container');
const mansClothingDiv = document.getElementById('mansClothing');
const homeBTN = document.getElementById("goBack");

//BTN
const btn = document.getElementById("btn");
const showCategory = document.getElementById("showCategory");
const ul = document.getElementById("ul");



fetch(jeweleryURL)
    .then(res => res.json())
    .then(json => {
        json.forEach(element => {
            const elementsHTML = cardInfoJewelery(element);
            jewelery.innerHTML += elementsHTML;
        });
    })

fetch(electronicsURL)
    .then(res => res.json())
    .then(json => {
        json.forEach(element => {
            const elementsHTML = cardInfoElectronics(element);
            electronics.innerHTML += elementsHTML;
        });
    })

fetch(womensClothingURL)
    .then(res => res.json())
    .then(json => {
        json.forEach(element => {
            const elementsHTML = cardInfoFemale(element);
            female.innerHTML += elementsHTML;
        });
    })

fetch(mansClothingURL)
    .then(res => res.json())
    .then((json) => {
        json.forEach(element => {
            const elementsHTML = cardInfoMale(element);
            male.innerHTML += elementsHTML;
        });
    })

function cardInfoMale(element) {
    const informations = `
        <div clss='card' id="maleConfig">
        <div id='img-config'>
        <img id='img' src=${element.image} alt="img">
        </div>
        <div id='mansClothing'>
        ${element.title}
        </div>
        <input type="button" value = "Buy now!" name="card" id="buyBTN">
        </div>
    `
    return informations;
}

function cardInfoFemale(element) {
    const informations = `
        <div clss='card' id="femaleConfig">
        <div id='img-config'>
        <img id='img' src=${element.image} alt="img">
        </div>
        <div id='femaleClothing'>
        ${element.title}
        </div>
        <input type="button" value = "Buy now!" name="card" id="buyBTN">
        </div>
    `
    return informations;
}

function cardInfoJewelery(element) {
    const informations = `
        <div clss='card' id="jeweleryConfig">
        <div id='img-config'>
        <img id='img' src=${element.image} alt="img">
        </div>
        <div id='jewelery'>
        ${element.title}
        </div>
        <input type="button" value = "Buy now!" name="card" id="buyBTN">
        </div>
    `
    return informations;
}

function cardInfoElectronics(element) {
    const informations = `
        <div clss='card' id="electroConfig">
        <div id='img-config'>
        <img id='img' src=${element.image} alt="img">
        </div>
        <div id='electronics'>
        ${element.title}
        </div>
        <input type="button" value = "Buy now!" name="card" id="buyBTN">
        </div>
    
    `
    return informations;
}

showCategory.addEventListener('click', () => {
    if (ul.style.display === 'none') {
        ul.style.display = 'block'
    } else {
        ul.style.display = 'none'
    }
});


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))