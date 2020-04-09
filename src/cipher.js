    
  function encode(offset, string, direction = 1){ 
    let offsetint = parseInt(offset);   
    if (!offsetint || !string){ 
      throw new TypeError("Digite um número ou uma mensagem válida")
    }    
    offsetint = offsetint * direction;
    let palavra = "";
    for (const value of string) {
      const code = value.charCodeAt(0);
      const upperCase = code >= 65 && code <= 90;      
      const lowerCase = code >= 97 && code <= 122;
      if (upperCase) {      
        palavra += String.fromCharCode(((code-65+26+(offsetint % 26))%26)+65);
      } else if (lowerCase) {
        palavra += String.fromCharCode(((code-97+26+(offsetint % 26))%26)+97);
      } else {
        palavra += value;
      }
    }
    return palavra;
  }
  
  function decode(offset, string) {
    return encode (offset, string, -1);
  }
  const cipher = {encode, decode};

export default cipher;
