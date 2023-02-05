const womensClothingURL = `https://fakestoreapi.com/products/category/women's clothing`;

const female = document.getElementById('female');

fetch(womensClothingURL)
    .then(res => res.json())
    .then(json => {
        json.forEach(element => {
            const elementsHTML = cardInfoFemale(element);
            female.innerHTML += elementsHTML;
        });
    })



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