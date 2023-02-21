console.log("step 1");
function show(){
    console.log("my role model:osho");
    console.log("my best friend:shivshankar");
}
show();
console.log("step 2");
function personalDetails(firstName ,lastName,collegName){
    console.log("first name:", firstName ,"last name:", lastName,"college name:",collegName);
}
personalDetails("Dilkhush","Mohurle","AGPCE");
console.log("step 3");
function swapValueDuke(value1,value2){
    console.log("before swap:",value1,value2);
var temp=value1;
value1=value2;
value2=temp;
console.log("ofter swap:",value1,value2);
}
swapValueDuke("virat","anushka");
swapValueDuke("1000","2000");
console.log("step 4");
function addTreeValue(num1,num2,num3){
    var sum=num1+num2+num3;
    return sum;
}
var addition=addTreeValue(10.23,600,40);
console.log("sum of three number:",addition);
var add=addTreeValue("Hellow","Good","Morning");
console.log("message:",add);