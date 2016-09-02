angular
  .module('app')
  .directive('outerDirective', OuterDirective)

function OuterDirective() {
  console.log("From the OuterDirective");
  return {
    restrict: 'E', //restricts to use as element
    scope: {
      title: '@'
    },
    transclude: true,
    template: [
      '<h1>{{ title }}</h1>',
      '<div ng-transclude></div>'
    ].join('')
  };
};