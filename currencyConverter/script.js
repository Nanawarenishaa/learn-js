


const from = document.getElementById("from");
const to = document.getElementById("to");

let countries;


async function fetchCountries() {
    countries = await fetch('./countries.json')
        .then(response => response.json());

        console.log(countries);

        countries.forEach(c => {
            from.innerHTML += `<option value="${c.currency}">${c.name}</option>`;

            to.innerHTML += `<option value="${c.currency}">${c.name}</option>`;


        })

        from.value="USD";
        to.value="INR";
}

fetchCountries();