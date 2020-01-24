//every line should end with a simicolon

//alert('Welcome');
//console.log("Welcome to JavaScript");

//clear(); to clear the screen 

//To examin the document object
//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);

////To change the existing title, you can as DOM is not read only
//document.title = 'Welcome to DPP'; 

//console.log(document.head);
//console.log(document.body);

//It will display all the elements of the document in an array 
//console.log(document.all);
//
////To replace an array item no. 14 in array (h1)
//document.all[14].textContent='New hear from JS file';
//
////Get Element by ID
//console.log(document.getElementById('header'));
            //pageheader.textContent ='Hello';
            //pageheader.innerText ='Goodbye';

////Difference between textContent and innerText
//var pageheader = document.getElementById('header');
////see the following result in console
//console.log(pageheader.textContent);
//console.log(pageheader.innerText);

//replacing the current h1 with h3 tag, using innerHTML 
//pageheader.innerHTML = '<h3> New H3 header </h3>';

//to set style for the pageheader and main-header
//pageheader.style.borderBottom = 'solid 2px green';
//
//var pmainheader = document.getElementById('main-header');
//pmainheader.style.borderBottom = 'solid 2px grey';


//GET ELEMENTS BY CLASS NAME
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
////The following result should be seen in console and web page
//items[2].textContent = "JavaScript";
//items[2].style.fontWeight= 'bold';
//items[2].style.backgroundColor= 'grey';
//
////to apply style to all elements, use a loop
//for (var i =0; i<items.length; i++)
//    {
//        items[i].style.backgroundColor = 'yellow';
//        console.log(i);
//    }
//                   

////GET ELEMENTS BY TAG NAME
//var li=document.getElementsByTagName('li');
//console.log(li);
////The following result should be seen in console and web page
//li[2].textContent = "JavaScript";
//li[2].style.fontWeight= 'bold';
//li[2].style.backgroundColor= 'pink';
//
////to apply style to all elements, use a loop
//for (var i =0; i<li.length; i++)
//    {
//        li[i].style.backgroundColor = 'grey';
//    }
//             

//The querySelector() returns the first element that matches a specified CSS selector(s) in the document. Note: The querySelector() method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead.

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px red';

//var submit1 = document.querySelector('input[type="submit"]');
//submit1.value = "Send";

document.write("<h1> Welcome ... </h1>");
document.writeln("<h1> Welcome ... </h1> <br>");
document.write("<p> This is a para.... </p>")