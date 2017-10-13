export class Solar {
  constructor(age) {
  this.age = age;
  }

checkSeconds() {
    let age = (this.age * 31536000);
    return age;
}

mercuryYears() {
  let ageInMercury = (this.age * .24);
  return ageInMercury;
}

venusYears() {
  let ageInVenus = (this.age * .62);
  return ageInVenus;
}

marsYears() {
  let ageInMars = (this.age * 1.88);
  return ageInMars;
}

}
