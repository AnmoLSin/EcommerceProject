var list=document.createElement("ul");
list.setAttribute("id","list");
var divdis=document.getElementById('divdis');
var count=0;
var back=document.createElement('button');
        back.setAttribute('class',"btn btn-outline-success my-2 my-sm-0");
        back.setAttribute('style','align:left');
        back.innerHTML='Back';
        back.addEventListener('click',function(){document.getElementById('divform').style.display='block';
          divdis.innerHTML='';
      });
list.style.listStyleType = "none";
function storeProducts(products)
{
    localStorage.products=JSON.stringify(products);
}
function getStoredProducts()
{
    return JSON.parse(localStorage.products);
}
function showList()
{
divdis.style.display="block";
}

function insertBlankLine(targetElement)
{
    var br = document.createElement("br");
    targetElement.appendChild(br);
}


 var count=0,f1=0,f2=0,f3=0,f4=0,f5=0;f6=0;
var err_name=document.createElement("LABEL");
err_name.setAttribute("id","f");
var name_msg=document.createTextNode("Please enter a valid name");
var err_price=document.createElement("LABEL");
var price_msg=document.createTextNode("Please enter a valid price");
var err_desc=document.createElement("LABEL");
var desc_msg=document.createTextNode("Please enter some Description");
var err_qty=document.createElement("LABEL");
var qty_msg=document.createTextNode("Please enter valid Quantity");
var img_err=  document.createElement('label');
img_err.innerHTML='Upload image file';
function valid()
{

var n=document.getElementById("name").value;
var d=document.getElementById("desc").value;
var p=document.getElementById("price").value;
var q=document.getElementById("qty").value;
var image=document.getElementById('img').value.split('\\').pop().split('/').pop();
var firstFile='C:\\Users\\ramesh\\Documents\\uca\\web\\ecommerce\\img\\product\\'+image;
    var pro={Id:selectedProductIndex,pro_name:n,pro_desc:d,pro_price:p,pro_qty:q,img:firstFile,Category:products[selectedProductIndex].Category,Subcategory:products[selectedProductIndex].Subcategory};
if(n=="")
{
err_name.appendChild(name_msg);
document.getElementById("name_div").appendChild(err_name);
f1=1;
}
else
{
    if(f1==1)
    document.getElementById("name_div").removeChild(err_name);
    count++;
}
if(d=="")
{
err_desc.appendChild(desc_msg);
document.getElementById("desc_div").appendChild(err_desc);
f2=1;
}
else
    {
        if(f2==1)
document.getElementById("desc_div").removeChild(err_desc);
count++;
}
if(p==""||isNaN(p)||p=='0')
{
err_price.appendChild(price_msg);
document.getElementById("price_div").appendChild(err_price);
f3=1;
}
else
    {
        if(f3==1)
document.getElementById("price_div").removeChild(err_price);
count++;
}
if(q=="0"||q==""||isNaN(q))
{
err_qty.appendChild(qty_msg);
document.getElementById("qty_div").appendChild(err_qty);
f4=1;
}
else
    {
        if(f4==1)
document.getElementById("qty_div").removeChild(err_qty);
count++;
}
if(document.getElementById('img').value!='')
{
  count++;
  if(f5==1)
    document.getElementById('form-row').removeChild(img_err);

}
else {
   f5=1;
  document.getElementById('form-row').appendChild(img_err);
}
if(count==5)
{
    count=0;
 put_array(pro);
}
}
function put_array(pro)
    {
      products[selectedProductIndex]=Object.assign({},pro);
        storeProducts(products);
        print(pro);

}
function print(pro)
{

var delete_btn=document.createElement("button");
delete_btn.setAttribute("id","del1");
var item=document.createElement("li");
item.setAttribute('style','display:inline-block;padding: 10px 10px');
var showDiv=document.createElement('div');
showDiv.setAttribute('style','background-color:white');
item.appendChild(showDiv);
var image=document.createElement('img');
image.setAttribute('src',pro.img);
image.setAttribute('style','width:250;height:250');
 showDiv.appendChild(image);
  insertBlankLine(showDiv);
var name=document.createTextNode("Name: "+pro.pro_name);
  showDiv.appendChild(name);
  insertBlankLine(showDiv);
  var desc=document.createTextNode("Description: "+pro.pro_desc);
  showDiv.appendChild(desc);
  insertBlankLine(showDiv);
    var price=document.createTextNode("Price: "+pro.pro_price);
  showDiv.appendChild(price);
  insertBlankLine(showDiv);
  var qty=document.createTextNode("Qty: "+pro.pro_qty);
  showDiv.appendChild(qty);
  insertBlankLine(showDiv);

var edit_btn=document.createElement("button");
edit_btn.setAttribute("id","edit");
edit_btn.innerHTML="Edit";
showDiv.appendChild(edit_btn);
showDiv.innerHTML+=" ";
delete_btn.innerHTML="Delete";
showDiv.appendChild(delete_btn);

targetParent.parentNode.replaceWith(item);
divdis.style.display='block';
divdis1.style.display='none';
}

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
storeProducts(products);
products=getStoredProducts();
}