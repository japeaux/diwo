angular.module('app.directives', [])
.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function($scope, $el) {
            $rootScope.hideTabs = true;
            $scope.$on('$destroy', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
})
.directive('backImg', function($timeout){
  return function(scope, element, attrs){
    $timeout(function () {
      var url = attrs.backImg;
      var content = element.find('a');
      content.css({
        'background-image': 'img/starsilver.png',
        'background-size' : 'cover'
      });

    });

  };
});



