angular.module('detail',[])
// 文章详情
.controller('detailConCtrl',['$scope','$http','$location',
function($scope,$http,$location){
    // /show/12
    console.log($location.path())
    console.log($location.path().split('/'))
    var id = $location.path().split('/')[2]
    var url = 'get.php?action=get_article&id='+id
    $http.get(url)
    .then(function(res){
        console.log(res)
        $scope.article = res.data
    })
    .catch(function(error){
        console.log(error)
    })
}])