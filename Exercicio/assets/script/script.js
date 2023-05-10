let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let assuntoOk = false


nome.style.width = "100%"
email.style.width = "100%"


function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido! Digite um nome com mais de 2 caracteres!"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = "green"
        nomeOk = true
    }


}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    
    /*
        O indexOf retorna valor -1 para caso não haja o @ e caso haja ele retorna 1 !!!!!
    */
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "E-mail Inválido!"
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = "E-mail Válido!"
        txtEmail.style.color = 'green'
        emailOk = true
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Limite de 100 caracteres atingido!"
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    } 

}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Solicitação enviada! Entraremos em contato em breve!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar!")
    }

}

function mapaZoom() {
    mapa.style.width = '700px'
    mapa.style.height = '600px'
}

function mapaNormal() {
mapa.style.width = '400px'
mapa.style.height = '300px'
}