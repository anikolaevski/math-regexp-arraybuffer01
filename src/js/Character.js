/* eslint-disable no-useless-constructor */
export default class Character {
  constructor(obj) {
    this.name = obj.name;
    this.health = obj.health;
    this.level = obj.level;
    this.attack = 5;
    this.defense = 5;
  }

  curProps() {
    return {
      name: this.name,
      level: this.level,
      health: this.health,
      attack: this.attack,
      defense: this.defense,
    };
  }
}
