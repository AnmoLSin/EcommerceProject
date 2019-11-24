var laptop=document.getElementById('laptop');
var mob=document.getElementById('mob');
var cam=document.getElementById('cam');
var speaker=document.getElementById('speaker');
  var divdis1=document.getElementById('divdis1');

var products=JSON.parse(localStorage.products);

//list for laptop
laptop.addEventListener('click',function(){
  for(var i=0;i<products.length;i++)
  {
    if(products[i].Category==' Electronics ')
    {
      if(products[i].Subcategory=='Laptops')
      {
        if(i==0)
        {
        divdis.appendChild(back);
        divdis.appendChild(list);}
count++;
if(count==1)
document.getElementById('list').innerHTML='';
  var item=document.createElement("li");
item.setAttribute('style','display:inline-block;padding: 10px 10px');
item.setAttribute('id',i);
  list.appendChild(item);
  var delete_btn=document.createElement("button");
delete_btn.setAttribute("id","del1");

var divformDiv=document.createElement('div');
divformDiv.setAttribute('style','background-color:white');
divformDiv.setAttribute('id',i);

item.appendChild(divformDiv);
var image=document.createElement('img');
image.setAttribute('style','width:250;height:250');
var edit_btn=document.createElement("button");
edit_btn.setAttribute("class","edit");
edit_btn.innerHTML="Edit";
delete_btn.innerHTML="Delete";
image.setAttribute('src',products[i].img);
 divformDiv.appendChild(image);
  insertBlankLine(divformDiv);
var name=document.createTextNode("Name: "+products[i].pro_name);
  divformDiv.appendChild(name);
  insertBlankLine(divformDiv);
  var desc=document.createTextNode("Description: "+products[i].pro_desc);
  divformDiv.appendChild(desc);
  insertBlankLine(divformDiv);
    var price=document.createTextNode("Price: "+products[i].pro_price);
  divformDiv.appendChild(price);
  insertBlankLine(divformDiv);
  var qty=document.createTextNode("Qty: "+products[i].pro_qty);
  divformDiv.appendChild(qty);
  insertBlankLine(divformDiv);
divformDiv.appendChild(edit_btn);
divformDiv.innerHTML+=" ";
divformDiv.appendChild(delete_btn);


document.getElementById('divform').style.display='none';
document.getElementById('divdis').style.display='block';
      }
      }
      

    }
    Array.from(document.getElementsByClassName('edit')).forEach(function(element) {
element.addEventListener("click",function(event)
{
     targetParent = event.target.parentNode;
     selectedProductIndex = getProductIndex(parseInt(targetParent.id));
     console.log(selectedProductIndex);
create_form(products[selectedProductIndex].pro_name,products[selectedProductIndex].pro_desc,products[selectedProductIndex].pro_price,products[selectedProductIndex].pro_qty,products[selectedProductIndex].img);

})});
document.getElementById('del1').addEventListener("click",function(event)
{
                                            targetParent = event.target.parentNode;
                                           selectedProductIndex= getProductIndex(parseInt(targetParent.id));
                                           console.log(targetParent.id);
                                           removeFromProducts(selectedProductIndex);
                                           targetParent.parentNode.removeChild(targetParent);
                                      }
                            );
    if(!count)
      alert('No items in this field');
    else count=0;


  });

