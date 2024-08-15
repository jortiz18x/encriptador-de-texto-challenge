const panel_secundario_resultado = document.getElementById("panel_secundario_resultado");
const imagenMainTextInputEmpty = document.getElementById("imagenMainTextInputEmpty");
const titleMainTextInputEmpty = document.getElementById("titleMainTextInputEmpty");
const textMainTextInputEmpty = document.getElementById("textMainTextInputEmpty");
const textMainTextInputSuccess = document.getElementById("textMainTextInputSuccess");
const copyTextButton = document.getElementById("copyTextButton");
const input = document.getElementById("mainTextInput");

textMainTextInputSuccess.style.display = "none";
copyTextButton.style.display = "none";

function Encrypt() {
    var texttoconvert = document.getElementById("mainTextInput").value;
    var textoencriptado1 = texttoconvert.replace(/e/g, "enter");
    var textoencriptado2 = textoencriptado1.replace(/i/g, "imes");
    var textoencriptado3 = textoencriptado2.replace(/a/g, "ai");
    var textoencriptado4 = textoencriptado3.replace(/o/g, "ober");
    var textoencriptado5 = textoencriptado4.replace(/u/g, "ufat");

    if(texttoconvert.trim() != "") {
        imagenMainTextInputEmpty.style.display = "none";
        titleMainTextInputEmpty.style.display = "none";
        textMainTextInputEmpty.style.display = "none";
        document.getElementById("textMainTextInputSuccess").innerText = textoencriptado5;
        textMainTextInputSuccess.style.display = "block";
        copyTextButton.style.display = "block";
        panel_secundario_resultado.style.justifyContent = "flex-start";
        input.select();
    } else {
        alert("Por favor, ingresa un texto válido para encriptar.");
        imagenMainTextInputEmpty.style.display = "block";
        titleMainTextInputEmpty.style.display = "block";
        textMainTextInputEmpty.style.display = "block";
        document.getElementById("textMainTextInputSuccess").innerText = "";
        textMainTextInputSuccess.style.display = "none";
        copyTextButton.style.display = "none";
        panel_secundario_resultado.style.justifyContent = "center";
    }
}

function Desencrypt() {
    var texttoconvert = document.getElementById("mainTextInput").value;
    var textodesencriptado1 = texttoconvert.replace(/enter/g, "e");
    var textodesencriptado2 = textodesencriptado1.replace(/imes/g, "i");
    var textodesencriptado3 = textodesencriptado2.replace(/ai/g, "a");
    var textodesencriptado4 = textodesencriptado3.replace(/ober/g, "o");
    var textodesencriptado5 = textodesencriptado4.replace(/ufat/g, "u");

    if(texttoconvert.trim() != "") {
        imagenMainTextInputEmpty.style.display = "none";
        titleMainTextInputEmpty.style.display = "none";
        textMainTextInputEmpty.style.display = "none";
        document.getElementById("textMainTextInputSuccess").innerText = textodesencriptado5
        textMainTextInputSuccess.style.display = "block";
        copyTextButton.style.display = "block";
        panel_secundario_resultado.style.justifyContent = "flex-start";
        input.select();
    } else {
        alert("Por favor, ingresa un texto válido para desencriptar.");
        imagenMainTextInputEmpty.style.display = "block";
        titleMainTextInputEmpty.style.display = "block";
        textMainTextInputEmpty.style.display = "block";
        document.getElementById("textMainTextInputSuccess").innerText = "";
        textMainTextInputSuccess.style.display = "none";
        copyTextButton.style.display = "none";
        panel_secundario_resultado.style.justifyContent = "center";
    }
}

function Copy() {
    var textotocopy = document.getElementById("textMainTextInputSuccess").innerText;
    var input = document.getElementById("mainTextInput");

    navigator.clipboard.writeText(textotocopy).then(function() {
        alert("Texto copiado al portapapeles!");
    }, function(err) {
        alert("Hubo un error al copiar: ", err);
    });
    input.select();
}