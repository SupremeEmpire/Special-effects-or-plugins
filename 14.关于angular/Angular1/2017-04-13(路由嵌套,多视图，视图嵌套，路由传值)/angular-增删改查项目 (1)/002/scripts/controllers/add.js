angular.module('add',[])
//新增文章页面
.controller('addConCtrl',['$scope','$http',
function($scope,$http){
    $http.get('get.php?action=get_arctype&where=reid=0')
    .then(function(res){
        console.log(res)
        $scope.types = res.data
    })
    .catch(function(error){
        console.log(error)
    })

    $scope.commit = function(ev){
        ev.preventDefault()
        // 注意：typeid是一个类型对象
        console.log($scope.formData)
        $scope.formData.action = 'add_article'
        //对一个数据对象进行urlencode,转化为
        // key=value&key=value...的字符串
        console.log($.param($scope.formData))
        // headers:设置请求头
        // conent-type告诉服务器发送的数据类型
        $http({
            method:'POST',
            url:'get.php',
            data:$.param($scope.formData),
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        })
        .then(function(res){
            console.log(res)
            if(res.data.errors){
                // 添加失败
                // 判断errors对象中content字段是否存在，如果存在
                if(res.data.errors.hasOwnProperty('content')){
                    $scope.errorMessage = res.data.errors.content
                }else{
                     $scope.errorMessage = res.data.errors.typeid
                }
                $('.error').addClass('slideDown')
            }else{
                // 添加成功
                window.location.href = '#!/0'
            }
        })
        .catch(function(error){
            console.log(error)
        })
    }
}])