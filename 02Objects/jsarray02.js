//js array can even store the fuction as a value

var mArr = [1,2,'apple',true,
	{ fname : 'tokyo'},
	function fun(){
		console.log('hey from array function')
		return 0
	} ]


console.log(mArr[4]['fname'])
console.log(mArr[5]())


console.log('------------------------')

var mObjArr = [{
		name : 'jonnathan',
		age :20
	},
	{
		name : 'janny',
		age :25
	},
	{
		name : 'joshua',
		age :29
	},
	{
		name : 'rio',
		age :22
	},
	{
		name : 'tokyo',
		age :32
	},	
	{
		name : 'allen',
		age :50
	},	
]



function arrSortByName(a,b){

	if (a.name.toUpperCase() < b.name.toUpperCase()){
		return -1
	} else {
		return 1
	}
	return 0
}

function arrSortByAge(a,b){

	if (a.age < b.age){
		return -1
	} else{
		return 1
	}
	return 0
}


console.log('before sort')
console.log(mObjArr)
mObjArr.sort(arrSortByName)
console.log('after sort by name')
console.log(mObjArr)
console.log('after sort by age')
mObjArr.sort(arrSortByAge)
console.log(mObjArr)



console.log('----------------')

var arrTry = [1,2,3,4,5]

arrTry.splice(2,3,13,14,15,14) //modify original array
console.log(arrTry)

arrTry.push('m at end')
console.log(arrTry)


//concate method on array return new array but push dont