//list for mobile
mob.addEventListener('click',function(){
  for(var i=0;i<products.length;i++)
  {
    if(products[i].Category==' Electronics ')
    {
      if(products[i].Subcategory=='Mobiles')
      {

        divdis.appendChild(back);
        divdis.appendChild(list);
count++;
if(count==1)
document.getElementById('list').innerHTML='';
  var item=document.createElement("li");
item.setAttribute('style','display:inline-block;padding: 10px 10px');
  list.appendChild(item);
  var delete_btn=document.createElement("button");
delete_btn.setAttribute("id","del1");

var divformDiv=document.createElement('div');
divformDiv.setAttribute('style','background-color:white');
divformDiv.setAttribute('id',i);

item.appendChild(divformDiv);
var image=document.createElement('img');
image.setAttribute('style','width:250;height:250');
var edit_btn=document.createElement("button");
edit_btn.setAttribute("class","edit");
edit_btn.innerHTML="Edit";
delete_btn.innerHTML="Delete";
image.setAttribute('src',products[i].img);
 divformDiv.appendChild(image);
  insertBlankLine(divformDiv);
var name=document.createTextNode("Name: "+products[i].pro_name);
  divformDiv.appendChild(name);
  insertBlankLine(divformDiv);
  var desc=document.createTextNode("Description: "+products[i].pro_desc);
  divformDiv.appendChild(desc);
  insertBlankLine(divformDiv);
    var price=document.createTextNode("Price: "+products[i].pro_price);
  divformDiv.appendChild(price);
  insertBlankLine(divformDiv);
  var qty=document.createTextNode("Qty: "+products[i].pro_qty);
  divformDiv.appendChild(qty);
  insertBlankLine(divformDiv);
divformDiv.appendChild(edit_btn);
divformDiv.innerHTML+=" ";
divformDiv.appendChild(delete_btn);


document.getElementById('divform').style.display='none';
document.getElementById('divdis').style.display='block';
      }
      }
      

    }
    Array.from(document.getElementsByClassName('edit')).forEach(function(element) {
element.addEventListener("click",function(event)
{
     targetParent = event.target.parentNode;
     selectedProductIndex = getProductIndex(parseInt(targetParent.id));
     console.log(selectedProductIndex);
create_form(products[selectedProductIndex].pro_name,products[selectedProductIndex].pro_desc,products[selectedProductIndex].pro_price,products[selectedProductIndex].pro_qty,products[selectedProductIndex].img);
})});
document.getElementById('del1').addEventListener("click",function(event)
{
                                            targetParent = event.target.parentNode;
                                           selectedProductIndex= getProductIndex(parseInt(targetParent.id));
                                           console.log(targetParent.id);
                                           removeFromProducts(selectedProductIndex);
                                           targetParent.parentNode.removeChild(targetParent);
                                      }
                            );
    if(!count)
      alert('No items in this field');
    else count=0;

  });


//list for cameras
cam.addEventListener('click',function(){
  for(var i=0;i<products.length;i++)
  {
    if(products[i].Category==' Electronics ')
    {
      if(products[i].Subcategory=='Cameras')
      {
        
      
        divdis.appendChild(back);
        divdis.appendChild(list);
count++;
if(count==1)
document.getElementById('list').innerHTML='';
  var item=document.createElement("li");
item.setAttribute('style','display:inline-block;padding: 10px 10px');
  list.appendChild(item);
  var delete_btn=document.createElement("button");
delete_btn.setAttribute("id","del1");

var divformDiv=document.createElement('div');
divformDiv.setAttribute('style','background-color:white');
divformDiv.setAttribute('id',i);

item.appendChild(divformDiv);
var image=document.createElement('img');
image.setAttribute('style','width:250;height:250');
var edit_btn=document.createElement("button");
edit_btn.setAttribute("class","edit");
edit_btn.innerHTML="Edit";
delete_btn.innerHTML="Delete";
image.setAttribute('src',products[i].img);
 divformDiv.appendChild(image);
  insertBlankLine(divformDiv);
var name=document.createTextNode("Name: "+products[i].pro_name);
  divformDiv.appendChild(name);
  insertBlankLine(divformDiv);
  var desc=document.createTextNode("Description: "+products[i].pro_desc);
  divformDiv.appendChild(desc);
  insertBlankLine(divformDiv);
    var price=document.createTextNode("Price: "+products[i].pro_price);
  divformDiv.appendChild(price);
  insertBlankLine(divformDiv);
  var qty=document.createTextNode("Qty: "+products[i].pro_qty);
  divformDiv.appendChild(qty);
  insertBlankLine(divformDiv);
divformDiv.appendChild(edit_btn);
divformDiv.innerHTML+=" ";
divformDiv.appendChild(delete_btn);


document.getElementById('divform').style.display='none';
document.getElementById('divdis').style.display='block';
      }
      }
      

    }
    Array.from(document.getElementsByClassName('edit')).forEach(function(element) {
element.addEventListener("click",function(event)
{
     targetParent = event.target.parentNode;
     selectedProductIndex = getProductIndex(parseInt(targetParent.id));
     console.log(selectedProductIndex);
create_form(products[selectedProductIndex].pro_name,products[selectedProductIndex].pro_desc,products[selectedProductIndex].pro_price,products[selectedProductIndex].pro_qty,products[selectedProductIndex].img);
})});
document.getElementById('del1').addEventListener("click",function(event)
{
                                            targetParent = event.target.parentNode;
                                           selectedProductIndex= getProductIndex(parseInt(targetParent.id));
                                           console.log(targetParent.id);
                                           removeFromProducts(selectedProductIndex);
                                           targetParent.parentNode.removeChild(targetParent);
                                      }
                            );
    if(!count)
      alert('No items in this field');
    else count=0;


  });

