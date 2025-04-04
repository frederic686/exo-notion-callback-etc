// cours exemple
//exo1
function direBonjour(nom,callback) {
    console.log("bonjour" + nom + "!");
    callback();
}



function direAurevoir() {
    console.log("au revoir");
    
}

direBonjour("Alice", direAurevoir)

// 1

function direBonjour(nom,callback) {
    console.log("bonjour" + nom + "!");
    callback();
}

function nouvellePersonne(nom1,callback) {
    console.log ("bonjour" + nom1 + "!")
    callback();
}

function diresalut(){
    console.log("je remplece alice")
}

function direAurevoir() {
    console.log("au revoir");
    
}
direBonjour("alice",direAurevoir);
nouvellePersonne("jean",diresalut)

// 2 modification de dire bonjour en setimeout
function direBonjour(nom,temps,callback) {
    console.log("bonjour" + nom + "!");
    setTimeout (callback,temps);
}

function nouvellePersonne(nom1,temps,callback) {
    console.log ("bonjour" + nom1 + "!")
    setTimeout (callback,temps);
}

function diresalut(){
    console.log("je remplece alice")
}

function direAurevoir() {
    console.log("au revoir");
    
}
direBonjour("Alice", 1000, direAurevoir);
nouvellePersonne("jean",1000,diresalut)



//exo 2
