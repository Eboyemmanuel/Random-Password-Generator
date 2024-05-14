const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let boxEl = document.getElementById("box1")
let boxEll = document.getElementById("box2")


function generateRandomPassword(length)   {

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    
    }
    return password;
    
}

function generateRandomPassword1(length)   {

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex1];
    
    }
    return password;
    
}

function generatRandomPassword() {
    const randomPassword = generateRandomPassword(15);
    boxEl.textContent = randomPassword
    const randomPassword1 = generateRandomPassword1(15);
    boxEll.textContent = randomPassword1

}
 
