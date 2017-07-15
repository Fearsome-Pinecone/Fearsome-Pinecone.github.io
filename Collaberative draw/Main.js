// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDAOmW37qUJ7XSSpvRmpco54lfB6CTT06U",
    authDomain: "collaborative-sketch-c4560.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-c4560.firebaseio.com",
    projectId: "collaborative-sketch-c4560",
    storageBucket: "collaborative-sketch-c4560.appspot.com",
    messagingSenderId: "1075713428520"
  };
 
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];

function setup() {
  var canvas = createCanvas(400, 400);
  background(255);
  fill(0);

  pointsData.on("child_added", function(point) {
    points.push(point.val());
  });

  pointsData.on("child_removed", function () {
    points = [];
  });

  canvas.mousePressed(drawPoint);
  canvas.mouseMoved(drawPointIfMousePressed);
}

function draw() {
  background(255);

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    ellipse(point.x, point.y, 5, 5);
  }
}



