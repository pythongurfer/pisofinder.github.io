// Map Initialization
function initMap() {
	var berlin = {lat: 52.5200, lng: 13.4050};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: berlin
	});
	
	// Markers for Available Apartments
	var marker1 = new google.maps.Marker({
		position: {lat: 52.5244, lng: 13.4105},
		map: map,
		title: 'Stylish Apartment in Mitte'
	});
	
	var marker2 = new google.maps.Marker({
		position: {lat: 52.5159, lng: 13.4545},
		map: map,
		title: 'Cosy Studio in Friedrichshain'
	});
	
	var marker3 = new google.maps.Marker({
		position: {lat: 52.5447, lng: 13.4204},
		map: map,
		title: 'Luxurious Penthouse in Prenzlauer Berg'
	});
}

// Event Listener for Search Button
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
	event.preventDefault();
	
	// Get User Input from Search Bar
	var userInput = document.querySelector('input[type="text"]').value;
	
	// Display Results
	alert('Searching for apartments in ' + userInput);
});
