let myFormEl = document.getElementById("myForm");
myFormEl.addEventListener("submit", function(event){
    event.preventDefault();
});

let nameEl=document.getElementById("name");
let nameError=document.getElementById("errorName");
nameEl.addEventListener("blur",function(event){
    if (event.target.value === ""){
        nameError.textContent="Required*";
    }
    else{
        nameError.textContent="";
    }

})
let emailEl=document.getElementById("email");
let emailError=document.getElementById("errorEmail");
emailEl.addEventListener("blur",function(event){
    if (event.target.value === ""){
        emailError.textContent="Required*";
    }
    else{
        emailError.textContent="";
    }

})

let MobileEl=document.getElementById("phone");
let phoneNum=document.getElementById("mobileNum");
MobileEl.addEventListener("blur",function(event){
    if (event.target.value === ""){
        phoneNum.textContent="Required*";
    }
    else{
        phoneNum.textContent="";
    }

})


function myFunction() {
    alert("Hello! Fill the Details and then Submit");
   
  }
