function login() {
    let email = document.getElementById("pEmail").value;
    let senha = document.getElementById("pSenha").value;

    if (email == 0) {
        alert("Informe o seu email")
    } else if (senha == 0) {
        alert("Informe a sua senha")
    } else {
        alert("Obrigado por fazer login!")
    }
}