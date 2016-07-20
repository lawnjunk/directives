'use strict'

const angular = require('angular')

angular.module('demoApp').directive('hello', function(){
  return {
    template: require('./hello.html'),
    restrict: 'E',
    transclude: true,
  }
})
