let bonbon=prompt ("combien de bonbon tu veut ?");
let argent= prompt ("combien tu a d'argent ");
quantiteBonbon(bonbon,argent)
function quantiteBonbon(bonbon,argent) {
    let bonbonAquis = 0;
    if (argent>bonbon) {
        argent=argent-bonbon
        bonbonAquis ++;

        console.log ("Tu peux acheter le bonbon !")
        
    }

    if (argent<bonbon) {
        console.log("Il te manque" + argent+ "pièces.")
    }


}

// bonbon

// bonbon version 1
let bonbon=2* prompt ("combien de bonbon tu veut ?");
let argent= prompt ("combien tu a d'argent ");
quantiteBonbon(bonbon,argent)
function quantiteBonbon(bonbon,argent) {
    let bonbonAquis = 0;
    while (argent>bonbon) {
        argent=argent-bonbon
        bonbonAquis ++;

        console.log ("Tu peux acheter le bonbon !");
 

    if (argent<bonbon) {
        console.log("Il te manque" + argent+ "pièces.");
    }
        return false

}
}

// bonbon version 2
let bonbon=2* prompt ("combien de bonbon tu veut ?");
let argent= prompt ("combien tu a d'argent ");

function quantiteBonbon(bonbon,argent) {
    let bonbonAquis = 0;
    if (argent>bonbon) {
        argent=argent-bonbon
        bonbonAquis ++;

        console.log ("Tu peux acheter le bonbon ! " +bonbonAquis+ "mais il te reste" + argent + "euros");
        
    }

    if (argent < bonbon) {
        console.log("Il te manque" +  + "pièces.");
    }

    else {
        console.log(" tu as achete" + bonbonAquis + "au total");
    }
return

}
quantiteBonbon(bonbon,argent)


//exercice 2 finit


function conseilMeteo(){
    let meteo=prompt(" quel temp fait t'il?")

if (meteo == "soleil") {
    console.log("Mets de la crème solaire !");

 } else if (meteo == "pluie") {
    console.log("Prends ton parapluie !");

 } else if (meteo == "neige") {
    console.log("bonhomme de neige youpie");

 }else if (meteo == "vent") {
    console.log("couvre toi");

 }

}
conseilMeteo()







