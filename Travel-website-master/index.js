
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

function planTrip() {
    const destination = document.getElementById('destination').value.trim().toLowerCase();
    const days = parseInt(document.getElementById('days').value);

    const tripResult = document.getElementById('trip-result');
    tripResult.classList.add('hidden');

    if (destination && days) {
        const places = getPlacesToVisit(destination, days);

        if (places) {
            tripResult.innerHTML = `
                <h2>Your Travel Plan for ${capitalize(destination)}</h2>
                <p>For a ${days}-day stay, we recommend visiting the following places:</p>
                <ul>${places.map(place => `<li>${place}</li>`).join('')}</ul>
            `;
            tripResult.classList.remove('hidden');
            tripResult.classList.add('show-result');
        } else {
            tripResult.innerHTML = `<p>Sorry, we currently don't have recommendations for "${destination}".</p>`;
            tripResult.classList.remove('hidden');
            tripResult.classList.add('show-result');
        }
    } else {
        tripResult.innerHTML = '<p>Please enter a valid destination and number of days.</p>';
        tripResult.classList.remove('hidden');
        tripResult.classList.add('show-result');
    }
}

function getPlacesToVisit(destination, days) {
    const places = {
        "delhi": ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple", "Humayun's Tomb"],
        "mumbai": ["Gateway of India", "Marine Drive", "Elephanta Caves", "Juhu Beach", "Siddhivinayak Temple"],
        "jaipur": ["Amber Fort", "City Palace", "Hawa Mahal", "Jantar Mantar", "Jal Mahal"],
        "goa": ["Baga Beach", "Calangute Beach", "Basilica of Bom Jesus", "Dudhsagar Falls", "Aguada Fort"],
        "agra": ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Itmad-ud-Daulah", "Mehtab Bagh"]
    };

    return places[destination]?.slice(0, days) || null; 
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
