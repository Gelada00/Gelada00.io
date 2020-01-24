//alert("welcome to JS");
//console.log('welcome to JS');
//var num1='John';
//var num2='Smith';
//result=num1+num2;
//console.log(result);
//document.write(result);
//alert(result);

console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 'DOM in JavaScript';
//
//console.log(document.body);

//to access an element in array and change the contents
//document.all[41].textContent='Welcome to JS tutorial';


//Difference between textContent and innherHTML
var pageheader = document.getElementById('header');
pageheader.textContent = 'new header';
//pageheader.innerHTML = 'Header innerHTML';
console.log(pageheader.textContent);
//console.log(pageheader.innerText);

//pageheader.innerHTML = '<h3> inner Header </h3>';
//console.log(pageheader.textContent);
pageheader.style.borderBottom='2px solid red';

//Arrays and For Loop
var items = document.getElementsByClassName('list-group-item');
items[0].textContent='HTML';
items[1].textContent='CSS';
items[2].textContent='JS';
items[3].textContent='C#';

for(var i=0;i<items.length; i++)
    {
      items[i].style.backgroundColor='yellow';
    }

console.log(items);

//Accessing elements by Tag name
var lists = document.getElementsByTagName('li');
console.log(lists);
lists[7].textContent='OOP programming';
lists[7].style.fontWeight='bold';
lists[7].style.backgroundColor='grey';

for(var i=0;i<lists.length; i++)
    {
      lists[i].style.backgroundColor='grey';
        lists[i].style.fontWeight='bold';
    }

//querySelector using an ID

var header = document.querySelector('#main-header');
header.style.borderBottom = '4px solid pink';

//querySelector using a Class

var header = document.querySelectorAll('.list-group-item');
for(var i=0;i<header.length;i++)
    {
    header[i].style.borderBottom = '4px solid pink';
    }