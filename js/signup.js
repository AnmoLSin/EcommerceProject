
var modal = document.getElementById('id01');
var modal1 = document.getElementById('id02');
var admins=new Array();
var key='123456789';
var i=0;
createForm('signup');
hide();
// When the user clicks anywhere outside of the modal, close it


function store(admins)
{
    localStorage.admins=JSON.stringify(admins);
}
function hide()
{
    modal.style.display = "none";
    modal1.style.display = "none";
}
function insertBlankLine(targetElement)
{
    var br = document.createElement("br");
    targetElement.appendChild(br);
}
function createForm(input)
{
if(input=='login')
    {
        var form=document.createElement('form');
        form.setAttribute('class','modal-content animate');
        var form_div=document.createElement('div');
        form.appendChild(form_div);
        var h3=document.createElement('h2');
        h3.innerHTML='Login';
        var label_name=document.createElement('label');
        label_name.innerHTML='Username';
        var input_name=document.createElement('input');
        input_name.setAttribute('type','email');
        input_name.setAttribute('placeholder','Enter Username');
        input_name.setAttribute('id','userName');
        input_name.setAttribute('name','uname');  
         var label_pw=document.createElement('label');
        label_pw.innerHTML='Password';
        var input_pwd=document.createElement('input');
        input_pwd.setAttribute('type','password');
        input_pwd.setAttribute('placeholder','Enter Password');
        input_pwd.setAttribute('id','userPw');
        input_pwd.setAttribute('name','psw');
        var login_btn=document.createElement('button');
        login_btn.setAttribute('id','login');
        login_btn.innerHTML="Login";
        var input_checkbox=document.createElement('input');
        input_checkbox.setAttribute('type','checkbox');
        input_checkbox.setAttribute('name','remember');
        input_checkbox.setAttribute('checked','checked');
        var label_checkbox=document.createElement('label');
        label_checkbox.innerHTML='Remember me';
        form_div.appendChild(h3);
        insertBlankLine(form_div);
        form_div.appendChild(label_name);
        form_div.appendChild(input_name);
        insertBlankLine(form_div);
        form_div.appendChild(label_pw);
        form_div.appendChild(input_pwd);
        form_div.appendChild(login_btn);
        form_div.appendChild(input_checkbox);
        form_div.appendChild(label_checkbox);
        var div=document.createElement('div');
        div.setAttribute('class','container');
        div.setAttribute('style','background-color:#f1f1f1');
        var btn=document.createElement('button');
        btn.setAttribute('onclick','cancel()');
        btn.setAttribute('class','cancelbtn');
        btn.innerHTML='Cancel';
        var span_forgot=document.createElement('span');
        span_forgot.setAttribute('class','psw');
        span_forgot.innerHTML='Forgot';
        var a=document.createElement('a');
        a.setAttribute('href','#');
        a.innerHTML='password?';
        span_forgot.appendChild(a);
        div.appendChild(btn);
        div.appendChild(span_forgot);
        form.appendChild(div);
        modal.appendChild(form);
        modal.style.display='block';
        modal1.style.display='none';
        login_btn.addEventListener('click',function(event){
            checkForm();
event.preventDefault();
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(input_name.value, input_pwd.value).then(function(){window.location.assign('aa.html')},function(error) {
    alert(error.message);
})
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

   /*     firebase.auth().onAuthStateChanged(user => {
  if(user) {alert('hi');
    window.location.href = 'aa.html';
  }
  else alert('j');
});*/
});
        }
    else
    {
        var span=document.createElement('span');
        span.setAttribute('onclick','document.getElementById("id02").style.display="none"');
        span.setAttribute('class','close');
        span.setAttribute('title','Close Modal');
        span.innerHTML='&times;';
         var form=document.createElement('form');
        form.setAttribute('class','modal-content');
        form.setAttribute('onsubmit','return checkPass(this)');
        var form_div=document.createElement('div');
        form.appendChild(form_div);
        var h1=document.createElement('h1');
        h1.innerHTML='Sign Up';
        var p=document.createElement('p');
        p.innerHTML='Please fill in this form to create an account.';
        var hr=document.createElement('hr');
        var label_name=document.createElement('label');
        label_name.setAttribute('for','email');
        label_name.innerHTML='Email';
        var input_name=document.createElement('input');
        input_name.setAttribute('type','email');
        input_name.setAttribute('pattern',"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
        input_name.setAttribute('placeholder','Enter Email');
        input_name.setAttribute('id','email');
        input_name.setAttribute('name','email');
         var label_pw=document.createElement('label');
         label_pw.setAttribute('for','psw');
        label_pw.innerHTML='Password';
        var input_pwd=document.createElement('input');
        input_pwd.setAttribute('type','password');
        input_pwd.setAttribute('placeholder','Enter Password');
        input_pwd.setAttribute('id','pw');
        input_pwd.setAttribute('name','psw');
         var label_rep=document.createElement('label');
         label_rep.setAttribute('for','psw-repeat');
        label_rep.innerHTML='Repeat Password';
        var input_rep=document.createElement('input');
        input_rep.setAttribute('type','password');
        input_rep.setAttribute('placeholder','Repeat Password');
        input_rep.setAttribute('id','rep');
        input_rep.setAttribute('name','psw-repeat');
        var label=document.createElement('label');
        var input_checkbox=document.createElement('input');
        input_checkbox.setAttribute('type','checkbox');
        input_checkbox.setAttribute('name','remember');
        input_checkbox.setAttribute('checked','checked');
        input_checkbox.setAttribute('style','margin-bottom:15px');
        label.innerHTML="Remember me";
        label.appendChild(input_checkbox);
        var authenticationKey=document.createElement('input');
        authenticationKey.setAttribute('type','text');
        authenticationKey.setAttribute('placeholder','Enter Authentication key');
        authenticationKey.setAttribute('id','Key');
        form_div.appendChild(h1);
        form_div.appendChild(p);
        form_div.appendChild(hr);
        form_div.appendChild(label_name);
        insertBlankLine(form_div);
        form_div.appendChild(input_name);
        insertBlankLine(form_div);
        form_div.appendChild(label_pw);
        form_div.appendChild(input_pwd);
        form_div.appendChild(label_rep);
        form_div.appendChild(input_rep);
        form_div.appendChild(authenticationKey);
        form_div.appendChild(label);
        var div=document.createElement('div');
        div.setAttribute('class','clearfix');
        div.setAttribute('style','background-color:#f1f1f1');
        var btn=document.createElement('button');
        btn.setAttribute('onclick','document.getElementById("id02").style.display="none"');
        btn.setAttribute('class','cancelbtn');
        btn.innerHTML='Cancel';
 var For_login=document.createElement('label');
        For_login.innerHTML='Already a user? ';
        var login_link=document.createElement('a');
        login_link.setAttribute('href','javascript:createForm("login")');
        login_link.innerHTML='Login';
        var submit_btn=document.createElement('button');
        submit_btn.setAttribute('type','button');
        submit_btn.setAttribute('id','signup');
        submit_btn.setAttribute('class','signup_btn');
        submit_btn.innerHTML="Signup";
        div.appendChild(btn);
        div.appendChild(For_login);
        div.appendChild(login_link);
        div.appendChild(submit_btn);
        form.appendChild(div);
        modal1.appendChild(span);
        modal1.appendChild(form);
        modal1.style.display='block';
        submit_btn.addEventListener("click", function()
                                      {  
                                        var flag=checkPass(form);
                                        if(flag==true)
                                        {
                                       /* var admins_info={Id:i,EMAIL: input_name.value,PW:input_pwd.value};
                                        putArray(admins_info);
                                        */
                                        firebase.auth().createUserWithEmailAndPassword(input_name.value, input_pwd.value).then(function(){
                                            input_name.value=input_pwd.value=input_rep.value=authenticationKey.value='';
                                          window.location.href='aa.html';
                                        //createForm('login');
                                        // modal.style.display='block';
                                        }).catch(function(error) {
                                         // Handle Errors here.
                                        var errorCode = error.code;
                                        var errorMessage = error.message;
                                        alert(errorMessage);
                                        // ...
                                        });
                                     

                                       }
                                       
                                        });
                                      }
    
        
        }  
 

function checkForm(form)
{
var Email = document.getElementById('userName');
var Pw = document.getElementById('userPw');
if(Email.value==""||Pw.value=="")
{alert('Field cannot be empty');
      }
}

function checkPass(form)
{   
var Email=document.getElementById('email');
var Pw = document.getElementById('pw');
var Rep=document.getElementById('rep');
var authenticationKey=document.getElementById('Key');
if(Email.value==''||Pw.value==""||Rep.value==""||authenticationKey.value=='')
{alert('Field cannot be empty');
        return false;}
if(authenticationKey.value!=key)
    {alert('Enter valid Authentication key');
        return false;}
    if(Pw.value==Rep.value)
        return true;
    else
        {alert('enter same password');
        return false;}
}
function getStoredProducts()
{
    return JSON.parse(localStorage.admins);
}
function check() {
checkForm();
  /*  // stored data from the register-form
    
   var admins=getStoredProducts();
    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
for(var j=0;j<admins.length;j++)
{
    if(admins[j].EMAIL==userName.value && admins[j].PW==userPw.value)
        {
         alert('Welcome');
         localStorage.isLoggedin=true;
          window.open("aa.html");
          break;
        }
    else {alert('No user found please signup');localStorage.isLoggedin=false;}
}*/ 

}

function putArray(admins_info)
    {
       admins[i]=Object.assign({},admins_info);
        i++;
        store(admins);
}
let loading = document.querySelector(".loading");
let letters = loading.textContent.split("");
loading.textContent = "";
letters.forEach((letter, i) => {
  let span = document.createElement("span");
  span.setAttribute('id','letter');
  span.textContent = letter;
  span.style.animationDelay = `${i / 5}s`;
  loading.append(span);
});
//setTimeout(function(){loading.style.display='none';document.getElementById("img").style.display='block';modal1.style.display='block';}, 3000);
$(function() {
   $('.loading').fadeIn(4000).fadeOut(3000);
        $('#id02').fadeIn(6000);
       $('#img').delay(3000).fadeIn(3000);});
function cancel()
{
    document.getElementById("id01").style.display="none";
    document.getElementById("id02").style.display="block";
}