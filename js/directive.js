angular.module('TodoDirective',[]).directive('todoTable', function() {
  return {
    restrict: 'A',    // A -> attribute
    templateUrl: 'templates/directives/todo-table.html'
  };
})

angular.module('NavDirective',[]).directive('navbardir', function() {
  return {
    restrict: 'A',    // E-> element
    templateUrl: 'templates/directives/navbardir.html'
  };
})

angular.module('Test',[]).directive('test', function() {
  return {
    restrict: 'A',    // E-> element
    templateUrl: 'templates/directives/test.html'
  };
})