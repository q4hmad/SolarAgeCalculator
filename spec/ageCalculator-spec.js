import { Solar } from './../js/ageCalculator.js';

describe('Solar', function() {

  it("will return input", function() {
  var age = new Solar(34);
  expect(age.secondsCalculator()).toEqual(68);
  });
});
