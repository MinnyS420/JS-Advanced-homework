const categoryUrls = [
    'https://fakestoreapi.com/products/category/jewelery',
    'https://fakestoreapi.com/products/category/electronics',
    `https://fakestoreapi.com/products/category/women's clothing`,
    `https://fakestoreapi.com/products/category/men's clothing`
];
const allProduct = document.getElementById("allProduct");
const male = document.getElementById("male");
const female = document.getElementById('female');
const jewelery = document.getElementById('jewelery-container');
const electronics = document.getElementById('electronics-container');
const mansClothingDiv = document.getElementById('mansClothing');

// BTN
const allProductsBTN = document.getElementById("allProductsBTN");
const maleBTN = document.getElementById("maleBTN")
const femaleBTN = document.getElementById("femaleBTN")
const jeweleryBTN = document.getElementById("jeweleryBTN")
const electronicsBTN = document.getElementById("electronicsBTN")
const maleID = document.getElementById("maleID")
const femaleID = document.getElementById("femaleID")
const jeweleryID = document.getElementById("jeweleryID")
const electronicsID = document.getElementById("electronicsID")

const btn = document.getElementById("btn");
const showCategory = document.getElementById("showCategory");
const ul = document.getElementById("ul");

function generateProductHTML(element) {
    return `
      <div class='card' id="cardConfig">
        <div id='img-config'>
          <img id='img' src=${element.image} alt="img">
        </div>
        <div>
          ${element.title}
        </div>
        <input type="button" value="Buy now!" name="card" id="buyBTN">
      </div>
    `;
}

async function fetchCategories() {
    let allProducts = sessionStorage.getItem('allProducts');
    if (allProducts) {
        allProducts = JSON.parse(allProducts);
    } else {
        allProducts = await Promise.all(categoryUrls.map(async url => {
            const res = await fetch(url);
            return await res.json();
        }));
        sessionStorage.setItem('allProducts', JSON.stringify(allProducts));
    }

    const products = allProducts.flat();
    male.innerHTML = products
        .filter(product => product.category === `men's clothing`)
        .map(product => generateProductHTML(product))
        .join('');
    female.innerHTML = products
        .filter(product => product.category === `women's clothing`)
        .map(product => generateProductHTML(product))
        .join('');
    jewelery.innerHTML = products
        .filter(product => product.category === 'jewelery')
        .map(product => generateProductHTML(product))
        .join('');
    electronics.innerHTML = products
        .filter(product => product.category === 'electronics')
        .map(product => generateProductHTML(product))
        .join('');
}

fetchCategories();

showCategory.addEventListener('click', () => {
    if (ul.style.display === 'none') {
        ul.style.display = 'block'
    } else {
        ul.style.display = 'none'
    }
});

maleBTN.addEventListener("click", () => {
    male.style.display = "flex";
    female.style.display = "none";
    jewelery.style.display = "none";
    electronics.style.display = "none";
    allProduct.style.display = "none";
    maleID.style.display = "flex";
    femaleID.style.display = "none";
    jeweleryID.style.display = "none";
    electronicsID.style.display = "none";
});
femaleBTN.addEventListener("click", () => {
    male.style.display = "none";
    female.style.display = "flex";
    jewelery.style.display = "none";
    electronics.style.display = "none";
    allProduct.style.display = "none";
    maleID.style.display = "none";
    femaleID.style.display = "flex";
    jeweleryID.style.display = "none";
    electronicsID.style.display = "none";
});
jeweleryBTN.addEventListener("click", () => {
    male.style.display = "none";
    female.style.display = "none";
    jewelery.style.display = "flex";
    electronics.style.display = "none";
    allProduct.style.display = "none";
    maleID.style.display = "none";
    femaleID.style.display = "none";
    jeweleryID.style.display = "flex";
    electronicsID.style.display = "none";
});
electronicsBTN.addEventListener("click", () => {
    male.style.display = "none";
    female.style.display = "none";
    jewelery.style.display = "none";
    electronics.style.display = "flex";
    allProduct.style.display = "none";
    maleID.style.display = "none";
    femaleID.style.display = "none";
    jeweleryID.style.display = "none";
    electronicsID.style.display = "flex";
});
allProductsBTN.addEventListener("click", () => {
    male.style.display = "flex";
    female.style.display = "flex";
    jewelery.style.display = "flex";
    electronics.style.display = "flex";
    allProduct.style.display = "flex";
    maleID.style.display = "flex";
    femaleID.style.display = "flex";
    jeweleryID.style.display = "flex";
    electronicsID.style.display = "flex";
});