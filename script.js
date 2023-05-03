// Write your JavaScript code here!
let { myFetch } = require('./scriptHelper.js');
let { pickPlanet } = require('./scriptHelper.js');
let { addDestinationInfo } = require('./scriptHelper.js')

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch[0];
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let finalDestinationIndex = pickPlanet(listedPlanets);
       let finalDestination = listedPlanets[finalDestinationIndex];
       let missionInfo = addDestinationInfo(document, finalDestination.name, finalDestination.diameter, finalDestination.star, finalDestination.distance, finalDestination.moons, finalDestination.image);
       document.getElementById("missionTarget").innerHTML = missionInfo;
   })
   
});