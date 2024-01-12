/* 
tag: getElementByTagName()
id: getElementById()
nome: getElementByName()
classe: getElementsByClassName()
seletor: querySelector()

*/
const patternEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
const patternAssunto = new RegExp("^.{100,}$");
const patternNome = new RegExp("^[\\w ]{3,}$");

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mapa = document.querySelector("#mapa");

nome.style.width = '100%';
email.style.width = '100%';

function validaNome() {


    let txt = window.document.querySelector("#txtnome");

    if (patternNome.test(nome.value)) {
        txt.innerHTML = "Nome válido";
        txt.style.color = "green";
        nomeOk = false;
    } else {
        txt.innerHTML = "Nome inválido";
        txt.style.color = "red";
        nomeOk = true;
    }
}

function validaEmail() {

    let txt = window.document.querySelector("#txtemail");

    if (patternEmail.test(email.value)) {
        txt.innerHTML = "Email válido";
        txt.style.color = "green";
    } else {
        txt.innerHTML = "Email inválido";
        txt.style.color = "red";
    }

}

function validaAssunto() {

    let txt = window.document.querySelector("#txtassunto");

    if (patternAssunto.test(assunto.value)) {
        txt.innerHTML = "Texto muito grande, digite no máximo 100 caracteres";
        txt.style.color = "red";
        txt.style.backgroundColor = "gray";
        txt.style.display = "inline";
    } else {
        txt.style.display = "none";
    }
}

function validaFormulario(){
    
    if(patternNome.test(nome.value) && patternEmail.test(email.value) && !patternAssunto.test(assunto.value)){
        alert("Dados enviados com sucesso");
    }else{
        alert("Dados do formulario inválidos, preencha corretamente.");
    }
}

function mapaZoom(){
    mapa.style.width = "800px";
    mapa.style.heigth = "600px";
}

function mapaNormal(){
    mapa.style.width = "400px";
    mapa.style.heigth = "400px";
}