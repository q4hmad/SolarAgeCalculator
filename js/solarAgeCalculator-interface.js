import { Solar } from './../js/solarAgeCalculator.js';

$(document).ready(function() {
  $("form#enterAge").submit(function(event) {
    event.preventDefault();
    var age = parseFloat($("#age").val());
    var lifeExpectancy = parseFloat($("#lifeExpectancy").val());
    var ageChecker = new Solar(age);
    var lifeExpectancyChecker = new Solar(lifeExpectancy);
    $("#theirAge").append(lifeExpectancyChecker.lifeExpectancy());
    $("#theirAge").append(ageChecker.checkSeconds());
    $("#theirAgeMercury").append(ageChecker.mercuryYears());
    $("#theirAgeVenus").append(ageChecker.venusYears());
    $("#theirAgeMars").append(ageChecker.marsYears());
    $("#theirAgeJupiter").append(ageChecker.jupiterYears());
    $("#lifeExpectancyEarth").text(ageChecker.lifeExpectancyEarth());
    $("#lifeExpectancyPlanets").text(ageChecker.lifeExpectancyPlanets())
  });
});
