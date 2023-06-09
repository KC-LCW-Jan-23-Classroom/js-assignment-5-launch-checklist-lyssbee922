//let { myFetch, formSubmission } = require('./scriptHelper.js');
//let { pickPlanet } = require('./scriptHelper.js');
//let { addDestinationInfo } = require('./scriptHelper.js');


window.addEventListener("load", function() {
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";

    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let pilotElement = document.querySelector("input[name=pilotName]")
        let copilotElement = document.querySelector("input[name=copilotName]")
        let fuelElement = document.querySelector("input[name=fuelLevel]")
        let cargoElement = document.querySelector("input[name=cargoMass]")

        fuelElement = Number(fuelElement.value);
        cargoElement = Number(cargoElement.value);
        


        formSubmission(document, list, pilotElement.value, copilotElement.value, fuelElement, cargoElement);
    })

        
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let finalDestination = pickPlanet(listedPlanets);

       addDestinationInfo(document, finalDestination.name, finalDestination.diameter, finalDestination.star, finalDestination.distance, finalDestination.moons, finalDestination.image);
   })
   
});
