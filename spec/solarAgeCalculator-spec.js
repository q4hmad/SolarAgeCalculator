import { Solar } from './../js/solarAgeCalculator.js';

describe('Solar', function() {

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

  it("will determine a person's age in Jupiter years", function() {
  var age = new Solar(12);
  expect(age.jupiterYears()).toEqual(142.32);
  });

  it("will calculate a user's life expectancy if they live on Mercury", function() {
    var age = new Solar(10, 70);
    expect(age.lifeExpectancyMercury()).toEqual(14.399999999999999 )
  })

  it("will calculate a user's life expectancy if they live on Venus", function() {
    var age = new Solar(10, 70);
    expect(age.lifeExpectancyVenus()).toEqual(40.800000000000004)
  })

  it("will calculate a user's life expectancy if they live on Mars", function() {
    var age = new Solar(10, 70);
    expect(age.lifeExpectancyMars()).toEqual(112.8)
  })

  it("will calculate a user's life expectancy if they live on Jupiter", function() {
    var age = new Solar(10, 70);
    expect(age.lifeExpectancyJupiter()).toEqual(711.5999999999999 )
  })



});
