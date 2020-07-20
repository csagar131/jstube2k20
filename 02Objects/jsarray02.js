//js array can even store the fuction as a value

var mArr = [1,2,'apple',true,
	{ fname : 'tokyo'},
	function fun(){
		console.log('hey from array function')
		return 0
	} ]


console.log(mArr[4]['fname'])
console.log(mArr[5]())

