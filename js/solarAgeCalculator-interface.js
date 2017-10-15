import { Solar } from './../js/solarAgeCalculator.js';

$(document).ready(function() {
  $("form#enterAge").submit(function(event) {
    event.preventDefault();
    var age = parseFloat($("#age").val());
    var ageChecker = new Solar(age);
    $("#theirAge").text(ageChecker.checkSeconds());
  });
});
