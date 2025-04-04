let tableau =["","","","",""]

for (let i = 0; i <= tableau.length; i++) {
    console.log("case" +tableau[i]);
    
}
let i =0
let chiffre = 1;
while (i<tableau.length){
    tableau[i] = chiffre;
    i++;
    chiffre++;

}
// avec lettre
tableau.forEach(function (valeur) {
    console.log("case" + valeur);
})

let tableau =["","","","",""];
let lettres =["A","B","C","D","E"];

for (let i = 0; i <= tableau.length; i++) {
    console.log("case" +tableau[i]);
    
}
let i =0
while (i<tableau.length){
    tableau[i] = lettres[i];
    i++;

}

tableau.forEach(function (valeur) {
    console.log("case" + valeur);
})

