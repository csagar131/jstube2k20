
var sNum = '5';

var ans = parseInt(sNum);

console.log(ans); //5

console.log(typeof ans); //number

var mNum = 5;


var ans1 = mNum.toString();

console.log(ans1); //5
console.log(typeof ans1); //string

//parseFloat
//toFixed()

console.log('---------------');

console.log(parseInt('banana'));
console.log(parseInt('22.222'));
console.log(typeof parseInt('22.222'));
console.log(parseFloat(12));
console.log(parseFloat(13.3));



var mStr= 'hello';
console.log(mStr.charAt(100)); //empty string

console.log('------------------')

var mNum1;
console.log(mNum1)

mNum1 = null
console.log(mNum1)

console.log('------------------------')

console.log(undefined == null)
console.log(undefined === null)


console.log(5 == '5') //true
console.log(5 === '5') //false


console.log(typeof(2 >= '2')) //boolean

console.log('--------------------------')

console.log(true + false) //1
console.log(12 / '6')  //NaN
console.log('number' + 15+3) //number153
console.log(15+3+'number') //18number
console.log(1 > null)  //true
console.log('foo' + + 'bar') //fooNan
console.log('true' == true)  //false
console.log(false == 'false') //false
console.log(null == '')  //false 
console.log(!!'false' == !!'true')  //true


console.log('-----------------------')


console.log(typeof NaN)



