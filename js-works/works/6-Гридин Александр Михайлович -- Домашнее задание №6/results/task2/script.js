let table = document.querySelector('table');

for(let i = 0; i < table.rows.length; i++){
  let row = table.rows[i];

  for(let j = 0; j < row.cells.length; j++){
    if(j === i){
      row.cells[i].style.backgroundColor = 'red';
      break;
    }
  }
}