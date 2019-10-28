
function reverseNumber(){
    let myNumber= prompt("please give me a number");//when use prompt it is also string
    let x = parseInt(myNumber.split('').reverse().join(''));//toString kullanmaya gerek yok
    document.getElementById("demo").innerHTML = x;
    //console.log(x);
}    
// reverseNumber(321);



function reverseInt(int) {
    return  parseInt(int.toString().split('').reverse().join(''))
  }
  console.log(reverseInt(510));

function random(mix) {
    let text = "";
    let lettersAndNumbers = "ABCDKLabjklmnopqrstuv012345";
    for (let i = 0; i < mix; i++)
    text += lettersAndNumbers.charAt(Math.floor(Math.random() * lettersAndNumbers.length));
    return text;
}
    console.log(random(8));



    function charCount(str, letter){
        let letter_Count = 0;
     for (var position = 0; position < str.length; position++) 
     {
        if (str.charAt(position) == letter) 
          {
          letter_Count += 1;
          }
      }
      return letter_Count;
    }
    
    console.log(charCount('w3resource.com', 'o'));

    
    
    
    function myFunction() {
        var str = "How are you doing today?";
        var res = str.split(' ');//'' bosluk yapmadan yaparsan harf harf ayiririr, ' ' bosluk birakirsan kelime kelime ayiriryo
        document.getElementById("demo1").innerHTML = res;
      }


      /* function revNumber (num) {
        return num = num.toString() .split('').reverse().join('')* 1;
        //num *= 1;//trunung to number } */

    function revNumber (num) {
        num = num.toString();
        num = num.split('');
        num = num.reverse();
        num = num.join('');
        num *= 1;
        return num;
    }
    console.log(revNumber(123));