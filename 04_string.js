var greet = "good morning"
console.log(typeof greet);
console.log("total number of char available into this string variable_greet");
var greetlenght=greet.length;
console.log("total lenght of string is:", greetlenght);
console.log("find the charactor by index value");
var charAtindex3=greet.charAt(3);
console.log("charactor available at index 3 is:",charAtindex3);
console.log("find the last charactor");
var charAtLastIndex=greet.charAt(greetlenght-1);
console.log("last char is:",charAtLastIndex);
console.log("find the index by charactor value");
var indexOfm=greet.indexOf("m");
console.log("index of char m:",indexOfm);
console.log("index of char which is not vailable in to the string:",greet.indexOf("z"));
console.log("index of o char:",greet.indexOf("o"));
console.log("index of char o using lastindexof():",greet.lastIndexOf("o"));
var replaceResult=greet.replace("morning","evening")
console.log(replaceResult);
console.log(greet);
console.log("uppercase:",replaceResult.toUpperCase());
console.log("lowercase:",replaceResult.toLowerCase());
var myName="   dilkhush mohurle     ";
var myNameAfterTrim=myName.trim();
console.log("removing extra start and spaces using trim:",myNameAfterTrim,myName.length,myNameAfterTrim.length);
//find the extra soaces removed from the string - myName
var count=myName.length-replaceResult.length;
console.log(count);
console.log(myName.trimStart(),myName.trimEnd());
console.log("includes()");
console.log("is substring mor icludes in the greet or not:",greet.includes("mor"));
console.log("is substrng afternoon includes in the greet or not:",greet.includes("afternoon"));
console.log("is substringo includes in the greet or not:",greet.includes("o"));

console.log("slice method");
var sliceResult=greet.slice(5,12);
console.log(sliceResult);
console.log(greet.slice(2,5));
console.log("split method");
var splitResult=greet.split(" ");
console.log(splitResult);
console.log("total word",splitResult.length);
var myFriendList="bill gates,stev jobs,elon musk,ratan tata,sundar pichoi,satya nadela,narayan murti,nandan lilekani"
var frdList=myFriendList.split(",")
console.log(frdList);
console.log(frdList.length);




