import { Solar } from './../js/solarAgeCalculator.js';

describe('Poem', function() {

  it("will show age in seconds", function() {
  var age = new Solar(1);
  expect(age.checkSeconds()).toEqual(31536000);
  });

  it("will determine a person's age in Mercury years", function() {
  var age = new Solar(12);
  expect(age.mercuryYears()).toEqual(2.88);
  });

  it("will determine a person's age in Venus years", function() {
  var age = new Solar(12);
  expect(age.venusYears()).toEqual( 7.4399999999999995 );
  });

  it("will determine a person's age in Mars years", function() {
  var age = new Solar(12);
  expect(age.marsYears()).toEqual(22.56);
  });




});
