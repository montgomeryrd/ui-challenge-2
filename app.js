'use strict';

var sprite = require('node-sprite');

sprite.sprites({path: './sprites'}, function(err, result) {
  var globalSprite = result['global'];
  var animalsSprite = result['animals'];
  console.log(globalSprite.filename());
  console.log(animalsSprite.filename());
  console.log('animals/duck', animalsSprite.image('duck'));
});
