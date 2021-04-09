var menu = {   
            "entrees":[
                        {"nom": "Salade", "prix": 5.95, "image":"images/entrées/Salade.png"}, 
                        {"nom": "Escargots", "prix": 4.95, "image":"images/entrées/Escargots.png"}
                        ],
            "repas":[
                        {"nom": "Steak", "prix": 10.95, "image":"images/repas/Steak.png"}, 
                        {"nom": "Lasagne", "prix": 9.95, "image":"images/repas/Lasagne.png"}
                        ]
            };

var prixEntree = 0, prixRepas = 0, sousTot, taxes, total;            
                
function chargerMenu() {
    let tabEntrees = menu.entrees;
    let tabRepas = menu.repas;
    let selectEntrees = document.getElementById("select-entrees");
    let selectRepas = document.getElementById("select-repas");

    for (uneEntree of tabEntrees) {
        selectEntrees.options[selectEntrees.length] = new Option(uneEntree.nom);
    }

    for (unRepas of tabRepas) {
        selectRepas.options[selectRepas.length] = new Option(unRepas.nom);
    }
}

function afficherEntree() {
    let posEntree = document.getElementById("select-entrees").selectedIndex-1;
    
    if(posEntree!=-1){
        let entreeChoisie = menu.entrees[posEntree];

        console.log(posEntree);
        document.getElementById("image-entree").src = entreeChoisie.image;
        document.getElementById("image-entree").style.visibility = "visible";
        document.getElementById("prix-entree").innerHTML= "<b>" + entreeChoisie.prix + "$</b>";

        prixEntree = parseFloat(menu.entrees[posEntree].prix);
    } 
    else {
        prixEntree = 0;
        document.getElementById("image-entree").style.visibility = "hidden";
        document.getElementById("prix-entree").innerHTML= "";
    }

    afficherPrix();
}

function afficherRepas() {
    let posRepas = document.getElementById("select-repas").selectedIndex-1;
    
    if(posRepas!=-1){
        let repasChoisie = menu.repas[posRepas];

        document.getElementById("image-repas").src = repasChoisie.image;
        document.getElementById("image-repas").style.visibility = "visible";
        document.getElementById("prix-repas").innerHTML= "<b>" + repasChoisie.prix + "$</b>";

        prixRepas = parseFloat(menu.repas[posRepas].prix);   
    } 
    else {
        prixRepas = 0;
        document.getElementById("image-repas").style.visibility = "hidden";
        document.getElementById("prix-repas").innerHTML= "";
    }

    afficherPrix();
}

function afficherPrix() {

    sousTot = prixEntree + prixRepas;
    taxes = sousTot * 0.1495;
    total = sousTot + taxes;

    document.getElementById("sous-total").innerHTML = sousTot.toFixed(2) + "$";
    document.getElementById("taxes").innerHTML = taxes.toFixed(2) + "$";
    document.getElementById("total").innerHTML = "<b>" + total.toFixed(2) + "$</b>";
}