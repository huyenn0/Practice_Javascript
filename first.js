/* // Day 2: Counter
var createCounter = function(n) {
    
    return function(){
        return n++;
    }
}
// example 1
var counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())
// example 2
var counter = createCounter(-2)
console.log(counter())
console.log(counter())
console.log(counter()) */