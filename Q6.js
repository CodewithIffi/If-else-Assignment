function checkcharacterType(character){
const charCode = character.charCodeAt(0);

if(charCode >= 48 && charCode <= 57){
    console.log("The input is a number");

}else if(charCode >= 65 && charCode <= 90){
    console.log("The input is an uppercase letter.");
}else if(charCode >= 97 && charCode <= 122){
    console.log("The input is a lowercase letter.");
}else{
    console.log("The input is not a number, uppercase letter, or lowercase letters");
}
}
const inputCharacter = "97";
checkcharacterType(inputCharacter);