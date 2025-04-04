
    let tableau= [
        { nom: "geaorge", role: "commandant", niveau: 7, genre: "homme", age: 25, poid: 85, regimeAlimentaire: "viande" },
        { nom: "mickael", role: "chef", niveau: 8, genre: "homme", age: 45, poid: 15, regimeAlimentaire: "viande" },
        { nom: "sara", role: "soldat", niveau: 10, genre: "femme", age: 20, poid: 52, regimeAlimentaire: "fruit" },
        { nom: "loise", role: "soldat", niveau: 7, genre: "femme", age: 25, poid: 45, regimeAlimentaire: "legume" },
        { nom: "marc", role: "cuisinier", niveau: 2, genre: "homme", age: 25, poid: 25, regimeAlimentaire: "viande" },
        { nom: "jean", role: "pilote", niveau: 5, genre: "homme", age: 25, poid: 75, regimeAlimentaire: "fruit" },
        { nom: "vince", role: "agent", niveau: 1, genre: "homme", age: 25, poid: 55, regimeAlimentaire: "viande" }
    ];
function a() {
  for (let i=0; i<tableau.length; i++){
    console.log(tableau[i]);
  }
tableau.forEach(function (a) {
    console.log(a)
});
}
a()

// exemple
let tableau = [
    { nom: "geaorge", role: "commandant", niveau: 7, genre: "homme", age: 25, poid: 85, regimeAlimentaire: "viande" },
    { nom: "mickael", role: "chef", niveau: 8, genre: "homme", age: 45, poid: 15, regimeAlimentaire: "viande" },
    { nom: "sara", role: "soldat", niveau: 10, genre: "femme", age: 20, poid: 52, regimeAlimentaire: "fruit" },
    { nom: "loise", role: "soldat", niveau: 7, genre: "femme", age: 25, poid: 45, regimeAlimentaire: "legume" },
    { nom: "marc", role: "cuisinier", niveau: 2, genre: "homme", age: 25, poid: 25, regimeAlimentaire: "viande" },
    { nom: "jean", role: "pilote", niveau: 5, genre: "homme", age: 25, poid: 75, regimeAlimentaire: "fruit" },
    { nom: "vince", role: "agent", niveau: 1, genre: "homme", age: 25, poid: 55, regimeAlimentaire: "viande" }
];

function a() {
    // Afficher les noms avec une boucle for
    for (let i = 0; i < tableau.length; i++) {
        console.log(tableau[i]);
    }

    // Afficher les objets complets avec forEach (facultatif)
    tableau.forEach(function (membre) {
        console.log(membre);
    });
}

a();