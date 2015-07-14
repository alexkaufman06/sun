sun.controller('SunCtrl',function($scope,$interval){
  $scope.sun = { sep: 80, inv: 5, sat: 70, hue: 0 };

  var sunSat= $interval(function() {
    $scope.sun.sat += 1;
  },1);

  var sunHue= $interval(function() {
    $scope.sun.hue += 1;
  },100)

  var sunInv= $interval(function() {
    if ($scope.sun.inv === 100) {
      $scope.sun.inv = 1;
    }
    $scope.sun.inv += 1;
  }, 1000)

});
