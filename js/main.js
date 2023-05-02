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

    // // aggiungo le condizioni per i numeri divisibili sia per 3 che per 5
    if (i % 3 == 0 && i % 5 == 0){
        quadrato.classList.remove('square');
        quadrato.classList.add('fizzbuzz');
        quadrato.innerHTML = "fizzBuzz";
    }
    // aggiungo le condizioni per i numeri divisibili per 3
    else if (i%3==0){
        quadrato.classList.remove('square');
        quadrato.classList.add('fizz');
        quadrato.innerHTML = "fizz";
    }
    // aggiungo le condizioni per i numeri divisibili per 5
    else if (i%5==0){
        quadrato.classList.remove('square');
        quadrato.classList.add('buzz');
        quadrato.innerHTML = "buzz";
    }
}
