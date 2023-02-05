const mansClothingURL = `https://fakestoreapi.com/products/category/men's clothing`;

const male = document.getElementById("male");

const mansClothingDiv = document.getElementById('mansClothing');

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