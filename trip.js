let itineraries = {
    "Hyderabad": ["Charminar - 10 AM", "Golconda Fort - 12 PM", "Hussain Sagar - 4 PM"],
    "Delhi": ["India Gate - 9 AM", "Red Fort - 11 AM", "Qutub Minar - 3 PM"],
    "Chennai": ["Marina Beach - 8 AM", "Kapaleeshwarar Temple - 11 AM", "Santhome Cathedral - 4 PM"],
    "Andaman": ["Radhanagar Beach - 9 AM", "Cellular Jail - 12 PM", "Scuba Diving - 3 PM"]
};
let selectedItinerary = [];

function generateItinerary(city) {
    selectedItinerary = itineraries[city] || [];
    updateItinerary();
    showPopup("Trip Plan Created", `Your trip to ${city} has been planned!`);
}

function updateItinerary() {
    let list = document.getElementById("itinerary-list");
    list.innerHTML = "";
    selectedItinerary.forEach((place) => {
        list.innerHTML += `<li class='list-group-item'>${place}</li>`;
    });
}

function confirmTrip() {
    if (selectedItinerary.length > 0) {
        showPopup("Trip Confirmed", "Your itinerary is set! Enjoy your journey!");
    } else {
        showPopup("No Destinations", "Please select a city to plan your trip.");
    }
}

function showPopup(title, message) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-message").innerText = message;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}