console.log(`=======arithmatic operator=======`);
var num1=10;
var num2=2;
var result=num1+num2;
console.log(`addition is ${result}`);

result = num1 - num2;
console.log(`Subtraction is  ${result}`);

result = num1 * num2;
console.log(`Multiplication is  ${result}`);

 result = num1 ** num2;
 console.log(`Exponential is  ${result}`);
 result = num1 ** num2;
 console.log(`Exponential is  ${result}`);

 result = num1 / 3;
 console.log(` Division is ${result} `);

 result = num1 % 3; // Modulus
 console.log(` Reminder is ${result} `);
 var num = 10; // Compound addition +=
 num+=20; // num = num + 20
 console.log(`Compound addition += ${num}`)
 ;console.log(`Caparison operators `);
 var num3 = "10";
 var num4 = 10;
 console.log(num3==num4); // 10==10
 console.log(num3===num4)
 console.log("ternary");
 var age=21;
 var result=age>=21?true:false;
 console.log(result);
 //check number even or odd
 var num=7;
 var res=num%2?"even": "odd"
 console.log(res);
 function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );
 


