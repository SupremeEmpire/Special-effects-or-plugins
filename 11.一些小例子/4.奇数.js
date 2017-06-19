// 奇数和
var jiShu =0;
//偶数和
var ouShu =0;
for (var i = 1; i <= 100; i++) {
    if (i%2 ==0) {
        ouShu+=i;
    } else {
        jiShu+=1;
        
    }
    
}
console.log("100以内的奇数和:"+jiShu);
console.log("100以内的偶数和:"+ouShu);