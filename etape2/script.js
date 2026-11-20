"use strict"; // from slide 51

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