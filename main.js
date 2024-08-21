const chaName1 = prompt('Fighter 1 name: ');
let chaHP1 = prompt(`PS for ${chaName1}`, 'insert a number between 100 and 500');
const chaName2 = prompt('Fighter 2 name: ');
let chaHP2 = prompt(`PS for ${chaName2}`, 'insert a number between 100 and 500');


alert(`Today's fight is: ${chaName1} vs ${chaName2}!!!!`);
let frozen1 = false;
let frozen2 = false;

let turn = 0;

while(chaHP1 > 0 && chaHP2 > 0) {
    turn += 1;
    alert(`ROUND ${turn}`);
    if(frozen1 === false) {
        let cha1_damage = (Math.round(Math.random() * 4) / 4) * 100;
        if(cha1_damage === 0) {
            alert(`${chaName1} missed the attack!`);
            alert(`${chaName2} HP is: ${chaHP2}.`)
        } else if (cha1_damage === 100) {
            alert(`${chaName1} has launched its powerful attack and it is making ${cha1_damage}.`);

            //Character 2 has 25% chance to stop the attack
            let cha2_deffense = (Math.round(Math.random() * 4) / 4) * 100;
            if (cha2_deffense < 25) {
                alert(`INCREDIBLE!! ${chaName2} was so fast to evade ${chaName1} attack!!`);
            } else {
                chaHP2 = chaHP2 - cha1_damage;
                frozen2 = true;
            }

            //We need to check if Character 2 is dead after a strong attack, if it is not dead, we will use continue to skip Character 2 attack
            if(chaHP2 <= 0) {
                break; // if Character 2 is dead (PS < or = to 0) then its been defeated
            } else {
                alert(`${chaName2} HP is: ${chaHP2}.`)
                //alert(`${chaName2} is frozen and cannot move!`);  
            }

        } else {
            alert(`${chaName1} attack is: ${cha1_damage}.`);

            //Character 2 has 25% chance to stop the attack
            let cha2_deffense = (Math.round(Math.random() * 4) / 4) * 100;
            if (cha2_deffense < 25) {
                alert(`${chaName2} was faster and evaded ${chaName1} attack!`);
            } else {
                chaHP2 = chaHP2 - cha1_damage;
            }

            if(chaHP2 <= 0) {
                break; // if Character 2 is dead (PS < or = to 0) then its been defeated
            } else {
                alert(`${chaName2} HP is: ${chaHP2}.`) 
            }
        }
    } else if (frozen1 === true) {
        alert(`${chaName1} is frozen and cannot move!`);
        frozen1 = false;
    }
    
    

    //After attack/deffense - PS of character 2 are checked
    if(chaHP2 <= 0) {
        break; // if Character 2 is dead (PS < or = to 0) then its been defeated
    } else if (frozen2 === false) {
        let cha2_damage = (Math.round(Math.random() * 4) / 4) * 100
        if(cha2_damage === 0) {
            alert(`${chaName2} missed the attack!`);
            alert(`${chaName1} HP is: ${chaHP1}.`)
        } else if (cha2_damage === 100) {
            alert(`${chaName2} has launched its powerful attack and it is making ${cha2_damage}.`);

            //Character 2 has 25% chance to stop the attack
            let cha1_deffense = (Math.round(Math.random() * 4) / 4) * 100;
            if (cha1_deffense < 25) {
                alert(`INCREDIBLE!! ${chaName1} was so fast to evade ${chaName2} attack!!`);
            } else {
                chaHP1 = chaHP1 - cha2_damage;
                frozen1 = true;
            }

            //We need to check if Character 1 is dead after a strong attack, if it is not dead, we will use continue to skip Character 2 attack
            if(chaHP1 <= 0) {
                break; // if Character 1 is dead (PS < or = to 0) then its been defeated
            } else {
                alert(`${chaName1} HP is: ${chaHP1}.`)
            }

        } else {
            alert(`${chaName2} attack is: ${cha2_damage}.`);

            //Character 2 has 25% chance to stop the attack
            let cha1_deffense = (Math.round(Math.random() * 4) / 4) * 100;
            if (cha1_deffense < 25) {
                alert(`${chaName1} was faster and evaded ${chaName2} attack!`);
            } else {
                chaHP1 = chaHP1 - cha2_damage;
            }

            if(chaHP1 <= 0) {
                break; // if Character 1 is dead (PS < or = to 0) then its been defeated
            } else {
                alert(`${chaName1} HP is: ${chaHP1}.`)
            }
        }
    } else if(frozen2 === true) {
        alert(`${chaName2} is frozen and cannot move!`);
        frozen2 = false;
    }

}

if(chaHP2 <= 0) {
    alert(`${chaName1} has destroyed ${chaName2} in ${turn} rounds!`); // if Character 2 is dead (PS < or = to 0) then its been defeated
}

if(chaHP1 <= 0) {
    alert(`${chaName2} has destroyed ${chaName1} in ${turn} rounds!`);  // shows if Character 2 is dead
}









