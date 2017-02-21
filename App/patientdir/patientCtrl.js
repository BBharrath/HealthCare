(function () {

    function patientCtrl($scope, patientServ) {
       
        patientServ.counter()
            .then(function (res) {
                $scope.details = res.data.details;
            })
            .catch(function (res) {
                $scope.showError = true;
            });
    }
    angular.module('patientdir')
        .controller("patientCtrl", ["$scope", "patientServ", patientCtrl]);
})();
