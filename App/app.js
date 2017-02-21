
    
  angular.module("healthApp", ["header","register","ui.bootstrap","ui.router","patientdir"]); 
        

angular.module("healthApp").config(["$stateProvider", function($stateProvider){
    
    var homeObj = {
        templateUrl : "App/templates/home.html"
    };
    var registerObj = {
        templateUrl : "App/templates/register.html",
        controller  : "registerCtrl"
    }
    var patientinfoObj = {
        templateUrl : "App/templates/patientinfo.html"
    };
    var contactusObj = {
        templateUrl : "App/templates/contactus.html"
    };
    
    
    $stateProvider.state("index",{
        url : "",
        views : {
            "header" : {
                templateUrl : "App/templates/header.html"
            },
            "footer" : {
                template: ""
            }
        }
    })
        .state('index.home',homeObj)
        .state('index.register',registerObj)
        .state('index.patientinfo',patientinfoObj)
        .state('index.contactus',contactusObj)
    
 
}]);
    angular.module("healthApp")
    .run([function () {
        console.log("I am the main app run");
  }]);