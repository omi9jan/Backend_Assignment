/*import {add,sub} from './test.js'
add(5,2)
sub(20,5) */

//above problem gives error as 
//SyntaxError: Cannot use import statement outside a module

//so we use "common JS module" to overcome this
//we use "require" for importing and "module.export" for exporting

/*Second problem */

const [add,sub,multi,divide,sqrt,half] = require("./test")
add(10,2)
sub(10,2)
multi(10,2)
divide(10,2)
sqrt(10,2)
half(10,2)

/*above output:-
12
8
20
5
100
5 */

const [add,divide,sqrt,half,sub,multi] = require("./test")
add(10,2)
sub(10,2)
multi(10,2)
divide(10,2)
sqrt(10,2)
half(10,2)

/*above output:-
12
100
5
8
20
5 */

// in second problem importing array and exporting array has some changes in items places
//as in array indexing is important factor so it may affects functionality
//becoz destructuring with array, indexing matters name not matter
//so generally used object based destructuring as index doesn't matter here

const {add,divide,sqrt,half,sub,multi} = require("./test")
add(10,2)
sub(10,2)
multi(10,2)
divide(10,2)
sqrt(10,2)
half(10,2)

/*above output:-
12
8
20
5
100
5 */