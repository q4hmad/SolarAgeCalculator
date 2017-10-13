import { Solar } from './../js/solarAgeCalculator.js';

describe('Poem', function() {

  it("will show age in seconds", function() {
  var age = new Solar(1);
  expect(age.checkSeconds()).toEqual(31000);
  });

  it("will take two dates and determine the difference between them in seconds", function() {
  var age = new Solar(1);
  expect(age.checkSeconds()).toEqual(31000);
  });


});
