let url = 'https://swapi.dev/api/planets/?page=1'


function getFirstPagePlanets() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const planets = data.results;
            const tbody = document.getElementById('planets-tbody');
            tbody.innerHTML = '';
            for (let planet of planets) {
                const row = document.createElement('tr');
                row.innerHTML = `
            <td>${planet.name}</td>
            <td>${planet.population}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>
          `;
                tbody.appendChild(row);
            }
        });
    button.style.visibility = 'hidden';
    btnNextTenPlanets.style.visibility = 'visible';
    btnPrivTenPlanets.style.visibility = 'hidden';

}

function getNextTenPlanets() {
    fetch('https://swapi.dev/api/planets/?page=2')
        .then(response => response.json())
        .then(data => {
            const planets = data.results;
            const tbody = document.getElementById('planets-tbody');
            tbody.innerHTML = '';
            for (let planet of planets) {
                const row = document.createElement('tr');
                row.innerHTML = `
            <td>${planet.name}</td>
            <td>${planet.population}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>
          `;
                tbody.appendChild(row);
            }
        });

    btnNextTenPlanets.style.visibility = 'hidden';
    btnPrivTenPlanets.style.visibility = 'visible';

}



const button = document.getElementById('first-page-button');
const btnNextTenPlanets = document.getElementById('nextTenPlanets');
const btnPrivTenPlanets = document.getElementById('privTenPlanets');
btnNextTenPlanets.style.visibility = 'hidden';
btnPrivTenPlanets.style.visibility = 'hidden';
button.addEventListener('click', getFirstPagePlanets);
btnNextTenPlanets.addEventListener('click', getNextTenPlanets);
btnPrivTenPlanets.addEventListener('click', getFirstPagePlanets);

