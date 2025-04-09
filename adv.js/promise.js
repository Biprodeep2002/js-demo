const prom1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("under timeout")
        let err=true
        if(!err){
            console.log("in resolve");
            resolve()
        }
        else{
            console.log('in reject');
            reject()
        }  
    },2000)
})
prom1.then(function(){
    console.log("solved")
}).catch(function(){
    console.log("rejected");
}).finally(function () {
    console.log("promise is completed");
    
})


const prom2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err=true
        if(!err){
            resolve({username: "javascript",password: "123"})
        }
        else{
            reject("ERROR!")
        }  
    },2000)
})
async function conprom2() {
    try {
        const res=await prom2
        console.log(res)
    }
    catch(error)
    {
        console.log(error);
        
    }
}
conprom2()