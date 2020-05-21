class Magic {
  constructor(name) {
    this.name = name;
    this.attack = 100;
    this.stoned = false;
    this.distanceAttack = 2;
  }

  set attack(value) {
    this.newattack = value;
    return this.newattack;
  }

  get attack() {
    let attack = ((11 - this.distanceAttack) / 10) * this.newattack;

    if (this.stoned === true) {
      attack -= Math.log2(this.distanceAttack) * 5;
    }

    return attack;
  }

  set stoned(value) {
    if (value === true) {
      this.newstoned = true;
    } else {
      this.newstoned = false;
    }
  }

  get stoned() {
    return this.newstoned;
  }
}

export default Magic;
