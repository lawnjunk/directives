'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

var angular = require('angular');
var app = angular.module('demoApp', []);

require('./component/hello');
require('./component/list-image');
require('./component/gallery');