// //fuss10.elemecdn.com
// 281442ec3a18ba42c024cc3e14d1998bpng
// fb7a8d6c61b6f26b0d9dd6c869a22cd9jpeg
// /2/81/442ec3a18ba42c024cc3e14d1998bpng.png"

// 分割图片url
function isImgHash(imgHash){
    if(!imgHash) return "";
    var s1 = imgHash.substr(0,1);
    var s2 = imgHash.substr(1,2);
    var s3 = imgHash.substr(3);
    var s4 = imgHash.substr(32);//图片后缀名
    return 'http://fuss10.elemecdn.com'+'/'+s1+'/'+s2+'/'+s3+'.'+s4;
}
// 添加前缀
function addPrefix(imgurl){
	if(!imgurl){return ""}
	return "http://fuss10.elemecdn.com"+imgurl;
}

function fixedDistance(value) {
    if(value < 1000){
        return value + 'm';
    }else{
        return (value/1000).toFixed(2) + 'km';
    }
}



export {
    isImgHash,
    addPrefix,
    fixedDistance
}