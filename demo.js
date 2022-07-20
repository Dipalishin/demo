//travesing dom
var item=document.querySelector('#items');
console.log(item.parentElement.parentElement.parentElement);
//console.log(item.childNodes);
//console.log(item.children);
console.log(item.firstElementChild);
console.log(item.lastElementChild);
console.log(item.firstChild);
console.log(item.lastChild);
var h2=document.querySelector('.title');
console.log(h2.nextSibling);
console.log(h2.nextElementSibling);
console.log(h2.previousSibling);
console.log(h2.parentElement);

//create new element
var newdiv=document.createElement('div');
console.log(newdiv);
newdiv.className='hello';
newdiv.id='hello1';
newdiv.setAttribute('title','Hello Div');
var newdivtext=document.createTextNode('Hello World');
newdiv.appendChild(newdivtext);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newdiv);
newdiv.style.fontSize='30px';
newdiv.style.color='yellow';
container.insertBefore(newdiv,h1);

var newdiv1=document.createElement('div');
newdiv1.className='hello';
newdiv1.setAttribute('title','hello');
var newdivtext1=document.createTextNode('Hello World');
newdiv1.appendChild(newdivtext1);
var container1=document.querySelector('div #main');
var h2=document.querySelector('div h2');
console.log(newdiv1);
newdiv1.style.fontSize='30px';
newdiv1.style.color='pink';

container1.insertBefore(newdiv1,h2);





