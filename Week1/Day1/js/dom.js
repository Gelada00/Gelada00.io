
console.dir(document);

console.log(document.body);

var newHeader = document.getElementsByTagName('h1');
console.log(newHeader);
//newHeader.textContent = 'This is new header to the page';
newHeader[0].textContent = 'Hello';
newHeader[0].style.backgroundColor = 'green';

var tableNames = document.getElementsByTagName('td');

for(var i = 0; i < tableNames.length; i++){
    tableNames[i].style.backgroundColor = 'orange';
    tableNames[i].style.fontFamily = 'times new norman';
    tableNames[i].style.fontWeight = 'bold';
    tableNames[i].style.color = 'black';
}

var tableHead = document.querySelectorAll('th');
for(var i = 0; i < tableHead.length; i++){
    tableHead[i].style.color = 'purple';
    tableHead[i].style.border = '2px solid red';
}