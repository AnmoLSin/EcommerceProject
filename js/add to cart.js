var Show=document.getElementById('Show');
var product= JSON.parse(localStorage.products);
var showItem=document.createElement('div');
var order=new Array();
var j=0;
showItems();
var category='';
var subcategory='';
function storeProducts(order)
{
localStorage.order=JSON.stringify(order);
}
function insertBlankLine(targetElement)
{
    var br = document.createElement("br");
    targetElement.appendChild(br);
}
function showItems()
{
for(var i=0;i<product.length;i++)
{
var items_div=document.createElement('div');
  items_div.setAttribute("id",product[i].Id);
    items_div.setAttribute('style','display:inline-block');
    var img=document.createElement("img");
    img.setAttribute('src',product[i].img);
    img.setAttribute('style','width:250;height:250');
  items_div.appendChild(img);
  insertBlankLine(items_div);
  var name=document.createTextNode("Name: "+product[i].pro_name);
  items_div.appendChild(name);
  insertBlankLine(items_div);
    var price=document.createTextNode("Price: "+product[i].pro_price);
  items_div.appendChild(price);
  insertBlankLine(items_div);
  var Qty=document.createTextNode("Qty: ");
  items_div.appendChild(Qty);
  var plus=document.createElement('button');
  plus.setAttribute("class","plus");
  plus.innerHTML='+';
  items_div.appendChild(plus);
    var qty=document.createElement('input');
    qty.setAttribute('type','text');
    qty.setAttribute('id','pro_qty');
  qty.setAttribute('value','0');
  items_div.appendChild(qty);
  var minus=document.createElement('button');
  minus.setAttribute("class","minus");
  minus.innerHTML="-";
  items_div.appendChild(minus);
  var add=document.createElement('button');
  add.innerHTML="Add";
  add.setAttribute('class','add');
  items_div.appendChild(add);
showItem.appendChild(items_div);
}
Show.appendChild(showItem);
var Minus=document.getElementsByClassName("minus");
Array.from(Minus).forEach(function(element) {
      element.addEventListener('click',function(event)
  {
    var target=event.target.parentNode;
   var t_qty=target.childNodes[8];
   if(t_qty.value>0)
    {
      t_qty.value--;
    }});});
var Plus=document.getElementsByClassName("plus");
Array.from(Plus).forEach(function(element) {
      element.addEventListener('click',function(event)
  {
var target=event.target.parentNode;
   var t_qty=target.childNodes[8];
   if(t_qty.value>product[target.id].pro_qty)
    target.childNodes[8].value=0;
  else
    target.childNodes[8].value++;
});});
var Add=document.getElementsByClassName("add");
  Array.from(Add).forEach(function(element) {
      element.addEventListener('click',function(event)
  {
var target=event.target.parentNode;
var t_id=event.target.parentNode.id;
var pro={Id:t_id,name:product[t_id].pro_name,image:product[t_id].img,desc:product[t_id].pro_desc,price:product[t_id].pro_price,Qty:target.childNodes[8].value};
put_array(pro);
document.getElementById('div').style.display='block';
        $('.floating').delay(1000).fadeOut('slow');

});});
}
function put_array(pro)
    {
       order[j]=Object.assign({},pro);
        j++;
        storeProducts(order);
}
//get subcategory and category
 $('.dropdown-menu li a').click(function(){
category=$(this).parent().parent().siblings(".test").text();
subcategory=$(this).text();
       var input, filter, ul, li, a, txtValue;
for(var i=0;i<product.length;i++)
{
if(product[i].Category==category&& product[i].Subcategory==subcategory)
{
document.getElementById(product[i].Id).style.display='block';
}
else {
document.getElementById(product[i].Id).style.display='none';
}
}

   });
