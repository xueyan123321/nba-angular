/**
 * Created by acer on 2017/4/10.
 */
myModule.controller('NbaStarController',['$scope','infoService',function($scope,infoService){
    $scope.starInfo = infoService.getStarInfo();
}])
.controller('DataController',['$scope','dataService',function($scope,dataService){
    $scope.seasonDatas = dataService.getSeasonData();
}])