var items=document.getElementsByClassName('list-group-item');

//items[3].style.backgroundColor='green';

for(var i=0;i<items.length;i++)

{
    items[i].style.fontWeight='bold';
    items[i].style.backgroundColor='#f4f4f4';
}
//getelementbytagname
/*var li=document.getElementsByTagName('li');
for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor='#f4f4f4';
    li[i].style.fontWeight=' bold ';
    li[i].style.color='green';
}*/
var header=document.getElementById("main-header");
header.style.border='solid 3px #000';
var titleItem=document.querySelector('.title');
titleItem.style.color= 'red';
titleItem.style.fontWeight='bold';
