define(function(){
	function sum(...arr){
		return arr.reduce((pre,cur)=>pre+cur)
	}

	return sum;
})