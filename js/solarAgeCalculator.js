export class Solar {
      constructor(age) {
      this.age = age;
      }

    checkSeconds() {
        let age = (this.age * 31536000);
        console.log(age);
        return age;
    }

    mercuryYears() {
      let ageOnMercury = (this.age * .24);
      console.log(ageOnMercury);

      return ageOnMercury;
    }

    venusYears() {
      let ageOnVenus = (this.age * .62);
      console.log(ageOnVenus);


      return ageOnVenus;
    }

    marsYears() {
      let ageOnMars = (this.age * 1.88);
      console.log(ageOnMars);

      return ageOnMars;
    }

    jupiterYears() {
      let ageOnJupiter = (this.age * 11.86);
      return ageOnJupiter;
    }

    timeSinceBirth() {
      let timeAlive = (moment().diff(this.age));
      let timeAliveSec = (timeAlive/1000);
      let timeAliveMinutes = ((timeAliveSec/60));
      return timeAliveMinutes;
    }

    lifeExpectancyEarth() {
      let asia = parseInt(78);
      let africa = parseInt(70);
      let southAmerica = parseInt(74);
      let australia = parseInt(79);
      if(this.age > 0) {
        let eAsia = (asia - this.age);
        console.log(eAsia);
        let eAfrica = (africa - this.age);
        let eSouthAmerica = (southAmerica - this.age);
        let eAustralia = (australia - this.age);
        return "Your life expectancy (in years) if you live in Asia is  " + eAsia + " ," + eAfrica + "  years for Africa, " + eSouthAmerica + " for South America, " + eAustralia + "  more years if you happen to live in Australia. "
      }
      else if(this.age > 115) {
        return "You have already exceeded life expectancy for planet Earth!";
      }
    }

  lifeExpectancyPlanets() {
    let asia = parseInt(78);
    let africa = parseInt(70);
    let southAmerica = parseInt(74);
    let australia = parseInt(79);
    let yourAge = this.age;
    let trAsia = (asia - yourAge);
    let trAfrica = (africa - yourAge);
    let trSouthAmerica = (southAmerica- yourAge);
    let trAustralia = (australia - yourAge);

    let trMercuryAsia = (trAsia * .24);
    let trMercuryAfrica = (trAfrica * .24);
    let trMercurySouthAmerica = (trSouthAmerica * .24);
    let trMercuryAustralia = (trAustralia * .24);

    let trVenusAsia = (trAsia * .62);
    let trVenusAfrica = (trAfrica * .62);
    let trVenusSouthAmerica = (trSouthAmerica * .62);
    let trVenusAustralia = (trAustralia * .62);

    let trMarsAsia = (trAsia * 1.88);
    let trMarsAfrica = (trAfrica * 1.88);
    let trMarsSouthAmerica = (trSouthAmerica * 1.88);
    let trMarsAustralia = (trAustralia * 1.88);

    let trJupiterAsia = (trAsia * 11.86);
    let trJupiterAfrica = (trAfrica * 11.86);
    let trJupiterSouthAmerica = (trSouthAmerica * 11.86);
    let trJupiterAustralia = (trAustralia * 11.86);
    if(yourAge > 0) {
      let response = "If you live in Asia and travel to the solar system, your life expectancy is: " + trMercuryAsia + " on Mercury, " + trVenusAsia + " on Venus" + trMarsAsia + " for Mars, and " + trJupiterAsia + "  on Jupiter. If you live in Africa and travel to the solar system, your life expectancy is: " + trMercuryAfrica + " on Mercury, " + trVenusAfrica + " on Venus" + trMarsAfrica + " for Mars, and " + trJupiterAfrica + "  on Jupiter. If you live in South America and travel to the solar system, your life expectancy is:" + trMercurySouthAmerica + " on Mercury, " + trVenusSouthAmerica + " on Venus" + trMarsSouthAmerica " for Mars, and " trJupiterSouthAmerica + "  on Jupiter. If you live in Australia and travel to the solar system, your life expectancy is: " + trMercuryAustralia + " on Mercury " + trVenusAustralia + " on Venus" + trMarsAustralia + " for Mars, and " + trJupiterAustralia + "  on Jupiter."
      return response;
    }
  }
}
//I really wanted this loop to work so I could write this out in more simple form, and I spent my weekend working on this; I could make it kind of work in the console, but did not know how to work with the information i was getting, specifially in es6;

// Object.values(countries).forEach((country) => (country - this.age));
//       console.log(country)
//     }
//
// for (const [key, value] of Object.entries(countries)) {
//       console.log('${key} ${value}');
//       }
//
//
// lifeExpectancy() {
//       const countries = {
//       Asia: '78',
//       Africa: '74',
//       SouthAmerica: '74',
//       Australia: '79'
//       };
//       countriesList = []
//       for (const [key, value] of Object.entries(countries)) {
//      console.log(`${key}: ${value}`);
//      let keyValue = ('${key}: ${value}');
//      let country = countriesList.push(keyValue);
//      console.log(country);
//     }
//   }
//
// console.log(Object.values(countries));
//       return(Object.values(countries));
//
//
//
//
// ifeExpectancy() {
//       const countries = {
//       Asia: '78',
//       Africa: '74',
//       SouthAmerica: '74',
//       Australia: '79'
//       };
//       for (const [key, value] of Object.entries(countries)) {
//       if ('${key} ${value}') {
//         '${value}' - this.age;
//
//       }
//     }
//   }
//I know this is completely not what it should be, and I didn't want to do it this way and avoided it until now.
