

function addition(a,b){
   return a + b;
}
let resultat =addition(5,2)
console.log (resultat)


    let c = prompt ("a");
    let d = prompt ("b");
function addition(a,b){

    let a = parseInt(c);
    let b = parseInt(d);

    if(isNaN(a) || isNaN(b)) {
        return;
}
    return a + b;
}
 let resultat =addition(a, b);
 console.log (resultat);
 

 let a = prompt("a");
 let b = prompt("b");
 
 function addition(a, b) {

   let nombreA = parseInt(a);
   let nombreB = parseInt(b);
 

   if (isNaN(nombreA) || isNaN(nombreB)) {
     return "Entrée invalide. Veuillez entrer des nombres.";
   }
 
   return nombreA + nombreB;
 }
 
 let resultat = addition(a, b);
 console.log(resultat);






function compterebour(i) {
    while (i>0) {
        console.log(i);
        i--;
        
    }
    console.log("boom")
}
compterebour(20)