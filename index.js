import './md5-min.js';

function passwordEnter() {
    const PASSWORD = hex_md5("SENHA");
    console.log(PASSWORD);
    
    let senha = hex_md5(document.getElementById('passwordInput').value);
    console.log(senha);
    
    if (senha !== PASSWORD) {
        window.alert("Senha Incorreta!");
        localStorage.setItem('auth', false);
        location.href = "naoAutorizado.html";

    } else {
        localStorage.setItem('auth', true);
        location.href = "jogadores.html";
    }
    
}

const enterButton = document.getElementById('submitPassword');

enterButton.addEventListener('click', passwordEnter);
