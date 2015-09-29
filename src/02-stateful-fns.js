export const statefulFn = (() => {
  let counter = 0;

  return () => {
    return ++counter;
  };
}());

export class Sayan {
  constructor(name, powerLevel) {
    this.name = name;
    this.lifeEnergy = 100;
    this.powerLevel = powerLevel;
  }

  goSuperSayan() {
    this.powerLevel = 10000;
  }

  beKicked() {
    this.lifeEnergy -= 2;
  }

  kick(otherSayan) {
    otherSayan.beKicked();
  }

  getLifeEnergy() {
    return this.lifeEnergy;
  }

  getPowerLevel() {
    return (
      this.powerLevel > 9000 ?
      "It's over 9000!" :
      this.powerLevel);
  }
}