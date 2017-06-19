//   100钱买100只鸡
//   公鸡5钱一只 母鸡3钱一只 小鸡1钱3只
//   要求每种鸡都至少有一只，钱要正好用完
//   求组合方式
function maiJi() {
    for (var gong = 1; gong <=19; gong++) {
        // gong的数量
       for (var mu = 1; mu <=31; mu++) {
           //mu的数量
           //小鸡的数量
           var xiao = 100 -gong -mu;
           if (gong*5 + mu*3 +xiao /3 ==100) {
               console.log("公鸡",gong,"母鸡",mu,"小鸡",xiao);
           }
           
       }
        
    }
}
maiJi();