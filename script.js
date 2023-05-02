// Write your JavaScript code here!
let { myFetch } = require('./scriptHelper.js');
let { pickPlanet } = require('./scriptHelper.js');
let { addDestinationInfo } = require('./scriptHelper.js')

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let finalDestination = pickPlanet(listedPlanets)
       missionTarget.innerHTML = addDestinationInfo(finalDestination);
   })
   
});