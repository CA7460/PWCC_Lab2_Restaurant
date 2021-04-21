const data = {

    "menu": {
        "entree": {
            "Choisissez une option": {
                "prix": "0.00",
                "pic": "media/images/entree/entree.jpg"
            },
            "salade": {
                "prix": 5.95,
                "pic": "media/images/entree/salad.jpg"
            },
            "escargot": {
                "prix": 4.95,
                "pic": "media/images/entree/escargot.jpg"
            }
        },

        "repas": {
            "Choisissez une option": {
                "prix": "0.00",
                "pic": "media/images/repas/repas.jpg"
            },
            "spagetti": {
                "prix": 8.95,
                "pic": "media/images/repas/spagetti.jpg"
            },
            "lasagne": {
                "prix": 9.95,
                "pic": "media/images/repas/lasagne.jpg"
            }
        }
    }
}

const menu = data.menu;

//inserer les toutes  options dans les categories
function pushOption(listOptions, menuSection) {
    for (item in menuSection) {
        listOptions[listOptions.length] = new Option(item);
    }
}

//inserer toutes les categories
function populateMenu() {
    for (menuSection in menu) {
        const listOptions = document.getElementById(menuSection);
        pushOption(listOptions.options, menu[menuSection]);
    }
}

//remplir l'image, le prix et calculer total
function calculate(optionList) {
    
    let id = optionList.id; // avoir le nom du id (categorie)
    let choice = optionList[optionList.selectedIndex].value; // avoir le nom de item de repas/entree

    document.getElementById(id + 'Prix').innerText = menu[id][choice]["prix"]; // mettre en place le prix
    document.getElementById(id + 'Img').src = menu[id][choice]["pic"]; // mettre en place l'image'

    document.getElementById("total").innerText = getTotal(); 
}

//avoir le string de Total
function getTotal() {
    let total = 0;
    for (price of document.getElementsByClassName("prix")) {
        total += parseFloat(price.innerText);
    }
    let totTaxes = (total * 1.14975);
    let taxes = totTaxes - total;

    return `Sous-total : ${total.toFixed(2)}$ \t Taxes: ${taxes.toFixed(2)}$ \t Total: ${totTaxes.toFixed(2)}$`;
}

