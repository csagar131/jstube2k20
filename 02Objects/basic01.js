var mObj = {

	firstName :'vidhi',
	lastName : 'chouhan',
	age : 14,
	isFemale : true,
	previousProfession :{
		doj :'12-12-2010',
		professionName :'teacher',
	},

	getDetails : function(){
		console.log('details will be printed here')
		console.log(this.firstName)
		console.log(this.lastName)
		console.log(this.age)
		console.log(this.isFemale)
		console.log(this.previousProfession)
		return 0
	}
}



console.log('\n' +  typeof mObj)

console.log(mObj)

console.log(mObj.firstName)

console.log(mObj.previousProfession.doj)
console.log(mObj['previousProfession'])

delete mObj.isFemale;

console.log(mObj)

//calling function using the object

console.log('------------------------')
console.log(mObj.getDetails())