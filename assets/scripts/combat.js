console.log ("Combat Tracking");

/* Game Variables*/
let encounterInitative = [];

/* Turn object */ 
encounterInitative = [
    {name: 'Player1', 
    combatSpeed: 5.12,
    combatInitative: 0,},
    {name: 'Player2', 
    combatSpeed: 1.15,
    combatInitative: 0,},
    {name: 'Encounter1', 
    combatSpeed: 1.14,
    combatInitative: 0,},
    {name: 'Encounter2', 
    combatSpeed: 1.16,
    combatInitative: 0,},
    {name: 'Encounter3', 
    combatSpeed: 1.13,
    combatInitative: 0,},
    {name: 'Encounter4', 
    combatSpeed: 1.13,
    combatInitative: 0,},
];

function nextTurn() {
    for (let i = 0; i < encounterInitative.length; i++) {
        encounterInitative[i].combatInitative = encounterInitative[i].combatInitative + encounterInitative[i].combatSpeed;
    }
    encounterInitative.sort((a, b) => (b.combatInitative > a.combatInitative) ? 1 : (b.combatInitative < a.combatInitative) ? -1 : 0);
    console.log("Next up in combat is " + encounterInitative[0].name + " with a score of " + encounterInitative[0].combatInitative);
    encounterInitative[0].combatInitative = 0;
    // Trigger a attack fuction with encounterInitative[0].name as the attacker
    console.log(encounterInitative);
};

// // Might be used repurposed for looking turns ahead??
// let player1CombatSpeed = 4;
// let player1Initative = 0;

// let player2CombatSpeed = 8;
// let player2Initative = 0;



// let enc1CombatSpeed = 5;
// let enc1Initative = 0;

// let enc2CombatSpeed = 8;
// let enc2Initative = 0;

// let enc3CombatSpeed = 12;
// let enc3Initative = 0;
// function initiativeTracking (){
//     combatInitative = [];
//         for (let i = 0; i < 1; i++) { //Player Slots
//             player1Initative = player1Initative + player1CombatSpeed;
//             combatInitative.push([player1Initative, 'Player 1']);
//         };

//         for (let i = 0; i < 1; i++) { //Player Slots
//             player2Initative = player2Initative + player2CombatSpeed;
//             combatInitative.push([player2Initative, 'Player 2']);
//         };

//         for (let i = 0; i < 1; i++) { //Encounter Slots
//             enc1Initative = enc1Initative + enc1CombatSpeed;
//             combatInitative.push([enc1Initative, 'Monster 1']);
//         };

//         for (let i = 0; i < 1; i++) { //Encounter Slots
//             enc2Initative = enc2Initative + enc2CombatSpeed;
//             combatInitative.push([enc2Initative, 'Monster 2']);
//         };

//         for (let i = 0; i < 1; i++) { //Encounter Slots
//             enc3Initative = enc3Initative + enc3CombatSpeed;
//             combatInitative.push([enc3Initative, 'Monster 3']);
//         };

    
//     combatInitative.sort((a, b) => b[0] - a[0]);
  
//     console.log(combatInitative);
//     };