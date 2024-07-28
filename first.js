var expected = function(val){
    return{
        tobe: function(expected){
            if(val === expected){
                return true
            }else{
                throw new Error("Not equal")
            }
        },
        notToBe: function(expected){
            if(val!=expected){
                return true
            }else{
                throw new Error("Equal")
            }
        }
    }
}
try{
    console.log(expected(5).tobe(5))

}catch(e){
    console.log(e.Error)
}
try{
    console.log(expected(5).tobe(null))

}catch(e){
    console.log(e.message)
}
console.log("done")