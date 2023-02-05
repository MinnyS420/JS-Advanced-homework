const electronicsURL = 'https://fakestoreapi.com/products/category/electronics';
const electronics = document.getElementById('electronics-container');

fetch(electronicsURL)
    .then(res => res.json())
    .then(json => {
        json.forEach(element => {
            const elementsHTML = cardInfoElectronics(element);
            electronics.innerHTML += elementsHTML;
        });
        console.log(json);
    })


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