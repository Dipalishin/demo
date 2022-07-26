var form=document.getElementById('addform');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');
form.addEventListener('submit',addItem);
itemlist.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

function addItem(e)
{
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var newdesp=document.getElementById('itemdescrip').value;
    var dl=document.createElement('dl');
    var dt=document.createElement('dt');


    dl.className='list-group-item';

    dl.appendChild(document.createTextNode(newItem));
    dt.appendChild(document.createTextNode(newdesp));
    dl.appendChild(dt);
    itemlist.appendChild(dl);
    //delete button
    var deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    dl.appendChild(deletebtn);
    itemlist.appendChild(dl);
    //edit button
    var editbtn=document.createElement('button');
    editbtn.className='btn btn-primary btn-sm float-right';
    editbtn.appendChild(document.createTextNode('Edit'));
    dl.appendChild(editbtn);
    itemlist.appendChild(dl);
    
}
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure'))
        {
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}
function filterItems(e)
{
    var text=e.target.value.toLowerCase();
    var items=itemlist.getElementsByTagName('dl');
    var items1=itemlist.getElementsByTagName('dt');

    Array.from(items).forEach(function(item)
    {
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';}
        else{item.style.display='none';
    }
    })
    Array.from(items1).forEach(function(item1)
    {
        var itemName1=item1.firstChild.textContent;
        if(itemName1.toLowerCase().indexOf(text)!=-1)
        {
            item1.style.display='block';}
        else{item1.style.display='none';
    }
    })  
}