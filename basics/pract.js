const accountId = 1234
let email = "notadev-ui@gmail.com"
var accountPassword = "Niti@123"
accountCity = "basti"

// prefer not use var because of issue in block scope and function scope

email= "xyz@gmail.com"
accountPassword = "4321"
console.table([accountId, email, accountPassword, accountCity])

//datatype----->

// String	     Textual data	                            "hello", 'world'
// Number	     Integers and floating points	            10, 3.14, -5
// BigInt	     For very large integers	                12345678901234567890n
// Boolean	     Logical true or false	                    true, false
// Undefined	 A variable declared but not assigned	    let x; → undefined
// Null	         Represents intentional absence	            let y = null;
// Symbol	     Unique and immutable identifier	        Symbol("id")

console.log(typeof email)

