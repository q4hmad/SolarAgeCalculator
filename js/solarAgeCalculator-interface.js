import { Solar } from './../js/solarAgeCalculator.js';

$(document).ready(function() {
  $("form#enterAge").submit(function(event) {
    event.preventDefault();
    var age = parseFloat($("#age").val());
    var ageChecker = new Solar(age);
    $("#theirAge").append(ageChecker.checkSeconds());
    $("#theirAge").append(ageChecker.mercuryYears());
    $("#theirAge").append(ageChecker.venusYears());
    $("#theirAge").append(ageChecker.marsYears());
    $("#theirAge").append(ageChecker.jupiterYears());
  });
});
