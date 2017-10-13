import { Solar } from './../js/solarAgeCalculator.js';

$(document).ready(function() {
  $("form#enterAge").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#age").val());

    var ageChecker = new Solar(age);

    $("#theirAge").text(ageChecker.checkSeconds());
  });

  $(document).ready(function(){
  $('#time').text(moment());
});
});
