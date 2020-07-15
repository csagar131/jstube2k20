var sellingPrice = 199
var ListingPrice = 799


var checkIfGreater = ListingPrice > sellingPrice
console.log(checkIfGreater)

var discountedPrice = ((ListingPrice - sellingPrice)/ ListingPrice) * 100

console.log(discountedPrice)

var discountPriceRounded = Math.round(discountedPrice)
console.log(discountPriceRounded)

