//Promise((resolve, reject)=>{
//resolve => then();

//reject => error();

function f1() {
   return new Promise(function(resolve, reject) { 

   	    setTimeout(()=>{
 			console.log("First I should be printed");
      resolve("jo bhi main pass karu");//==> it triggers then() 
      
      //data fetch => 2 possibilities
      
      //data aayega => resolve(data), ya nahi aayega // reject(new Error('data not available'))
      
		});

   });
}

f1().then((data)=>{
console.log( data); 
return "second wala return ";
}).then((data)=>{console.log(data)}).catch(()=>{console.log("error")});