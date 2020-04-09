import cipher from './cipher.js';

document.getElementById("btn-encode").addEventListener("click", getEncode);
document.getElementById("btn-decode").addEventListener("click", getDecode);
document.getElementById("btn-clear").addEventListener("click", clearForm);

const text = document.getElementById("cipher-text");
const numb = document.getElementById("cipher");
const result = document.getElementById("text");

function getEncode(event) {
  event.preventDefault();  
  try{ 
    const cipherText = cipher.encode(numb.value, text.value);
    text.value = cipherText;
  result.innerHTML = "Sua mensagem codificada é:";  

  } catch (e){
    alert(e.message);
  } 
}

function getDecode(event) {
  event.preventDefault();  
  try{ 
    const cipherText = cipher.decode(numb.value, text.value);
    text.value = cipherText;
  result.innerHTML = "Sua mensagem decodificada é:";   
  } catch (e){
    alert(e.message);
  } 
}
function clearForm(event) {
  event.preventDefault();
  text.value = "";
  numb.value = "";
  result.innerHTML = "Digite a mensagem que deseja codificar ou decodificar:";
}



