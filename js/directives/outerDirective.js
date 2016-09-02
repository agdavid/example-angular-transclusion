angular
  .module('app')
  .directive('outerDirective', OuterDirective)

function OuterDirective() {
  console.log("From the OuterDirective");
  return {

  };
};