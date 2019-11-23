
var divform= document.getElementById("div1");
var divdis=document.getElementById("div2");
var pid;
  var category='';
var subcategory='';
  if (localStorage.products!=null) {
   pid=localStorage.getItem("id");
  }
  else {
    pid=0;
    localStorage.id=0;
  }
var targetParent;
var selectedProductIndex;
var i=0;
var flag=0;
var products=new Array();
if(pid)
products=getStoredProducts();
var list=document.createElement("ul");
list.setAttribute("id","list");
    flag=0;

create_form("","","","",'');

var list=document.createElement("ul");
list.setAttribute("id","list");
list.style.listStyleType = "none";

var search_btn=document.getElementById("search");

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
var category_err=  document.createElement('label');
  category_err.innerHTML='Please select category';
function valid()
{

var n=document.getElementById("name").value;
var d=document.getElementById("desc").value;
var p=document.getElementById("price").value;
var q=document.getElementById("qty").value;
var image=document.getElementById('img').value.split('\\').pop().split('/').pop();
var firstFile='F:\\Final_eCommerce\\img\\product\\'+image;
if(flag==0)
{
  var pro={Id:pid,pro_name:n,pro_desc:d,pro_price:p,pro_qty:q,img:firstFile,Category:category,Subcategory:subcategory};
}else
    var pro={Id:selectedProductIndex-1,pro_name:n,pro_desc:d,pro_price:p,pro_qty:q,img:firstFile,Category:category,Subcategory:subcategory};
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
if(subcategory=='')
{
   f6=1;
  document.getElementById('dropdown').appendChild(category_err);
}
else {
  count++;
  if(f6==1)
    document.getElementById('dropdown').removeChild(category_err);
    f6=0;
}

if(count==6)
{
    if(flag==0)
    {
      pid++;
      localStorage.id=pid;
    }
    count=0;
 put_array(pro);
}
}
function put_array(pro)
    {
      if(flag==0)
       products[pid-1]=Object.assign({},pro);
     else
      products[selectedProductIndex]=Object.assign({},pro);
        storeProducts(products);
        print(pro);

}

 function print(pro)
{
/*  var commentsRef = firebase.database().ref('products/');
commentsRef.on('child_added', function(data) {
  var name=data.child("pro_name").val();
  var desc=data.child("pro_desc").val();
  var price=data.child("pro_price").val();
  var qty=data.child("pro_qty").val();
  var img=data.child("img").val();
});*/
var delete_btn=document.createElement("button");
delete_btn.setAttribute("id","del1");
var item=document.createElement("li");
item.setAttribute('style','display:inline-block;padding: 10px 10px');
list.appendChild(item);
var showDiv=document.createElement('div');
showDiv.setAttribute('style','background-color:white');
if(flag==0)
{
  item.setAttribute('id',pid-1);}
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
if(flag==0)
divdis.appendChild(list);
else
divdis.replaceChild(list,targetParent);
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
function create_form(n,d,p,q,i)
{
  //get subcategory and category
   $('.dropdown-menu li a').click(function(){
    category=$(this).parent().parent().siblings(".test").text();
    $('.showItem').text($(this).text());
    subcategory=$(this).text();
  });


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
divform.appendChild(name);


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
divform.appendChild(desc);


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
divform.appendChild(price);


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
divform.appendChild(qty);

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
divform.appendChild(img);




//create submit and cancel button
var btn=document.createElement("DIV");
btn.setAttribute('class','form-row');
var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('ID', 'submit');
        if(flag==0)
        button.setAttribute('value', 'Submit');
        else if(flag==1)
            button.setAttribute('value', 'Edit');
        var button1 = document.createElement('input');
        button1.setAttribute('type', 'button');
        button1.setAttribute('ID', 'cancel');
        button1.setAttribute('value', 'Cancel');
        btn.appendChild(button);
        btn.appendChild(button1);
divform.appendChild(btn);
        //cancel event
 button1.addEventListener("click",function()
 {
showList();
 });
//submit form validation
button.addEventListener("click",function()
{
valid();
//divform.innerHTML='';
txt_name.value=txt_desc.value=txt_price.value=txt_qty.value=pic_input.value=subcategory=category='';
var span=document.createElement('span');
span.setAttribute('class','caret');
document.getElementById('showItem').innerHTML='Category ';
document.getElementById('showItem').appendChild(span);
//create_form("","","","",'');

});
}

search_btn.addEventListener("keyup",function () {
        var input, filter, ul, li, a, txtValue;
        input=document.getElementById("search");
        filter = input.value;
    li = list.childNodes;
    for (var j = 0; j <li.length; j++) {
      var ab = li[j].children;
       var element=ab[0].childNodes[0];
        txtValue = element.textContent;
        if (txtValue.indexOf(filter) <= -1) {
           li[j].style.display = "none";
        }
        else
            li[j].style.display = "block";
        }
    });
