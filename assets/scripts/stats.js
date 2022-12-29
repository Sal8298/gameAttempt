// Constructor function which can take in a series of values and create objects
function Character(name, level, expToLevel, profession, strength, vitality, dexterity, hitpoints, attack, combatSpeed) {
    this.name = name;
    this.level = level;
    this.expToLevel = expToLevel;
    this.profession = profession;
    this.strength = strength;
    this.vitality = vitality;
    this.dexterity = dexterity;
    this.hitpoints = hitpoints;
    this.attack = attack;
    this.combatSpeed = combatSpeed;
  }

function Enemy(name, level, profession, strength, vitality, dexterity, hitpoints, attack, combatSpeed) {
    this.name = name;
    this.level = level;
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
      `Name: ${this.name}\nLevel: ${this.level}\nExp till next level up: ${this.expToLevel}\nProfession: ${this.profession}\nStrength: ${this.strength}\nVitality: ${this.vitality}\nDexterity: ${this.dexterity}\nHit Points: ${this.hitpoints}\nAttack: ${this.attack}\nCombat Speed: ${this.combatSpeed}`
    );
    console.log('\n-------------\n');
  };

  Enemy.prototype.printStats = function () {
    console.log(
      `Name: ${this.name}\nLevel: ${this.level}\nProfession: ${this.profession}\nStrength: ${this.strength}\nVitality: ${this.vitality}\nDexterity: ${this.dexterity}\nHit Points: ${this.hitpoints}\nAttack: ${this.attack}\nCombat Speed: ${this.combatSpeed}`
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

  Enemy.prototype.isAlive = function () {
    if (this.hitpoints > 0) {
      console.log(`${this.name} is still alive!`);
      console.log('\n-------------\n');
      return true;
    }
    console.log(`${this.name} has died!`);
    return false;
  };
  
  // Method which takes in a second object and decreases their "hitpoints" by this character's strength
  Character.prototype.basicAttack = function (enemy1) {
    enemy1.hitpoints -= this.attack;
  };

  Enemy.prototype.basicAttack = function (character1) {
    // if (basicDefence) { character1.hitpoints -= this.attack/2
    character1.hitpoints -= this.attack;
  };
  
  const player1 = new Character('Sal', 1, 100, 'Warrior', 10, 10, 10, 100, 10, 1);
  const player2 = new Character('Nick', 1, 100, 'Warrior', 10, 10, 10, 100, 10, 1);
  const enemy1 = new Enemy('Evil Mastermind Garrett', 1, 'Shadow Knight', 25, 25, 25, 250, 25, 2.5);
  const enemy2 = new Enemy('Miguel', 1, 'Shadow Knight Apprentice', 10, 10, 10, 100, 10, 1);
  
  player1.printStats();
  player2.printStats();
  enemy1.printStats();
  enemy2.printStats();
  
  player1.basicAttack(enemy2);
  enemy1.basicAttack(player2);
  
  enemy2.printStats(); // => Miguel Hit Points: 90
  enemy2.isAlive(); // => Miguel is still alive!

  player2.printStats(); // => Nick Hit Points: 75
  player2.isAlive(); // => Nick is still alive!
  
  