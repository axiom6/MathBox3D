
/**
* Bootstrap
*/
window.DomReady.ready(function() {
    ThreeBox.preload( [ 'MathBox.glsl.html' ], init ); } );

init = function() {
  var mathbox = window.mathbox = mathBox( {
     controlClass: ThreeBox.OrbitControls, cameraControls:true, cursor:true,
      elementResize:true,fullscreen:true,  screenshot:    true, stats: false,  scale:1
  }).start();

  // Viewport camera/setup
  mathbox
    .viewport( { type: 'cartesian', range:[ [0,1], [-1,1], [0,1] ], scale:[.8,.8,.8] } )
    .camera(   {  orbit: 3.5, theta: τ/4 } )
    .transition(300);

  // Director
  var director = window.director = new MathBox.Director( mathbox, script);

  // Arrow controls controls for stand-alone
  window.addEventListener('touchstart', function (e) {
      //Util.consume(e);
      director.forward();
      document.getElementById('info').style.opacity = '0'; } );

  window.addEventListener('keydown', function(e) {
    if(      e.keyCode == 38 || e.keyCode == 37) director.back();
    else if( e.keyCode == 40 || e.keyCode == 39) director.forward(); } );

}; // End init()

