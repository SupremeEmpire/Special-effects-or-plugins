// 文章类型
angular.module('type',[])
.controller('typeCtrl',['$scope','$http',
function($scope,$http){
    $http.get('get.php?action=get_arctype&where=reid=0')
    .then(function(res){
        console.log(res)
        $scope.types = res.data
    })
    .catch(function(error){
        console.log(error)
    })
}])