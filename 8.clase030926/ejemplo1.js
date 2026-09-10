let age=prompt("enter your age:",16);
alert("you are " + age +" years old.");
let edad=confirm("Eres mayor de edad?");
if(res){
    alert("You are an adult.");
}
else{
    alert("You are not an adult.");
}
alert(Number("  12345 ")); //12345
alert(Number("  12345gt ")); //nan
alert(Number(true)); //1
alert(Number(false));
alert(Boolean(1));
alert(Boolean(0));

alert(Boolean("Hello")); //true
alert(Boolean("")); //false

alert(Boolean("Hello")); //true
alert(Boolean("")); //false
