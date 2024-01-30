
function validarTexto (texto) {
    let caracteresEspeciais = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/\-=`çÇ´]/; 

    return caracteresEspeciais.test(texto);
}

function criptografar () {
    let texto = document.getElementById('textWrite').value;

    console.log(texto);

    if (validarTexto(texto)){
        console.log("a string tem caracter especial");
    } else {
        console.log("a string nao contem caracter especial");
    }
}