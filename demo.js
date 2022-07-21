var form=document.getElementById('addform');
var itemlist=document.getElementById('items');
form.addEventListener('submit',addItem);
itemlist.addEventListener('click',removeItem);
function addItem(e)
{
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemlist.appendChild(li);
    //delete button
    var deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    itemlist.appendChild(li);
    //edit button
    var editbtn=document.createElement('button');
    editbtn.className='btn btn-primary btn-sm float-right';
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);
    itemlist.appendChild(li);
    
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