console.log("ciao");

var num:number  = 1;
num += 2;

console.log("il numero è " + num);

interface Myinterface{
    myNumber: number;
    myString:string;
}

let myinterface: Myinterface ={
    myNumber: 10
    ,
    myString: ' ciao'

}
console.log('il mio numero è ' + myinterface.myNumber +
             ' la mia parola è ' + myinterface.myString)


