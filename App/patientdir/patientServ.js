(
    function () {
        function patientServ($q,$http) {
         
              var res;
            this.counter=function(){
                var dfd= $q.defer();
                $http.get('App/api/details.json')
                .then(function(res){
                    dfd.resolve(res);
                    return res.data;
                })
                .catch(function(err){
                    dfd.reject(err);
                    return res;
                });
                
                return dfd.promise;
            };
        }
        angular.module("patientdir")
            .service("patientServ",
                     ["$q","$http",patientServ]);

    })();
