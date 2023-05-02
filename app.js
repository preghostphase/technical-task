// Technical Task - ARC

// Get current month
const d = new Date();
let month = d.getMonth();

// Filter button for current month
const currentMonthFilter = document.querySelector(`.events-month[data-month="${month + 1}"]`);
// Setting that button style to active
currentMonthFilter.classList.add('active');

// HTML Elements
const main = document.querySelector('.events-grid');
const monthFilterButtons = document.getElementsByClassName("events-month");

// API Declarations
const token = '264c77f740cc1f02cac8f0a7e30ccdcd2f20dcf5';
const authURL = 'https://api.arenaracingcompany.co.uk/auth';
const eventsURL = 'https://api.arenaracingcompany.co.uk/event/month/1318/';
var webToken;
var eventsData = [];

document.addEventListener("DOMContentLoaded", function() {
   // Upon load of document run authorisation and general get events functions back to back to show current events for the month we are in.
   authorizeUser(authURL, getAllEvents, countingEvents);
});

// Authorization Function
function authorizeUser(url, callback) {
    fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    .then((response) => response.text())
        .then((data) => {
            getAllEvents(data, eventsURL);
            webToken = data;
            return data;
    });
};

function getAllEvents(webToken, url) {
	// Fetching all events from each month
    Promise.all([
        fetch(url + '1', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${webToken}`
            }
        }),
        fetch(url + '2', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${webToken}`
            }
        }),
        fetch(url + '3', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${webToken}`
            }
        }),
        fetch(url + '4', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${webToken}`
            }
        }),
        fetch(url + '5', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${webToken}`
            }
        }),
        fetch(url + '6', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${webToken}`
            }
        }),
        fetch(url + '7', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${webToken}`
            }
        }),
        fetch(url + '8', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${webToken}`
            }
        }),
        fetch(url + '9', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${webToken}`
            }
        }),
        fetch(url + '10', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${webToken}`
            }
        }),
        fetch(url + '11', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${webToken}`
            }
        }),
        fetch(url + '12', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${webToken}`
            }
        }),
        ]).then(function (responses) {
            // Get a JSON object from each of the responses
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            // Storing events in global variable declared near top of document
			eventsData = data;
			// Running the showEvents function with the current month on page load
			showEvents(eventsData[month]);
			countingEvents();
            return data;
        }).catch(function (error) {
            // if there's an error, log it
            console.log(error);
        });
}

function showEvents(data) {
 // Set wrapper to empty before filling with data
 main.innerHTML = '';
 // Loop through each entry
 data.forEach(event => {
     const { title, date, images} = event;
     const eventEl = document.createElement('div');
     eventEl.classList.add('events-item');
     eventEl.innerHTML = `
     <div class="events-image">
     <img alt="${title}" src="${images.desktop}"/>
     </div>
     <div class="events-info">
         <h3>${title}</h3>
         <p>${parseDate(date)}</p>
     </div>
     `;
     main.appendChild(eventEl);
 });
}

// Counts events and greys out any month that doesn't have any events
function countingEvents() {
	for (let i = 0; i < eventsData.length; i++){
		// Store number of events for each month
		let numberOfEvents = eventsData[i].length;
		// Set attribute to number of events
		document.querySelector(`.events-month[data-month="${i + 1}"]`).setAttribute('data-numberOfEvents', `${numberOfEvents}`);
		// If number of events in month is 0, add the class empty, and add disabled attribute to filter buttons.
		if (numberOfEvents === 0) {
			document.querySelector(`.events-month[data-month="${i + 1}"]`).classList.add('empty');
			document.querySelector(`.events-month[data-month="${i + 1}"]`).setAttribute('disabled', 'disabled');
		}
	}
}

// Loop through each month filter button and run function on click
for (let i = 0; i < monthFilterButtons.length; i++){
	monthFilterButtons[i].addEventListener("click", function () {
		// Loop through each month filter button and remove class
		document.querySelectorAll('.events-month').forEach((e) => {
		  e.classList.remove('active');
		});
		// Grab data attribute (month number)
		const attribute = this.getAttribute("data-month");
		// Add active class to clicked filter button
		this.classList.add('active');
		// Run events function passing month number
		showEvents(eventsData[attribute - 1]);
    });
}

// Cleaning up date function
function parseDate(date) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const dateObj = new Date(date);
    const dateObjFormatted = `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

    return dateObjFormatted;
}

// Filter dropdown
document.querySelector('.events-dropdown').addEventListener('click', function () {
	document.querySelector('.events-filter').classList.toggle('active');
});






