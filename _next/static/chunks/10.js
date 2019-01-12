(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./_posts/2016-07-04-watch-with-angular2.md":
/*!**************************************************!*\
  !*** ./_posts/2016-07-04-watch-with-angular2.md ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\nlayout: post\ntitle: $watch with Angular 2\ntags:\n  - GSoC\n  - Jangouts\n---\n\nIn my [previous post](/2016/07/03/events-in-angular2), I was talking about how to implement events from Angular 1\nin Angular 2. But in the snippet of code that I use as example we can find\nanother thing that not exist in Angular 2: `$watch`.\n\nI start defining the problem. We can have a directive or Angular 1 component\nlike that:\n\n```js\nvar module = angular.module(\"myApp\");\n\nmodule.directive('exampleDirective', function () {\n  return {\n    template: '<div>{{internalVar}}</div>',\n    scope: {\n      externalVar: \"=\"\n    },\n    controller: function(scope, element) {\n      scope.$watch('externalVar', function(newVal, oldVal) {\n        if (newVal !== oldVal) {\n          scope.internalVar = newVal;\n        }\n      });\n    }\n});\n```\n\nIf we want to migrate this code to Angular 2 we find a trouble: the new Angular\ndon't have `scope`, so it don't have `$watch`. How we can watch a directive\nattribute? The solution is the **set** syntax from ES6.\n\n> The **set** syntax binds an object property to a function to be called when\n> there is an attempt to set that property.\n\n_From [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/set)_\n\nSo we can bind the input for a component to a function that do the same as the\n`$watch` function.\n\n```ts\nimport { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'example-component'\n})\nexport class ExampleComponent {\n  public internalVal = null;\n\n  constructor() {}\n\n  @Input('externalVal')\n  set updateInternalVal(externalVal) {\n    this.internalVal = externalVal;\n  }\n}\n```\n"

/***/ })

}]);
//# sourceMappingURL=10.js.map