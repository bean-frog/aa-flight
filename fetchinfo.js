// American Airlines flight data
// Fetches data of current flight.
// Must be connected to aainflight wifi

import fetch from 'node-fetch';

// ANSI color codes
const RED = '\x1b[31m'
const GREEN = '\x1b[32m';
const WHITE = '\x1b[37m';
const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

// Config
const spacerLen = 15;

(async function() {
	 const res = await fetch("https://www.aainflight.com/api/v1/connectivity/viasat/flight", {
	   "headers": {
	     "accept": "*/*",
	     "accept-language": "en-US,en;q=0.9",
	     "if-none-match": "W/\"206-dyu+CkwhoXDkA1zSlovWwVdbBYc\"",
	     "priority": "u=1, i",
	     "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Brave\";v=\"139\", \"Chromium\";v=\"139\"",
	     "sec-ch-ua-mobile": "?0",
	     "sec-ch-ua-platform": "\"Linux\"",
	     "sec-fetch-dest": "empty",
	     "sec-fetch-mode": "cors",
	     "sec-fetch-site": "same-origin",
	     "sec-gpc": "1",
	     "Referer": "https://www.aainflight.com/"
	   },
	   "body": null,
	   "method": "GET"
	 });
	 
	 // Error handling
	 if (!res.ok) {
	 	console.log(`${RED} [ERROR]:${RESET} Error fetching flight data. Are you connected to the AA wifi?`);
	 	console.log(`${BOLD}Error Code:${RESET} ${res.status} ${res.statusText}`)
	 	const errorText = await res.text();	 	
	 	console.log(`${BOLD}Error Message:${RESET} ${errorText}`)
	 	process.exit(1);
	 }
	
	const data = await res.json()


	// Format Helpers

	function bold(text) {
		return `${BOLD}${text}${RESET}`
	}


	// formatted lines
	const lines = [
		`${bold(`Flight ${data.flightNumber} (${data.vehicleId})`)}`,
		`${BOLD}${data.origin}${RESET} to ${BOLD}${data.destination}${RESET}`,
		`Doors are ${bold(data.doorState)}`,
		`Time Remaining: ${BOLD}${data.timeToGo} min. ${RESET}`,
		`Flight Phase: ${bold(data.flightPhase)}`,
		`${"─".repeat(spacerLen)}`,
		`${BOLD}Aircraft Data${RESET}`,
		`Latitude: ${bold(data.latitude)}`,
		`Longitude: ${bold(data.longitude)}`,
		`Altitude: ${bold(`${data.altitude}ft`)}`,
		`Air Temp.: ${bold(data.airTemperature)}`,
		`Air / Ground speed: ${bold(`${data.airspeed}mph / ${data.groundspeed}mph`)}`,

		
		
	]

	lines.forEach(line => {
		console.log(line)
	})	 
})();  
