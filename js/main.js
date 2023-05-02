// seleziono elemento contenitore
const contenitore = document.getElementById("contenitore");
console.log(contenitore);

// ciclo le operazioni di creazione e di output
for (let i = 1; i <= 100; i++){

    // creo nuovo elemento
    const quadrato = document.createElement('span');

    // aggiungo una classe ad ogni span
    quadrato.classList.add('square');

    // inserisco il valore all'interno dell'elemento creato
    quadrato.append(i);

    // aggiungo al contenitore l'elemento creato
    contenitore.append(quadrato);

}
