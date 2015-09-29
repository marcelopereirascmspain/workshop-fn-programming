export const statefulFn = () => {
  
};

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

  }

  kick(otherSayan) {
    
  }

  getLifeEnergy() {
    
  }

  getPowerLevel() {
    return (
      this.powerLevel > 9000 ?
      "It's over 9000!" :
      this.powerLevel);
  }
}