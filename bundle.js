(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var song;
var amp;
var button;

var volhistory = [];

window.toggleSong = function() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
};

window.preload = function() {
  song = loadSound('rainbow.mp3');
}

window.setup = function() {
  createCanvas(500, 500);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
}

window.draw = function() {
  if(song.isPlaying()){
  background(0);
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
  push();
  var currentY = map(vol, 0, 1, height, 0);
  translate(0, height / 2 - currentY);
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
  endShape();
  pop();
  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }


  line(0,height/2,height,height/2);
  stroke(255,0,255);
  line(volhistory.length, 0, volhistory.length, height);
  //stroke(0,255,0);
}
  ellipse(100, 100, 200, vol * 200);
};

},{}]},{},[1]);
