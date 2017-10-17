$(document).ready(function() {
  $("form#selectPlanet").submit(function(event) {
    event.preventDefault();
    var planetSelect = $("#choosePlanet").val();
    console.log(planetSelect);
  });
});
