function stringHadsOn(){
    var string1="   hey you are doing good ,keep it up    "
    console.log(string1);
    var strlength=string1.length;
    console.log(`length of string ${strlength}`); 
    var tr=string1.trim();
    console.log(tr);
    var trln=tr.length;
    console.log(`length ofter removing extra spaces ${trln}`);
    var ex =strlength-trln;
    console.log(`total number of removed extra spaces ${ex}`);
    var fd=tr.trimStart();
    var Ed=tr.trimEnd();
    console.log(fd,Ed);
}
stringHadsOn();

