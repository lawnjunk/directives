'use strict'

const angular = require('angular')

angular.module('demoApp').directive('listImage', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./list-image.html'),
    scope: {
      imgSrc:"@",
      title:"@",
      text:"@",
      lulwat:"=something",
    }
  }
})

