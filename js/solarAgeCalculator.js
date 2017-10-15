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
      console.log(ageOnJupiter);

      return ageOnJupiter;
    }

    timeSinceBirth() {
      let timeAlive = (moment().diff(this.age));
      let timeAliveSec = (timeAlive/1000);
      let timeAliveMinutes = ((timeAliveSec/60));
      return timeAliveMinutes;
    }

    lifeExpectancy() {
      const countries = {
      Asia: '78',
      Africa: '74',
      SouthAmerica: '74',
      Australia: '79'
      };
      for (const [key, value] of Object.entries(countries)) {
     console.log(`${key}: ${value}`);
    }
  }
}
