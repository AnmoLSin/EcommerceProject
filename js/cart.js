  var Show=document.getElementById('Show');
var order= JSON.parse(localStorage.order);
var Show_items=document.createElement('div');
display();
function insertBlankLine(targetElement)
{
    var br = document.createElement("br");
    targetElement.appendChild(br);
}
function display()
{
var sum=0;
for(var i=0;i<order.length;i++)
{
  var items_div=document.createElement('div');
  items_div.setAttribute("id",order[i].Id);
  items_div.setAttribute('style','display:inline-block;margin:15px');
    var img=document.createElement("img");
    img.setAttribute('src',order[i].img);
    img.setAttribute('style','width:250;height:250');
  var name=document.createTextNode(order[i].name);
  items_div.appendChild(name);
  insertBlankLine(items_div);
  var desc=document.createTextNode(order[i].desc);
  items_div.appendChild(desc);
  insertBlankLine(items_div);
  var price=document.createTextNode("Price: "+order[i].price);
  items_div.appendChild(price);
  insertBlankLine(items_div);
  var qty=document.createTextNode("Qty: "+order[i].Qty);
  items_div.appendChild(qty);
  Show_items.appendChild(items_div);
  sum+=order[i].Qty*order[i].price;
}
Show.appendChild(Show_items); 
var total=document.createTextNode("Total: "+sum);
var hr=document.createElement('hr');
Show.appendChild(hr);
Show.appendChild(total);
var btn=document.createElement('button');
btn.setAttribute('id','checkout');
btn.setAttribute('style','float:right;background-color:#4CAF50;border:nonecolor: white;text-align: center;text-decoration: none;display: inline-block;font-size: 10px;cursor: pointer;');
btn.innerHTML='Proceed to checkout';
Show.appendChild(btn);
}