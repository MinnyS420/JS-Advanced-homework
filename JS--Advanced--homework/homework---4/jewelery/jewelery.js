const jeweleryURL = 'https://fakestoreapi.com/products/category/jewelery';
const jewelery = document.getElementById('jewelery-container');

fetch(jeweleryURL)
    .then(res => res.json())
    .then(json => {
        json.forEach(element => {
            const elementsHTML = cardInfoJewelery(element);
            jewelery.innerHTML += elementsHTML;
        });
        console.log(json);
    })

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
