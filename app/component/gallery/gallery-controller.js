'use strict'

const angular = require('angular')

angular.module('demoApp').controller('GalleryController', [GalleryController]);

function GalleryController(){
  this.images = [
    {
      title: 'first fractle',
      text: 'fist info n stuff',
      imgSrc: require('../../assets/img/01-frac.jpg')
    },
    {
      title: 'second fractle',
      text: 'second info n stuff',
      imgSrc: require('../../assets/img/02-frac.jpg')
    },
    {
      title: 'third fractle',
      text: 'third info n stuff',
      imgSrc: require('../../assets/img/03-frac.jpg')
    }
  ]
}
