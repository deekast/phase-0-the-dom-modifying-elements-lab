// Write your code here!

let mainElement = document.getElementById('main');
mainElement.remove();

let newHeader = document.createElement('h1');
newHeader.id='victory';

let yourName = "Danny";
newHeader.textContent = yourName + " is the champion"