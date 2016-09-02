angular
  .module('app')
  .directive('innerDirective', InnerDirective)

function InnerDirective() {
  console.log("From the InnerDirective");
  return {

  };
};