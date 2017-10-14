export class Solar {
      constructor(age) {
      this.age = age;
      }

    checkSeconds() {
        let age = (this.age * 31536000);
        return age;
    }

    mercuryYears() {
      let ageOnMercury = (this.age * .24);
      return ageOnMercury;
    }

    venusYears() {
      let ageOnVenus = (this.age * .62);
      return ageOnVenus;
    }

    marsYears() {
      let ageOnMars = (this.age * 1.88);
      return ageOnMars;
    }

    jupiterYears() {
      let ageOnJupiter = (this.age * 11.86);
      return ageOnJupiter;
    }

    // dateDifference(birthDate)
    //    moment("06-26-1996", "")
    //    let timeNow = moment().subtract(birthdate.)
    //    let birthdateInteger = birthdate
    //    let secondsAlive = (timeNow - birthdate)
    //    return secondsAlive
    // }
    // dateDifference(birthDate) {
    //  let secondsInAge = moment.duration("12:10:12: PM", "HH:mm:ss: A").asSeconds();
    //  let secondsAlive = (secondsInAge - this.age);
    //  return secondsAlive
    // }


}
