// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    const missionTarget = document.getElementById("missionTarget");
    return missionTarget.innerHTML = `
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
    }
    return "Is a Number";
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = validateInput(pilot);
    let copilotStatus = validateInput(copilot);
    let fuelStatus = validateInput(fuelLevel);
    let cargoStatus = validateInput(cargoLevel)

    if (pilotStatus === "Empty" || copilotStatus === "Empty" || fuelStatus === "Not a Number" || cargoStatus === "Not a Number") {
        alert("All fields are required!");
        return;
    }

    if (pilotStatus === "Is a Number" || copilotStatus === "Is a Number" || fuelStatus === "Not a Number" || cargoStatus === "Not a Number") {
        alert("Enter valid information for each field.")
        return;
    }

    let faultyItems = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");
    pilot = document.getElementById("pilotStatus");
    copilot = document.getElementById("copilotStatus");
    fuelLevel = document.getElementById("fuelStatus");
    cargoLevel = document.getElementById("cargoStatus");

    let pilotName = 'Chris';
    let copilotName = 'Blake';

    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML= `Co-pilot ${copilotName} is ready for launch`;

    if (fuelLevel <10000) {
        faultyItems.style.visibility = "visible"
        fuelStatus.innerHTML = "Not enough fuel for return journey."
        launchStatus.innerHTML = "Shuttle not ready for launch."
        launchStatus.style.color = "red";
    } else if (cargo > 10000) {
        faultyItems.style.visibility = "visible";
        cargo.innerHTML = "Cargo mass too high for launch.";
        launchStatus.innerHTML = "Shuttle not ready for launch.";
        launchStatus.style.color = "red";
    } else {
        faultyItems.style.visibility = 'hidden';
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green"
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
