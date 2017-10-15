import { Solar } from './../js/solarAgeCalculator.js';

$(document).ready(function() {
  $("form#enterAge").submit(function(event) {
    event.preventDefault();
    var age = parseFloat($("#age").val());
    var ageChecker = new Solar(age);
    $("#theirAge").append(ageChecker.checkSeconds());
    $("#theirAgeMercury").append(ageChecker.mercuryYears());
    $("#theirAgeVenus").append(ageChecker.venusYears());
    $("#theirAgeMars").append(ageChecker.marsYears());
    $("#theirAgeJupiter").append(ageChecker.jupiterYears());
  });
});
