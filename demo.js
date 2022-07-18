var items=document.getElementsByClassName('list-group-item');

items[3].style.backgroundColor='green';

for(var i=0;i<items.length;i++)

{

    items[i].style.fontWeight='bold';

}
var header=document.getElementById("main-header");
header.style.border='solid 3px #000';
var titleItem=document.querySelector('.title');
titleItem.style.color= 'red';
titleItem.style.fontWeight='bold';