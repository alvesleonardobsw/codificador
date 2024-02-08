function hasEspecialCharacter (text) {
    let especialCharacter = /[A-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\\/\-=`çÇ´áéíóúàãõñâêîôûÁÉÍÓÚÀÃÕÑÂÊÎÔÛ]/; 

    return especialCharacter.test(text);
}

function encrypt (text) {
    const encryptDict = {
        'a' : 'ai',
        'e' : 'enter',
        'i' : 'imes',
        'o' : 'ober',
        'u' : 'ufat'
    };

    let newText = "";

    for(let i = 0; i < text.length; i++){
        
        if (/[aeiou]/.test(text[i])){
            //if entered here = found a vowel
            newText += encryptDict[text[i]];
            console.log(newText);
        } else {
            //if entered here = no vowel found
            newText += text[i];
            console.log(newText);
        }
    }

    console.log(newText);
    return newText;
}

function showNewText (text){
    document.getElementById('textRead').value = text;
}

function onClickEncrypt() {
    let text = document.getElementById('textWrite').value;

    if (hasEspecialCharacter(text)){
        alert("O texto contém caracter especial ou letras maiúsculas");
        return
    } 
        
    let newText = encrypt(text);
    showNewText(newText);
    
}

function onClickCopy(){
    let text = document.getElementById('textRead').value;
    
    navigator.clipboard.writeText(text)
        .then(() =>{
            alert("Texto Copiado!");
        })
       .catch(err => {
            console.error('Erro ao tentar copiar o texto: ', err);
        })
}