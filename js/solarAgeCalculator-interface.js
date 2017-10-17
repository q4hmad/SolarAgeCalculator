import { Solar } from './../js/solarAgeCalculator.js';

$(document).ready(function() {
  $("form#enterAge").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#age").val());
    var lifeExpectancy = $("#lifeExpectancy").val();
    var ageLifeExpectancy = new Solar(age, lifeExpectancy);
    $("#ageSeconds").append(ageLifeExpectancy.checkSeconds());
    $("#theirAgeMercury").append(ageLifeExpectancy.mercuryYears());
    $("#theirAgeVenus").append(ageLifeExpectancy.venusYears());
    $("#theirAgeMars").append(ageLifeExpectancy.marsYears());     $("#theirAgeJupiter").append(ageLifeExpectancy.jupiterYears());
    $("#lEMercury").append(ageLifeExpectancy.lifeExpectancyMercury());
    $("#lEVenus").append(ageLifeExpectancy.lifeExpectancyVenus());
    $("#lEMars").append(ageLifeExpectancy.lifeExpectancyMars());
    $("#lEJupiter").append(ageLifeExpectancy.lifeExpectancyJupiter());

  });
});
