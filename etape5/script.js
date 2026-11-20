"use strict"; // from slide 51

let lignes = 0 ;
let total_points = 0;

const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];


init();

function init(){
    for(const p of persons){
        doInsert(p.nom,p.prenom,p.points);
    }
}

function doInsert(nom,prenom,points){
    lignes++;
    total_points += points;
    updateSummary();
    doInsertRowTable(lignes,nom,prenom  ,points);
}

function updateSummary(){
    const element_lignes = document.getElementById("p1");
    element_lignes.innerText = lignes + " ligne(s)";

    const element_points = document.getElementById("p3");
    element_points.innerText = "Total point(s)= " + total_points;
    
}


function doNewData(){
    const elt_nom = document.getElementById("form_nom").value;
    const elt_prenom = document.getElementById("form_prenom").value;
    const elt_points = parseInt(document.getElementById("form_points").value);

    if(elt_nom == "" || elt_prenom == "" || Number.isNaN(elt_points)){
        alert("Formulaire incomplet !");
        }
        else{
            
            

            doInsert(elt_nom,elt_prenom,elt_points);
            persons.push({ nom: elt_nom, prenom: elt_prenom, points: elt_points });
        }
    

}



function consoleTableau(){
    console.log(persons);
}



function doInsertRowTable(num, nom, prenom, points) { // functions from slide 45
    const table = document.getElementById("table");    // getting an element by id from slide 61
    const row = document.createElement("tr");
    row.setAttribute("class","row");             // setAttribute() from slide 87    

    const c1 = document.createElement("td");     // createElement() from slide 104
    const c2 = document.createElement("td");
    const c3 = document.createElement("td");
    const c4 = document.createElement("td");
    const c5 = document.createElement("td");

    c1.innerHTML = num;                          // innerHtlm/Text from slide 34
    c2.innerHTML = nom;
    c3.innerText = prenom;
    c4.innerText = points;

    const ch = document.createElement("input");
    ch.setAttribute("type","checkbox");
    c5.append(ch);                              // from slide 87 from https://www.w3schools.com/jsref/dom_obj_all.asp

    c1.setAttribute("class","col_number");
    c2.setAttribute("class","col_text");
    c3.setAttribute("class","col_text");
    c4.setAttribute("class","col_number");
    c5.setAttribute("class","col_chkbox");

    row.append(c1,c2,c3,c4,c5);
    table.append(row);                          // from slide 87 from https://www.w3schools.com/jsref/dom_obj_all.asp
}