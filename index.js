const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generatorButton = document.getElementById("generator-button")
const passwordLength = 15
const passwordContainer = document.getElementsByClassName("password-container")

generatorButton.addEventListener("click", function() {
    showPasswords()
})

function generatePassword() {
    const newPassword = []
    for (let i = 0; i < passwordLength; i++) {
        newPassword.push(characters[Math.floor(Math.random()*characters.length)])
    }
    return(newPassword.join(""))
}

function showPasswords () {
    for (let i = 0; i < passwordContainer.length; i++) {
        passwordContainer[i].textContent = generatePassword()
    }   
}