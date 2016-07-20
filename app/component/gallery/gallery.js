'use strict'

const angular = require('angular')

angular.module('demoApp').directive('gallery', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./gallery.html'),
    scope: {},
    controller: 'GalleryController',
    controllerAs: 'galleryCtrl',
  }
})
