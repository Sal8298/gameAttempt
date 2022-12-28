console.log ("Combat Tracking");

/* Game Variables*/
let combatInitative = [];




let playerSlot1CombatSpeed = 2;
let playerSlot1Initative = 0;

let encSlot1CombatSpeed = 12;
let encSlot1Initative = 0;



function initiativeTracking (){
    console.log(combatInitative.length);
        for (let i = 0; i < 3; i++) { //Player Slots
            playerSlot1Initative = playerSlot1Initative + playerSlot1CombatSpeed;
            combatInitative.push([playerSlot1Initative, 'playerSlot1']);
        };

        for (let i = 0; i < 3; i++) { //Encounter Slots
            encSlot1Initative = encSlot1Initative + encSlot1CombatSpeed;
            combatInitative.push([encSlot1Initative, 'encSlot1']);
        };

    
    combatInitative.sort((a, b) => a[0] - b[0]);

    
    console.log(combatInitative);
    console.log("Next up in combat is "+ combatInitative[0][1]);
    // Trigger a attack fuction with combatInitative[0][1] as the attacker
    combatInitative.shift();
    console.log(combatInitative);


    };