const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Enter your name");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Thank you!!!";
    }

    if (n.length > 0) {
        alert("Lambingin mo naman");
        alert('Lambingin mo naman ako');
        alert(n + 'love u');
        main.style.display = 'block';
        break;
    }
}