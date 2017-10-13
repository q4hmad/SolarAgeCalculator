export class Solar {
  constructor(age) {
  this.age = age;
  }

checkSeconds() {
    let age = (this.age * 31536000);
    return age;
}

mercuryYears() {
  let ageInMercury = (this.age * 4.2);
  return ageInMercury;
}

venusYears() {
  let ageInVenus = (this.age * 1.62)
}

}
