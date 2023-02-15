var NameUser=document.getElementById('Name')
var email=document.getElementById('Email')
var password=document.getElementById('password')
var SignUp=document.getElementById('SignUp')
var datausers=[]
datausers=JSON.parse(localStorage.getItem('forUsers')) 
console.log(datausers)

if (SignUp != null){
SignUp.addEventListener('click', function(){
  var user = {
    nameuser:NameUser.value ,
    emailUser:email.value ,
    passwordUser:password.value ,
  }
  if (NameUser.value == ""|| email.value == "" ||password.value =="" ){
    requiredinputs=false;
    document.getElementById('validate').innerHTML=('All Input is required')
    return
  }else{
    for(var i = 0 ; i < datausers.length ; i++){
    if (email.value == datausers[i].emailUser){        
      document.getElementById('validate').innerHTML=('Email is exsist')
      return;
   } else{
    document.getElementById('validate').innerHTML=('success')
   }

  }
}
datausers.push(user)
localStorage.setItem('forUsers' ,JSON.stringify(datausers) ) 
clearinput()
}
)
function clearinput()
{
  NameUser.value = ""
  email.value = ""
  password.value=""
}
}
  
 var logInEmail=document.getElementById('logInEmail')
 var logInPassword=document.getElementById('logInPassword')
 var ButtonLogIn = document.getElementById('ButtonLogIn')
var href=document.getElementById('href')
 var count = ''
if (ButtonLogIn!= null){
  ButtonLogIn.addEventListener('click' , function(){

     
    for ( var i = 0 ; i < datausers.length ; i++){
      count = i 
      if (logInEmail.value === datausers[i].emailUser && logInPassword.value === datausers[i].passwordUser){
        window.open('index3.html')
        
        
      }
      
    }
    
    
  })

}
// var welcome =datausers[count].nameuser

// document.getElementById('welcome').innerHTML= `welcom`