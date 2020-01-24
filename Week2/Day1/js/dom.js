//alert("Welcome to JS");
//console.log('Welcome to JS');
//var num1 = 'John';
//var num2 = 'Smith';
//result = num1 + ' ' + num2;
//console.log(result);
//document.write(result);
//

console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = "DOM in JavaScript";
//console.log(document.title);
//
//console.log(document.body);

//to access the element of array and change the contents
//document.all[41].textContent = "Welcome to JavaScript tutorial";

//Difference between textContent and innerHTML
var pageHeader = document.getElementById("header");
pageHeader.textContent = 'new header';
//pageHeader.innerHTML = 'Header interHTML';

//textContent = shows what exactly is there, even if something is hidden from the reader 
//innerText = shows what visible to the public only
console.log(pageHeader.textContent);
//console.log(pageHeader.innerText);

//
//pageHeader.innerHTML = '<h3> inner Header </h3>';
//console.log(pageHeader.textContent);

pageHeader.style.borderBottom = '2px solid red';

//Arrays and For loop
var items = document.getElementsByClassName('list-group-item');
items[0].textContent = 'HTML';
items[1].textContent = 'CSS';
items[2].textContent = 'JS';
items[3].textContent = 'C#';

for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'yellow';
}
console.log(i);

// Accessing elements by tag name
var lists = document.getElementsByTagName('li');
console.log(lists);
lists[8].textContent = 'OOP Programming';

for (var i = 0; i < lists.length; i++) {
    lists[i].style.fontWeight = 'bold';
    lists[i].style.background = 'grey';
}

//querySelector using an ID
var header = document.querySelector('#main-header');
header.style.borderBottom = '4px solid pink';

//querySelector using a class
var header = document.querySelectorAll('.list-group-item');

for(var i = 0; i < header.length; i++){
header[i].style.borderBottom = '4px solid pink';
}





