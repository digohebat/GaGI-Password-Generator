const result = document.querySelector("#hasil");
const copyBtn = document.querySelector(".button-copy");
const passLen = document.querySelector("#characterLength");
const upperCheck = document.querySelector("#uppercaseChar");
const lowerCheck = document.querySelector("#lowercaseChar");
const numberCheck = document.querySelector("#numberChar");
const symbolCheck = document.querySelector("#symbolChar");
const generateBtn = document.querySelector(".btn-generate");

//debug cek elemen
//console.log(result, copyBtn, passLen, upperCheck, lowerCheck, numberCheck, symbolCheck, generateBtn);

const lowercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const uppercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const number = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const symbol = () => {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

const getRandomCharacter = {
    lower: lowercase,
    upper: uppercase,
    num: number,
    sym: symbol,
}

generatePass = (
    length,lower,upper,num,sym
) => {
   let generatedPass = '';
   const checkCount = lower+upper+num+sym;
   const checks = [{lower}, {upper}, {num}, {sym}].filter(item => Object.values(item)[0]);

   if (checkCount === 0){
       return '';
   }

   for(let i = 0; i < length; i+=checkCount) {
       checks.forEach(check => {
            const randomCharacterFunction = Object.keys(check)[0];
            
            generatedPass += getRandomCharacter[randomCharacterFunction]();
       })
   }
   
   hasil.value = generatedPass;
} 

//event logic klik generate
generateBtn.addEventListener('click', () => {
    const length = +passLen.value;
    const lower = lowerCheck.checked;
    const upper = upperCheck.checked;
    const num = numberCheck.checked;
    const sym = symbolCheck.checked;

    generatePass(
        length,lower,upper,num,sym
    );
});

const copyPass = () => {
    hasil.select();
    document.execCommand('copy');
}

copyBtn.addEventListener('click', copyPass());