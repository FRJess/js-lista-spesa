// Abbiamo un array di alimenti.
// Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
// Consegna:
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while

//VARIABLES DECLARATION AND INITIALIZATION
let elements = ['acqua', 
'pane', 
'pasta', 
'mele', 
'pomodori', 
'uova' ];
let numberOfElement = elements.length;
const list = document.getElementById('aliment-list');
let c = 0;

// FOR CYCLE
// for(let i = 0; i < numberOfElement; i++ ){

//   //element creation
//   const item = document.createElement('li-group-item');
//   item.innerHTML = 'Comprare ' + (elements [i]);

//   //add element to list
//   list.append(item);
// }

//WHILE CYCLE
while (c < numberOfElement){
  const item = document.createElement('li-group-item');
  item.innerHTML = 'Comprare ' + (elements [c]);

  //add element to list
  list.append(item);

  //condition to block cycle
  c++
}