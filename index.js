$(document).ready(onload);

function onload() {
  new Waypoint.Inview({
    element: $('#section-main')[0],
    entered: function(direction) {
      direction == 'down' ? playForward(1) : playBackward(1);
    }
  });
  new Waypoint.Inview({
    element: $('#section-2')[0],
    entered: function(direction) {
      direction == 'down' ? playForward(2) : playBackward(2);
    }
  });
  new Waypoint.Inview({
    element: $('#section-3')[0],
    entered: function(direction) {
      direction == 'down' ? playForward(3) : playBackward(3);
    }
  });
  new Waypoint.Inview({
    element: $('#section-4')[0],
    entered: function(direction) {
      direction == 'down' ? playForward(4) : playBackward(4);
    }
  });
  new Waypoint.Inview({
    element: $('#section-5')[0],
    entered: function(direction) {
      direction == 'down' ? playForward(5) : playBackward(5);
    }
  });
}

var slideMap = [
  [0, 0],
  [0.6, 1.0],
  [1.6, 2.0],
  [2.6, 3.0],
  [4.5, 4.5]
];

function playForward(slideNum) {
  var video = $('.product-video')[0];
  video.ontimeupdate = function() {
    if (video.currentTime >= slideMap[slideNum - 1][0]) {
      video.pause();
    }
  };
  video.playbackRate = 1.0;
  video.play();
}

function playBackward(slideNum) {
  var video = $('.product-video')[0];
  video.ontimeupdate = function() {
    if (video.currentTime <= slideMap2[slideNum - 1][1]) {
      video.pause();
    }
  };
  video.playbackRate = -1.0;
  video.play();
}
