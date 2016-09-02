angular
  .module('app')
  .directive('innerDirective', InnerDirective)

function InnerDirective() {
  console.log("From the InnerDirective");
  return {
    restrict: 'E',
    scope: {
      title: '@'
    },
    transclude: true,
    template: [
      '<h2>{{ title }}</h2>',
      '<div ng-transclude></div>'
    ].join('')
  };
};