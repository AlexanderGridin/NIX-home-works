let table = document.querySelector('#age-table');
console.log(table);

let labels = table.querySelectorAll('label');
console.log(labels);

let firstTd = table.querySelector('td');
console.log(firstTd);

let searchForm = document.querySelector('form[name="search"]');
console.log(searchForm);

let firstInput = searchForm.querySelector('input');
console.log(firstInput);

let lastInput = searchForm.querySelectorAll('input');
lastInput = lastInput[lastInput.length - 1];
console.log(lastInput);