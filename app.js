// let password1 = document.getElementById("password1")
// let password2 = document.getElementById("password2")
// let password3 = document.getElementById("password3")
// let password4 = document.getElementById("password4")
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


let password1 = document.getElementById("password1")
    // let password2 = document.getElementById("password2")
    // let password3 = document.getElementById("password3")
    // let password4 = document.getElementById("password4")

function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password1").textContent = password;

    chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passwordLength = 12;
    password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password2").textContent = password;

    chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passwordLength = 12;
    password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password3").textContent = password;

    chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passwordLength = 12;
    password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password4").textContent = password;
}











// function randomNumber() {
//     for (let i = 0; i < numbers.length; i++) {
//         let random = Math.random(numbers)
//         console.log(random)
//     }

// }




// function generate() {
//     console.log("Button was clicked")

// }

// randomLetter()