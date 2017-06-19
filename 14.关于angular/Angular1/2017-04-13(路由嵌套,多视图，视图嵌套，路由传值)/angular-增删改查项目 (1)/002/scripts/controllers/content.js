angular.module('content',[])
.controller('contentCtrl',['$scope','$http','$location',
function($scope,$http,$location){
    $scope.delete = function(id){
        console.log(id)
        var url = 'get.php?action=delete_article&id='+id
        $http.get(url)
        .then(function(res){
            console.log(res)
            if(res.data.code==101){
                // 删除成功
                // 删除该行
                $('#'+id).remove()
            }else{
                // 删除失败了
            }
        })
        .catch(function(error){
            console.log(error)
        })
    }

    // 分页逻辑
    // pageConfig保存分页需要的数据
    $scope.pageConfig = {
        // 当前页号
        currentPage:1,
        // 页大小
        pageSize:1 ,
        // 总数据量
        total:0,
        // 最大的页号
        maxPage:1,
        // 数组，保存网页上要显示的页号
        pages:[],
        // 当 currentPage 、 pageSize 、total中
        // 任意一个值发生变化的时候，就需要执行此方法
        resetPagesAndMaxPage:function(){
            // 最大的页号 = 总数据量 /页大小 向上取整
            this.maxPage = Math.ceil(this.total / this.pageSize) 
            // 页号数组 
            // -1  -1 -1 currentPage  +1 +1 +1 
            this.pages = [this.currentPage]
            var left = this.currentPage - 1 
            var right = this.currentPage + 1 
            while((left>=1 || right <= this.maxPage)&&this.pages.length<7){
                if(left >=1){
                    // 左边不越界,左边添加一个元素
                    this.pages.unshift(left)
                    left -- 
                }

                if(right <= this.maxPage){
                    // 右边不越界，右边添加一个元素
                    this.pages.push(right)
                    right ++
                }
            }
            console.log('最大的页号是'+this.maxPage + '。应该显示的页号是 ' + this.pages)
        }
    }

    //获取数据总量
    //获取地址片段 ,分离出typeid
    console.log($location.path())
    var typeid = $location.path().replace('/','')
    var url
    if(typeid==0){
        url = 'get.php?action=get_total'
    }else{
        url = 'get.php?action=get_total&where=typeid='+typeid
    }
    //发请求获取数据总量
    $http.get(url)
    .then(function(res){
        console.log(res)
        $scope.pageConfig.total = res.data.total
        $scope.pageConfig.resetPagesAndMaxPage()
        $scope.getDataOfCurrentPage()
    })
    .catch(function(error){

    })

    //上一个
    $scope.previous = function(){
        if($scope.pageConfig.currentPage == 1){
            return 
        }
        $scope.pageConfig.currentPage -= 1;
        $scope.pageConfig.resetPagesAndMaxPage();
        $scope.getDataOfCurrentPage();
    }
    //下一个
    $scope.next = function(){
        if($scope.pageConfig.currentPage == $scope.pageConfig.maxPage){
            return 
        }
        $scope.pageConfig.currentPage += 1;
        $scope.pageConfig.resetPagesAndMaxPage();
         $scope.getDataOfCurrentPage();
    }
    // 跳转
    $scope.goToPage = function(ev){
        // 获取输入的数字
       var page = parseInt(ev.target.value)
       console.log(page)
        // 如果按键是 delete 并且 输入框已经没有值了；就无操作
       if(ev.keyCode == 8 && isNaN(page)){
            return 
       }
       if(isNaN(page)){
           alert('请输入数字')
        //    把不满足条件的数据清空
           ev.target.value = ''
           return 
       }
       if(page<1){
           alert('页号最小是1')
           ev.target.value = ''
           return
       }
       if(page > $scope.pageConfig.maxPage){
           alert('页号最大是'+$scope.pageConfig.maxPage)
           ev.target.value = ''
           return
       }

       $scope.pageConfig.currentPage = page
       $scope.pageConfig.resetPagesAndMaxPage()
       $scope.getDataOfCurrentPage();
    }

    // 获取当前页的数据
    $scope.getDataOfCurrentPage = function(){
        var  offset =  ($scope.pageConfig.currentPage-1)*$scope.pageConfig.pageSize
        var  rows = $scope.pageConfig.pageSize
        var url 
        if(typeid==0){
            url = 'get.php?action=get_list&offset='+ offset+'&rows='+ rows+'&orderField=id&orderBy=DESC'
        }else{
            url= 'get.php?action=get_list&offset='+ offset +'&rows='+ rows +'&where=typeid='+typeid+'&orderField=id&orderBy=DESC'
        }
        // 获取该类型的数据展示
        $http.get(url)
        .then(function(res){
            console.log(res)
            $scope.lists = res.data
        })
        .catch(function(error){
            console.log(error)
        })
    }
}])



