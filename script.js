const btnElement = document.querySelector(".btn-generate");
const inputPasswords = document.getElementById("input");
const copyPassword = document.querySelector(".fa-copy");
const alertCopySucess = document.querySelector(".alert-container");
const noPassGenerate = document.querySelector(".no-pass");

btnElement.addEventListener("click", ()=>{
    generatePassword();
})

copyPassword.addEventListener("click", ()=>{
    copyMyPassword(); // function for copy my password on input
   if(inputPasswords.value){
        alertCopySucess.classList.remove("active");
        setTimeout(()=>{
            alertCopySucess.classList.add("active");
        }, 1500);
   } else{     
       noPassGenerate.classList.remove("on");
       setTimeout(()=>{
       noPassGenerate.classList.add("on");
    }, 1500);
   }
})

//function for generate password
function generatePassword(){
    const characters = "0123456789abcdefghifklmnopqrstuvwxyz!@#$%^&*()_-:{}/[]+ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //characters for password generation
    const passwordLength = 14; // length of password
    let password ="";
    //
    for(let index=0; index<passwordLength; index++){

        const randomNumber = Math.floor(Math.random()*characters.length)
        password += characters.substring(randomNumber,randomNumber+1);
    }
    inputPasswords.value = password;
    alertCopySucess.innerText = password + "copied!";
    noPassGenerate.innerText = password + "no password"
}
//copy password on clipboard
function copyMyPassword(){
    inputPasswords.select();
    inputPasswords.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputPasswords.value);
   
}
