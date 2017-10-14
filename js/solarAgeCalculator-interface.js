import { Solar } from './../js/solarAgeCalculator.js';

$(document).ready(function() {
  $("form#enterAge").submit(function(event) {
    event.preventDefault();
    var age = parseFloat($("#age").val());

    var ageChecker = new Solar(age);

    $("#theirAge").text(ageChecker.checkSeconds());
  });

$(document).ready(function(){
  $("#check").on('click', function() {
    var moment = moment();
    var now = moment($("#dateOfBirth").val());
    var diff = now.diff(moment);
    $('#time').text("diff between now and moment in msecs-", diff);


  });
});




// let [day,month,year] = $('#datePicker').val().split('-');
//
