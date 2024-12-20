let firstPassword = document.getElementById("pass1")
let secondPassword = document.getElementById("pass2")
let removeOne = document.getElementById("left-object")
let addOne = document.getElementById("right-object")
let passLength = document.getElementById("pass-length")
let checkBox = document.getElementById("checker")
let toggleFeedback = document.getElementById("toggle-feedback")
let popup1 = document.getElementById('popup-1');
let popup2 = document.getElementById('popup-2');

toggleSpecialCharacter = true
passLength.value = 12

let tempPass = []
let list = [];

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

//password generation

function generatekey(){
    list = []
    list = list.concat(characters);
    if (toggleSpecialCharacter == true) {
        list = list.concat(specialCharacters)
        }
        tempPass = []
        for (let i = 0 ; i < parseInt(passLength.value) ; i++) {
        let randomCharacter = Math.floor(Math.random () * list.length)
        tempPass.push(list[randomCharacter])
    }
    return tempPass.join('');
    
}

function newPassword(){
    
    let newKey1 = generatekey()
    let newkey2 = generatekey()
       
    firstPassword.value = newKey1
    secondPassword.value = newkey2
}

// allow or not special characteres

function isChecked(){
    if (checkBox.checked == true){
    toggleSpecialCharacter = true
    toggleFeedback.textContent = "Sure!"
    
  } if(checkBox.checked == false){
    toggleSpecialCharacter = false
    toggleFeedback.textContent = "No, Thanks!"
    }
}   


//add/subtract character quantity buttons

function sum1(){
   if(passLength.value < 20)
   passLength.value = parseInt(passLength.value) + 1;
}

function subtract1(){
   if(passLength.value > 1)
   passLength.value = parseInt(passLength.value) - 1;

}

//Copy and paste on click && user feedback

function copy(event){
     const target = event.target; 
     target.select();
     document.execCommand('copy');
     if (target.value === "") {
        return
    }
    
     if (target == pass1){
        popup1.style.transition = 'opacity 0.5s';
        popup1.style.opacity = '1';
     
     }
     if (target == pass2){
        popup2.style.transition = 'opacity 0.5s';
        popup2.style.opacity = '1';
     }
     setTimeout(() => {
        popup1.style.opacity = '0';
        popup2.style.opacity = '0';
    }, 
    1000); 
    window.getSelection().removeAllRanges()
    
}

//Toggle between dark/light mode style

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode')
}
