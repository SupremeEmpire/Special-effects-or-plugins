angular.module('login',[])
// 登录的控制器
.controller('loginCtrl',['$scope','$http',function($scope,$http){
    // 提交
    $scope.commit = function(ev){
        console.log(ev);
        ev.preventDefault()
        var url = 'get.php?action=login&username='+$scope.username+'&password='+$scope.password
        // console.log(url);
        $http.get(url)
        .then(function(res){
            console.log(res)
            if(res.data.success){
                // 成功，修改地址
                // 登录成功之后跳转的地址
                // 0 表示显示全部文章,前段 1, 安卓 2, IOS 3,
                window.location.href = '#!/0'
                // ui-sref="{type:0}"
            }else{
                // 失败，提示错误
                $scope.errorMessage = res.data.message
            }
        })
        .catch(function(error){
            console.log(error)
        })
    }
}])