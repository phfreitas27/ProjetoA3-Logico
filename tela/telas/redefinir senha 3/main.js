function validarLogin(){
    let novasenha = document.getElementById("PasswordInput1").value
    let confirmarsenha = document.getElementById("PasswordInput").value

    if (novasenha === confirmarsenha && novasenha != '' && confirmarsenha != ''){
       alert("Senha resetada com sucesso !")
       document.getElementById("PasswordInput1").value = ""
       document.getElementById("PasswordInput").value = ""
    }
    else{
        alert("Senhas Divergentes")
    }
}