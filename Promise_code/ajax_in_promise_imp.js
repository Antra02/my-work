$.ajax({

	url:'/some/url/i/am/gona/hit',
	data:JSON.stringify({name:'value'}),
  method:'POST'
  
  success:function(result){ console.log(resulet)},
  error:function(){}



});


$.ajax({

	url:'/some/url/i/am/gona/hit',
	data:JSON.stringify({name:'value'}),
  
}).done(function(result){ console.log(resulet)})
.catch(function(){});


$.get('/some/url/i/am/gona/hit').done().catch();
$.post('/some/url/i/am/gona/hit',{name:'value'}).done().catch();



p1=new Promise((resolve, reject)=>{

$.ajax({

	url:'/some/url/i/am/gona/hit',
	data:JSON.stringify({name:'value'}),
  method:'POST'
  
  success:function(result){ 
  	resolve(result);
  },
  error:function(){
  
  	reject(new Error('something went wrong'));
  }



});

});
