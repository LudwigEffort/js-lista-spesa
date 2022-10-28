/*
Descrizione:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Quindi rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
Consigli:
Come posso ciclare su un array con il ciclo while?
*/

const arrGroceryList = [];

const eleGroceryForm = document.querySelector('form'); // setto la const all'oggetto form (in questo caso query funziona senza id o classe?)
const inputGroceryItem = document.querySelector('#input-grocery'); //setto input form
const eleGroceryList = document.querySelector('.grocery-list'); //setto l'oggetto ol 

// creiamo l'event listener (ovvero diamo funzione al form)
eleGroceryForm.addEventListener('submit', 

    function(event) {
        event.preventDefault(); //così disattiviamo...

        if (inputGroceryItem.value) {
            
            //aggiorno i dati
            arrGroceryList.push(inputGroceryItem.value);

            //aggiornare l'interfaccia
            eleGroceryList.innerHTML += `<li>${inputGroceryItem.value}</li>`;

            //svuotare l'input
            inputGroceryItem.value = '';
        }

    }

);

let i = 0;
while (i <= arrGroceryList.length) {
    eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
    i++;
}
