function appendOperation(operation) {
    document.getElementById('resultArea').innerHTML += operation;
} 

function calculateResult() {
    let container = document.getElementById('resultArea');
    let result = eval(container.innerHTML)   /// eval = evaluiert.  wird zusammengerechnet!

    container.innerHTML = result;
}

function deleteLast() {
    let container = document.getElementById('resultArea');
    if(container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3); // -3 wegen den leerzeichen bei den operatoren (siehe index.html)
    } else{
    container.innerHTML = container.innerHTML.slice(0, -1);  //  für die Zahlen (DEL löscht letzte Eingabe/Ziffer)
    }

}

function deleteAll() {
    let container = document.getElementById('resultArea');
    container.innerHTML = "";    //   CLEAR (resultArea wird komplett gelöscht)
}
