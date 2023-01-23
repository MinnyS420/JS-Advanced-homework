
const url = 'https://swapi.dev/api/people/1';
document.getElementById('getData')
    .addEventListener('click', () => {
        fetch(url).then(data => {
            data.json().then(data => {
                console.log(data);
                let name = data.name;
                let thead = document.getElementById('names');
                let tbody = document.getElementById('infoData');
                let nameColum = document.createElement('tr');
                let infoData1 = document.createElement('tr');

                //moze i so style ovde direkno preku JS
                nameColum.innerHTML = `
                <style>
                #table{
                    justify-content: center;
                    text-align: center;
                    position: relative;
                    width: 80%;
                    height: 100%;
                }
                
                table {
                    border: 3px solid black;
                }
                td {
                    border: 1px solid black;
                }                
                
                </style>
                
                <td><h2>Name:<h2/></td>
                <td><h2>Hight:<h2/></td>
                <td><h2>Weight:<h2/></td>
                <td><h2>Hair Color:</h2></td>
                <td><h2>Eye Color:</h2></td>
                `;
                thead.appendChild(nameColum);

                infoData1.innerHTML = `
                <td><h1>${name}</h1></td>
                <td><b>${data.height}</b></td>
                <td><b>${data.mass}</b></td>
                <td><b>${data.hair_color}</b></td>
                <td><b>${data.eye_color}</b></td>
                `;
                tbody.appendChild(infoData1);

            })
        })
    })