//list for speakers
speaker.addEventListener('click',function(){
  for(var i=0;i<products.length;i++)
  {
    if(products[i].Category==' Electronics ')
    {
      if(products[i].Subcategory=='Speakers')
      {
      
       
        divdis.appendChild(back);
        divdis.appendChild(list);
count++;
if(count==1)
document.getElementById('list').innerHTML='';
  var item=document.createElement("li");
item.setAttribute('style','display:inline-block;padding: 10px 10px');
  list.appendChild(item);
  var delete_btn=document.createElement("button");
delete_btn.setAttribute("id","del1");

var divformDiv=document.createElement('div');
divformDiv.setAttribute('style','background-color:white');
divformDiv.setAttribute('id',i);

item.appendChild(divformDiv);
var image=document.createElement('img');
image.setAttribute('style','width:250;height:250');
var edit_btn=document.createElement("button");
edit_btn.setAttribute("class","edit");
edit_btn.innerHTML="Edit";
delete_btn.innerHTML="Delete";
image.setAttribute('src',products[i].img);
 divformDiv.appendChild(image);
  insertBlankLine(divformDiv);
var name=document.createTextNode("Name: "+products[i].pro_name);
  divformDiv.appendChild(name);
  insertBlankLine(divformDiv);
  var desc=document.createTextNode("Description: "+products[i].pro_desc);
  divformDiv.appendChild(desc);
  insertBlankLine(divformDiv);
    var price=document.createTextNode("Price: "+products[i].pro_price);
  divformDiv.appendChild(price);
  insertBlankLine(divformDiv);
  var qty=document.createTextNode("Qty: "+products[i].pro_qty);
  divformDiv.appendChild(qty);
  insertBlankLine(divformDiv);
divformDiv.appendChild(edit_btn);
divformDiv.innerHTML+=" ";
divformDiv.appendChild(delete_btn);


document.getElementById('divform').style.display='none';
document.getElementById('divdis').style.display='block';
      }
      }
      

    }
    Array.from(document.getElementsByClassName('edit')).forEach(function(element) {
element.addEventListener("click",function(event)
{
     targetParent = event.target.parentNode;
     selectedProductIndex = getProductIndex(parseInt(targetParent.id));
     console.log(selectedProductIndex);
create_form(products[selectedProductIndex].pro_name,products[selectedProductIndex].pro_desc,products[selectedProductIndex].pro_price,products[selectedProductIndex].pro_qty,products[selectedProductIndex].img);
})});
document.getElementById('del1').addEventListener("click",function(event)
{
                                            targetParent = event.target.parentNode;
                                           selectedProductIndex= getProductIndex(parseInt(targetParent.id));
                                           console.log(targetParent.id);
                                           removeFromProducts(selectedProductIndex);
                                           targetParent.parentNode.removeChild(targetParent);
                                      }
                            );
    if(!count)
      alert('No items in this field');
    else count=0;


  });

