var jvScript="javascript";
var glChrome="google chrome";
var drSmart="developer smart";
function squareOfWorrdLenght(value){
    console.log(`the given string is ${value}`);
    var ln=value.length
    var sq=value.length**2
    console.log(`the word lenght is ${ln}`);
    console.log(`the square of the string is ${sq}`);
    console.log("************");
}
squareOfWorrdLenght(jvScript);
squareOfWorrdLenght(glChrome);
squareOfWorrdLenght(drSmart);
function agDev(){
    var words="i am angular developer"
    console.log(`given string is ${words}`);
    var len=words.length;
    console.log(`length of string ${len}`);
    var spResult=words.split(" ")
    var splen=spResult.length;
    console.log(`words of given string ${splen}`);
    var div=len/splen;
    console.log(`string length divide by number of word of string ${div}`);
    var mult=len*splen;
    console.log(`string lenght multiply by number of string ${mult}`);
}
agDev();

