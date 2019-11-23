var cloth=document.getElementById('cloth');
var acc=document.getElementById('acc');
var foot=document.getElementById('foot');
var bag=document.getElementById('bag');
var products=JSON.parse(localStorage.products);
var list=document.createElement("ul");
list.setAttribute("id","list");
var divdis=document.getElementById('divdis');
divdis.appendChild(list);
cloth.addEventListener('click',function(){
  for(var i=0;i<products.length;i++)
  {
    if(products[i].category=='Men')
    {
      if(products[i].subcategory=='Clothing')
      {
var delete_btn=document.createElement("button");
delete_btn.setAttribute("id","del1");
var item=document.createElement("li");
item.setAttribute('style','display:inline-block;padding: 10px 10px');
list.appendChild(item);
var showDiv=document.createElement('div');
showDiv.setAttribute('style','background-color:white');
  item.setAttribute('id',i);
item.appendChild(showDiv);
var image=document.createElement('img');
image.setAttribute('src',products[i].img);
image.setAttribute('style','width:250;height:250');
 showDiv.appendChild(image);
  insertBlankLine(showDiv);
var name=document.createTextNode("Name: "+products[i].pro_name);
  showDiv.appendChild(name);
  insertBlankLine(showDiv);
  var desc=document.createTextNode("Description: "+products[i].pro_desc);
  showDiv.appendChild(desc);
  insertBlankLine(showDiv);
    var price=document.createTextNode("Price: "+products[i].pro_price);
  showDiv.appendChild(price);
  insertBlankLine(showDiv);
  var qty=document.createTextNode("Qty: "+products[i].pro_qty);
  showDiv.appendChild(qty);
  insertBlankLine(showDiv);

var edit_btn=document.createElement("button");
edit_btn.setAttribute("id","edit");
edit_btn.innerHTML="Edit";
showDiv.appendChild(edit_btn);
showDiv.innerHTML+=" ";
delete_btn.innerHTML="Delete";
showDiv.appendChild(delete_btn);
divdis.appendChild(list);
document.getElementById('edit').addEventListener("click",function(event)
{
     targetParent = event.target.parentNode;
     selectedProductIndex = getProductIndex(parseInt(targetParent.id));
     flag=1;
document.getElementById('name').value=products[selectedProductIndex-1].pro_name;
document.getElementById('desc').value=products[selectedProductIndex-1].pro_desc;
document.getElementById('price').value=products[selectedProductIndex-1].pro_price;
document.getElementById('qty').value=products[selectedProductIndex-1].pro_qty;
document.getElementById('img').value=products[selectedProductIndex-1].img;
});
delete_btn.addEventListener("click",function(event)
                                      {
                                            targetParent = event.target.parentNode;
                                           selectedProductIndex= getProductIndex(parseInt(targetParent.id));
                                           removeFromProducts(selectedProductIndex);
                                           targetParent.parentNode.removeChild(targetParent);
                                      }
                            );


}

      }
    }
  });
function getProductIndex(id)
{
   var j;
   for (j = 0; j < products.length; j++)
   {
       if (products[j].Id == id)
         break;
   }
   return j;
}
function removeFromProducts(selectedProductIndex)
{
   products.splice(selectedProductIndex,1);
   console.log(products);
}
function insertBlankLine(targetElement)
{
    var br = document.createElement("br");
    targetElement.appendChild(br);
}
