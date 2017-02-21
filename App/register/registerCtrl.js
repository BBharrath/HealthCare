(function(){
    
    function registerCtrl($scope){
       $scope.user = {}; 
        $scope.submit = function(){
            $scope.submitted = true;
         console.log($scope.user);
        }}
      
   angular.module("register").controller("registerCtrl",registerCtrl)
})();