'use strict';

var sprite = require('node-sprite');

sprite.sprites({path: '../sprites'}, function(err, result) {
  var globalSprite = result['form-elements-sprite.png'];
  console.log(globalSprite.filename());
});


var sprity = require('sprity');
sprity.create(options, cb);
