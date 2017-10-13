import { Solar } from './../js/solarAgeCalculator.js';

describe('Poem', function() {

  it("will show age in seconds", function() {
  var age = new Solar(1);
  expect(age.checkSeconds()).toEqual(31536000);
  });

  it("will determine a person's age in Mercury years", function() {
  var age = new Solar(12);
  expect(age.mercuryYears()).toEqual(50.400000000000006);
  });

  it("will tdetermine a person's age in Venus years", function() {
  var age = new Solar(10);
  expect(age.mercuryYears()).toEqual(42);
  });



});
