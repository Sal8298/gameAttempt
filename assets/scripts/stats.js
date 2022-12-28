// Constructor function which can take in a series of values and create objects
function Character(name, profession, strength, vitality, dexterity, hitpoints, attack, combatSpeed) {
    this.name = name;
    this.profession = profession;
    this.strength = strength;
    this.vitality = vitality;
    this.dexterity = dexterity;
    this.hitpoints = hitpoints;
    this.attack = attack;
    this.combatSpeed = combatSpeed;
  }
  
  // Associates the method printStats() to the Character constructor, which prints all of the stats for a character
  Character.prototype.printStats = function () {
    console.log(
      `Name: ${this.name}\nProfession: ${this.profession}\nStrength: ${this.strength}\nVitality: ${this.vitality}\nDexterity ${this.dexterity}\nHit Points ${this.hitpoints}\nAttack ${this.attack}\nCombat Speed ${this.combatSpeed}`
    );
    console.log('\n-------------\n');
  };
  
  // Method which determines if "hitpoints" are greater than zero and returns a boolean depending on the outcome
  Character.prototype.isAlive = function () {
    if (this.hitpoints > 0) {
      console.log(`${this.name} is still alive!`);
      console.log('\n-------------\n');
      return true;
    }
    console.log(`${this.name} has died!`);
    return false;
  };
  
  // Method which takes in a second object and decreases their "hitpoints" by this character's strength
  Character.prototype.basicAttack = function (character2) {
    character2.hitpoints -= this.attack;
  };
  
  const player1 = new Character('Sal', 'Warrior', 10, 10, 10, 100, 10, 1);
  const enemy1 = new Character('Evil Mastermind Garrett', 'Evil Wizard', 25, 25, 25, 250, 25, 2.5);
  
  player1.printStats();
  enemy1.printStats();
  
  player1.basicAttack(enemy1);
  
  enemy1.printStats(); // => Garrett HitPoints: 240
  enemy1.isAlive(); // => Garrett is still alive!
  
  