function create_form(n,d,p,q,i)
{
  divdis1.style.display='block';
  divdis.style.display='none';
  divdis1.appendChild(document.getElementById('div1'));

//create name
var name=document.createElement("DIV");
name.setAttribute("id","name_div");
name.setAttribute('class','form-row');
var lbl_name=document.createElement("LABEL");
var lbl_value1=document.createTextNode("Name:");
lbl_name.appendChild(lbl_value1);
var txt_name=document.createElement('input');
        txt_name.setAttribute('type', 'text');
       txt_name.setAttribute('value', n);
        txt_name.setAttribute('ID', 'name');
name.appendChild(lbl_name);
name.appendChild(txt_name);
div1.appendChild(name);


//create desc
var desc=document.createElement("DIV");
desc.setAttribute('class','form-row');
desc.setAttribute("id","desc_div");
var lbl_desc=document.createElement("LABEL");
var lbl_value2=document.createTextNode("Description :");
lbl_desc.appendChild(lbl_value2);
var txt_desc=document.createElement('textarea');
txt_desc.innerHTML=d;
        txt_desc.setAttribute('ID', 'desc');
desc.appendChild(lbl_desc);
desc.appendChild(txt_desc);
div1.appendChild(desc);


//create price
var price=document.createElement("DIV");
price.setAttribute('class','form-row');
price.setAttribute("id","price_div");
var lbl_price=document.createElement("LABEL");
var lbl_value3=document.createTextNode("Price :");
lbl_price.appendChild(lbl_value3);
var txt_price=document.createElement('input');
        txt_price.setAttribute('type', 'text');
         txt_price.setAttribute('value',p);
        txt_price.setAttribute('ID', 'price');
price.appendChild(lbl_price);
price.appendChild(txt_price);
div1.appendChild(price);


//create qty
var qty=document.createElement("DIV");
qty.setAttribute('class','form-row');
qty.setAttribute("id","qty_div");
var lbl_qty=document.createElement("LABEL");
var lbl_value4=document.createTextNode("Quantity:");
lbl_qty.appendChild(lbl_value4);
var txt_qty=document.createElement('input');
        txt_qty.setAttribute('type', 'text');
        txt_qty.setAttribute('value', q);
        txt_qty.setAttribute('ID', 'qty');
qty.appendChild(lbl_qty);
qty.appendChild(txt_qty);
div1.appendChild(qty);

//for picture of the product
var img=document.createElement('div');
img.setAttribute('class','form-row');
img.setAttribute('id','form-row');
var pic_label=document.createElement('label');
pic_label.innerHTML='Picture:';
var pic_input=document.createElement('input');
pic_input.setAttribute('type','file');
pic_input.setAttribute('accept','image/x-png,image/jpg,image/jpeg');
pic_input.setAttribute('value',i);
pic_input.setAttribute('id','img');
img.appendChild(pic_label);
img.appendChild(pic_input);
div1.appendChild(img);




//create submit and cancel button
var btn=document.createElement("DIV");
btn.setAttribute('class','form-row');
var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('ID', 'submit');
            button.setAttribute('value', 'Edit');
        var button1 = document.createElement('input');
        button1.setAttribute('type', 'button');
        button1.setAttribute('ID', 'cancel');
        button1.setAttribute('value', 'Cancel');
        btn.appendChild(button);
        btn.appendChild(button1);
div1.appendChild(btn);
        //cancel event
 button1.addEventListener("click",function()
 {
divdis.style.display="block";
divdis1.innerHTML='';
 });
//submit form validation
button.addEventListener("click",function()
{
valid();
});
}
