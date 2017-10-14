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



}
