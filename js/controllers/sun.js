sun.controller('SunCtrl',function($scope, $interval){
  $scope.sun = { sep: 0, inv: 0, sat: 0, hue: 0 };

  $scope.sepCounterUp = function() {
    $scope.sun.sep += 1;
  }

  $scope.sepCounterDown = function() {
    $scope.sun.sep -= 1;
  }

  $scope.$watch(function() { return $scope.sun.sep },
    function(newValue, oldValue) {
      if (newValue === 100) {
        $interval($scope.sepCounterDown, 100, 100);
      } else {
        if (newValue === 0) {
          $interval($scope.sepCounterUp, 100, 100);
        }
      }
    }
  );

  $scope.hueCounterUp = function() {
    $scope.sun.hue += 1;
  }

  $scope.hueCounterDown = function() {
    $scope.sun.hue -= 1;
  }

  $scope.$watch(function() { return $scope.sun.hue; },
    function(newValue, oldValue) {
      if (newValue === 360) {
        $interval($scope.hueCounterDown, 100, 360);
      } else {
        if (newValue === 0) {
          $interval($scope.hueCounterUp, 100, 360);
        }
      }
    }
  );

  $scope.satCounterUp = function() {
    $scope.sun.sat += 1;
  }

  $scope.satCounterDown = function() {
    $scope.sun.sat -= 1;
  }

  $scope.$watch(function() { return $scope.sun.sat; },
    function(newValue, oldValue) {
      if (newValue === 5000) {
        $interval($scope.satCounterDown, 1, 5000);
      } else {
        if (newValue === 0) {
          $interval($scope.satCounterUp, 1, 5000);
        }
      }
    }
  );

  $scope.invCounterUp = function() {
    $scope.sun.inv += 1;
  }

  $scope.invCounterDown = function() {
    $scope.sun.inv -= 1;
  }

  $scope.$watch(function() { return $scope.sun.inv; },
    function(newValue, oldValue) {
      if ( newValue === 100) {
        $interval($scope.invCounterDown, 50, 100);
      } else {
        if (newValue === 0) {
          $interval($scope.invCounterUp, 50, 100);
        }
      }
    }
  );
});
