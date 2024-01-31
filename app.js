function hasEspecialCharacter (text) {
    let especialCharacter = /[A-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\\/\-=`çÇ´áéíóúàãõñâêîôûÁÉÍÓÚÀÃÕÑÂÊÎÔÛ]/; 

    return especialCharacter.test(text);
}

function verifyString (text) {

    console.log(text);

    if (hasEspecialCharacter(text)){
        alert("O texto contém caracter especial ou letras maiúsculas");
    } else {
        encrypt(text);
    }
}

function encrypt (text) {
    let newText = "";
    for(let i = 0; i < text.length; i++){
        let character = text[i];
        if (/[aeiou]/.test(text[i])){
            //se entrou aqui é porque achou uma vogal
        } else {
            //se entrou aqui é porque não achou uma vogal
        }
    }
}

function onClickEncrypt() {
    let text = document.getElementById('textWrite').value;

    verifyString(text);
}