$(document).ready(function() {
  $('#time').text(moment().format('LLLL'));
  $("form#birthDate").submit(function(event) {
    event.preventDefault();
    var dob = $("#dob").val();
    console.log(dob);
  });
 });
