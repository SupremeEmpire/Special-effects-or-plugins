angular.module('modify',[])
.controller('modifyConCtrl',['$scope','$http','$location',
function($scope,$http,$location){
    var id = $location.path().split('/')[2]
    var url = 'get.php?action=get_article&id='+id
    $http.get(url)
    .then(function(res){
        console.log(res)
        $scope.formData = res.data
    })
    .catch(function(error){
        console.log(error)
    })

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
        $scope.formData.action = 'update_article'
        console.log($scope.formData)
        $http({
            method:'POST',
            url:'get.php',
            data:$.param($scope.formData),
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        })
        .then(function(res){
            console.log(res)
            if(res.data.errors){
                // 更新失败
                // 判断errors对象中content字段是否存在，如果存在
                if(res.data.errors.hasOwnProperty('content')){
                    $scope.errorMessage = res.data.errors.content
                }else{
                     $scope.errorMessage = res.data.errors.typeid
                }
                $('.error').addClass('slideDown')
            }else{
                // 更新成功
                window.location.href = '#!/0'
            }
        })
        .catch(function(error){
            console.log(error)
        })
    }
}])