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



/* //Day 3: To Be or Not To Be
var expect = function(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
}

try {
    console.log("expect(5).toBe(5): " + expect(5).toBe(5));
} catch (e) {
    console.error(e.message);
}

try {
    console.log("expect(5).toBe(4): " + expect(5).toBe(4));
} catch (e) {
    console.error(e.message);
}

try {
    console.log("expect(5).notToBe(5): " + expect(5).notToBe(5));
} catch (e) {
    console.error(e.message);
}

try {
    console.log("expect(5).notToBe(null): " + expect(5).notToBe(null));
} catch (e) {
    console.error(e.message);
} */


/* // Day 4: Counter II
var createCounter = function(init){
    let currentValue = init
    return {
        increment: function(){
            currentValue += 1;
            return currentValue;
        },
        decrement: function(){
            currentValue -= 1;
            return currentValue;
        },
        reset: function(){
            currentValue = init;
            return currentValue;
        },
    }

}
const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement()) */
