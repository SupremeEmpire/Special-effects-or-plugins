define(function(){
	function shuffle(arr){
		arr.sort(function(){
			return Math.random() -0.5
		})
		return arr;
	}

	// 导出
	return shuffle;
})