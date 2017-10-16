export class Solar {
      constructor(age, lifeExpectancy) {
      this.age = age;
      this.lifeExpectancy = lifeExpectancy;
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

    lifeExpectancyMercury() {
      let timeRemaining = (this.lifeExpectancy - this.age);
      let timeOnMercury =  (timeRemaining * .24);
      return timeOnMercury;
    }

    lifeExpectancyVenus() {
      let timeRemaining = (this.lifeExpectancy - this.age);
      let timeOnVenus = (timeRemaining * .68);
      return timeOnVenus;
    }

    lifeExpectancyMars() {
      let timeRemaining = (this.lifeExpectancy - this.age);
      let timeOnMars = (timeRemaining * 1.88);
      return timeOnMars;
   }

    lifeExpectancyJupiter() {
      let timeRemaining = (this.lifeExpectancy - this.age);
      let timeOnJupiter = (timeRemaining * 11.86);
      return timeOnJupiter;
    }
  }
