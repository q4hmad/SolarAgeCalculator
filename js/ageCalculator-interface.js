import { Solar } from './../js/ageCalculator.js';

$(document).ready(function() {
  $("form#solarAge").submit(function(event) {
    event.preventDefault();
    var age = $("#age").val();

    var solarAge = new Solar(age);

    $("#ageResult").text(solarAge.calculateSeconds());
  });
});
