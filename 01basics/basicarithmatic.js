

var mNum = 10;
var mStr = 'john';

console.log(mNum * mStr); //Nan
console.log(typeof (mNum * mStr)); //number

console.log(mNum/0); //infinity
console.log(typeof mNum/0); // number


console.log('-----------------------------')

console.log(0/0); //NaN
console.log(0/5); //0
console.log(5/0);  //infinity
console.log(3*'a'); //NaN
console.log('a'*3); //NaN
console.log('b'+3); //b3
console.log(4+'b'); //4b
console.log(5-'c'); //NaN
console.log('c'-5); //NaN


