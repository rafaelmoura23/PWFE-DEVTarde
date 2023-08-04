function login() {
    let email = document.getElementById("pEmail").value;
    let senha = document.getElementById("pSenha").value;

    if (email == 0) {
        alert("Informe o seu email")
        return false
    } else if (senha == 0) {
        alert("Informe a sua senha")
        return false
    } else {
        alert("Obrigado por fazer login!")
    }
}