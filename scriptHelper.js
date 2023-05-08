// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star} </li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons} </li>
        </ol>
        <img src="${imageUrl}">
    `;
  
}

function validateInput(testInput) {
    if(!testInput) {
        return "Empty";
    }
    if(isNaN(parseFloat(testInput))) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    let pilotStatus = validateInput(pilot);
    let copilotStatus = validateInput(copilot);
    fuelLevel = validateInput(fuelLevel);
    cargoMass = validateInput(cargoMass);

    if (pilotStatus === "Empty" || copilotStatus === "Empty" || fuelLevel === "Not a Number" || cargoMass === "Not a Number") {
        alert("All fields are required!");
        return;
    }

    if (pilotStatus === "Is a Number" || copilotStatus === "Is a Number" || fuelLevel === "Not a Number" || cargoMass === "Not a Number") {
        alert("Enter valid information for each field.")
        return;
    } 

    list = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");




    pilotName = pilot;
    copilotName = copilot;

    
    if (cargoMass >= 10000 || fuelLevel <= 10000) {
        list.style.visibility = 'visible';
        cargoStatus.innerHTML = "Cargo mass too heavy for launch.";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'rgb(199, 37, 78)';
 
    } else {
        list.style.visibility = 'hidden';
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        pilotStatus.innerHTML = `Pilot Chris is ready for launch`;
        copilotStatus.innerHTML= `Co-pilot Bob is ready for launch`;

        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = 'rgb(65, 159, 106)';
        
    }
}

async function myFetch() {

    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random()*planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
