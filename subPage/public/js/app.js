/**
 * Created by hxsd on 2016/11/23.
 */
// 创建一个主模块
var myapp = angular.module("myapp", ["ionic"]);

// 注册一个控制器
myapp.controller("myCtrl", function ($scope, $http, $state, $stateParams) {
    // 存储请求回来的图片
    $scope.items = [
        {imgsrc: "images/1.jpg", rating: 3, desc: "模板一", id: 0},
        {imgsrc: "images/2.jpg", rating: 4, desc: "模板二", id: 1},
        {imgsrc: "images/4.jpg", rating: 1, desc: "模板三", id: 2},
        {imgsrc: "images/5.jpg", rating: 2, desc: "模板四", id: 3},
        {imgsrc: "images/6.jpg", rating: 3, desc: "模板五", id: 4},
        {imgsrc: "images/7.jpg", rating: 2, desc: "模板六", id: 5},
        {imgsrc: "images/8.jpg", rating: 4, desc: "模板七", id: 6},
        {imgsrc: "images/9.jpg", rating: 5, desc: "模板八", id: 7},
        {imgsrc: "images/10.jpg", rating: 1, desc: "模板九", id: 8},
        {imgsrc: "images/11.jpg", rating: 2, desc: "模板十", id: 9},
        {imgsrc: "images/12.jpg", rating: 5, desc: "模板十一", id: 10},
        {imgsrc: "images/13.jpg", rating: 2, desc: "模板十二", id: 11},
        {imgsrc: "images/14.jpg", rating: 3, desc: "模板十三", id: 12},
        {imgsrc: "images/15.jpg", rating: 4, desc: "模板十四", id: 13},
        {imgsrc: "images/16.jpg", rating: 1, desc: "模板十五", id: 14},
        {imgsrc: "images/17.jpg", rating: 3, desc: "模板十六", id: 15},
        {imgsrc: "images/18.jpg", rating: 5, desc: "模板十七", id: 16},
        {imgsrc: "images/19.jpg", rating: 3, desc: "模板十八", id: 17},
        {imgsrc: "images/20.jpg", rating: 1, desc: "模板十九", id: 18},
        {imgsrc: "images/21.jpg", rating: 3, desc: "模板二十", id: 19},
        {imgsrc: "images/22.jpg", rating: 2, desc: "模板二十一", id: 20},
        {imgsrc: "images/23.jpg", rating: 4, desc: "模板二十二", id: 21},
        {imgsrc: "images/24.jpg", rating: 3, desc: "模板二十三", id: 22},
        {imgsrc: "images/25.jpg", rating: 2, desc: "模板二十四", id: 23},
        {imgsrc: "images/26.jpg", rating: 1, desc: "模板二十五", id: 24},
        {imgsrc: "images/27.jpg", rating: 3, desc: "模板二十六", id: 25},
        {imgsrc: "images/28.jpg", rating: 4, desc: "模板二十七", id: 26},
        {imgsrc: "images/29.jpg", rating: 3, desc: "模板二十八", id: 27},
        {imgsrc: "images/30.jpg", rating: 5, desc: "模板二十九", id: 28},
        {imgsrc: "images/31.jpg", rating: 2, desc: "模板三十", id: 29},
        {imgsrc: "images/32.jpg", rating: 1, desc: "模板三十一", id: 30},
        {imgsrc: "images/33.jpg", rating: 3, desc: "模板三十二", id: 31},
        {imgsrc: "images/34.jpg", rating: 3, desc: "模板三十三", id: 32},
        {imgsrc: "images/35.jpg", rating: 2, desc: "模板三十四", id: 33},
        {imgsrc: "images/36.jpg", rating: 1, desc: "模板三十五", id: 34},
        {imgsrc: "images/37.jpg", rating: 3, desc: "模板三十六", id: 35},
        {imgsrc: "images/38.jpg", rating: 3, desc: "模板三十七", id: 36},
        {imgsrc: "images/39.jpg", rating: 2, desc: "模板三十八", id: 37},
        {imgsrc: "images/40.jpg", rating: 1, desc: "模板三十九", id: 38},
        {imgsrc: "images/41.jpg", rating: 4, desc: "模板四十", id: 39},
        {imgsrc: "images/42.jpg", rating: 3, desc: "模板四十一", id: 40},
        {imgsrc: "images/43.jpg", rating: 5, desc: "模板四十二", id: 41},
        {imgsrc: "images/44.jpg", rating: 3, desc: "模板四十三", id: 42},
        {imgsrc: "images/45.jpg", rating: 1, desc: "模板四十四", id: 43},
        {imgsrc: "images/46.jpg", rating: 3, desc: "模板四十五", id: 44},
        {imgsrc: "images/47.jpg", rating: 2, desc: "模板四十六", id: 45},
        {imgsrc: "images/48.jpg", rating: 4, desc: "模板四十七", id: 46},
        {imgsrc: "images/49.jpg", rating: 1, desc: "模板四十八", id: 47},
        {imgsrc: "images/50.jpg", rating: 5, desc: "模板四十九", id: 48},
    ];
    $scope.todetail = function (product) {
        $state.go("makePoster", {id: product.id});
    };
    //同时储存获取的背景图片id；

    $scope.getid = function () {
        // $state.go("subPoster",{id:$stateParams.id});
        $scope.imgIndex = $stateParams.id;
        console.log($scope.imgIndex);
    }
    // 存储请求回来的用户信息
    $scope.users = [
        {name: "张三", tel: "15693481594", addr: "四川省青羊区骡马市", id: $stateParams.id},
    ];


    // 传入一个整数n，返回一个长度为n的数组
    $scope.getNumber = function (number) {
        return new Array(number);
    };
})
;

// 配置路由
myapp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("tour", {
            url: "/tour",
            templateUrl: "templates/tour/tour.html"
        })
        .state("home", {
            url: "/home",
            templateUrl: "templates/home/home.html"
        })
        .state("makePoster", {
            url: "/makePoster?:id",
            templateUrl: "templates/makePoster/makePoster.html"
        })
        .state("subPoster", {
            url: "/subPoster",
            templateUrl: "templates/subPoster/subPoster.html"
        })
    // 如果以上路由都不匹配，使用这个备选方案
    $urlRouterProvider.otherwise("/tour");
});