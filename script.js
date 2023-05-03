let { myFetch, formSubmission } = require('./scriptHelper.js');
let { pickPlanet } = require('./scriptHelper.js');
let { addDestinationInfo } = require('./scriptHelper.js');

window.addEventListener("load", function() {

    let form = document.querySelector("launchForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let pilotElement = document.querySelector("input[name=pilotName]")
        let copilotElement = document.querySelector("input[name=copilotName]")
        let fuelElement = document.querySelector("input[name=fuelLevel]")
        let cargoElement = document.querySelector("input[name=cargoMass]")

        formSubmission(document, pilotElement.value, copilotElement.value, fuelElement.value, cargoElement.value);
    })
        
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let finalDestinationIndex = pickPlanet(listedPlanets);
       let finalDestination = listedPlanets[finalDestinationIndex];
       addDestinationInfo(document, finalDestination.name, finalDestination.diameter, finalDestination.star, finalDestination.distance, finalDestination.moons, finalDestination.imageUrl);
   })
   
});
