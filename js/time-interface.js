$(document).ready(function() {
  $('#time').text(moment().format('MMM D YYYY'));
  $("form#birthDate").submit(function(event) {
    event.preventDefault();
    var dob = $("#dob").val();
    var timeAlive = new Solar(dob)
    var test = timeAlive.timeSinceBirth();
    
    $("#timeAlive").text(timeAlive.timeSinceBirth());


  });
 });
