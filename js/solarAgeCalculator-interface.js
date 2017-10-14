import { Solar } from './../js/solarAgeCalculator.js';

$(document).ready(function() {
  $("form#enterAge").submit(function(event) {
    console.log("helo");
    event.preventDefault();
    var age = parseFloat($("#age").val());
    console.log(age);
    var ageChecker = new Solar(age);
    $("#theirAge").text(ageChecker.checkSeconds());
  });
});
