var React = require('react');

var paper = require('paper');

function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min) + min);
}

var Icon = React.createClass({
  render:function(){
    var style = {};
    style.backgroundImage = "url(/images/influencesSmall/"+this.props.url+")";
    return (
      <div style={style} className="Icon">
      </div>
    )
  }
})

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var Influences = React.createClass({
	getInitialState:function(){
		return {
			urls :
			["alan.jpg",
			"alexander.jpg",
			"alfred.jpg",
			"amy.jpg",
			"beatles.jpg",
      "etta.jpg",
      "frank.jpg",
			"bob.jpg",
			"coco.jpg",
			"dali.jpg",
			"debussy.jpg",
			"donquixote.jpg",
			"edison.jpg",
			"einstein.jpg",
			"elon.jpg",
			"frida.jpg",
			"hannah.jpg",
			"hayao.jpg",
			"helmut.jpg",
			"henry.jpg",
			"john.jpg",
      "jonny.jpg",
      "jordan.jpg",
			"kanye.jpg",
			"kendrick.jpg",
			"lauryn.jpeg",
			"lebron.jpg",
			"loureed.jpg",
			"ludwig.jpg",
			"marie.jpg",
			"mark.jpg",
      "marvin.jpg",
      "martin.jpg",
      "mcqueen.jpg",
      "chopin.jpg",
			"miles.jpg",
      "muhammad.jpg",
      "marcel.jpg",
			"mya.jpg",
      "nietzsche.png",
      "james.jpg",
			"nina.jpg",
			"pablo.jpg",
			"quentin.jpg",
      "basquiat.jpg",
      "kafka.jpg",
			"rosa.png",
			"shostakovich.jpg",
			"stanley.jpg",
			"steve.jpg",
      "twain.jpg",
      "trane.jpg",
      "hume.jpg",

      "pollock.jpg",
			"stravinsky.jpg",
			"tina.jpg",
			"tupac.jpg",
      "zelda.jpg",
      "vangogh.jpg",
			"wanderer.jpg"]
		}
	},
  // getInitialState: function(){
  //   return {
  //     urls: ["mark.png",
  //     "mcqueen.png",
  //     "miles.png",
  //     "muhammad.png",
  //     "nietzsche.png",
  //     "nina.png",
  //     "quentin.png",
  //     "rosa.png",
  //     "shostakovich.png",
  //     "stanley.png",
  //     "steve.png",
  //     "stravinsky.png",
  //     "tina.png",
  //     "tupac.png",
  //     "vangogh.png",
  //     "wanderer.png"]
  //   }
  // },
 componentDidMount:function(){
	//  var myCanvas = document.getElementById('myCanvas');
	//  paper.setup(myCanvas);
  //  // Create a raster item using the image tag with id='mona'
  //   var rasterOriginal = new paper.Raster('steve.png');
  //   // rasterOriginal.scale(.72);
   //
  //   var raster = new paper.Raster('steve.png');
   //
  //   // Hide the raster:
  //   raster.visible = false;

    // The size of our grid cells:
    // var gridSize = 12;
    // var width = rasterOriginal.width;
    //
    // var start = new paper.Point(200,200);
    // rasterOriginal.position = new paper.Point(200,200);
    // rasterOriginal.position.x += width/2 - 25;
    // rasterOriginal.position.y += width/2 - 25;
    // // Space the cells by 120%:
    // var spacing = 1.2;
    // //width = 12
    // raster.on('load', function() {
    //
    // 	raster.size = new paper.Size(12, 12);
    //
    // 	for (var y = 0; y < raster.height; y++) {
    // 		for(var x = 0; x < raster.width; x++) {
    // 			var color = raster.getPixel(x, y);
    //       var center = new paper.Point(x, y);
    //
    // 			var path = new paper.Path.Circle({
    // 				center: center.multiply(gridSize).add(start),
    // 				radius: gridSize / 2 / spacing
    // 			});
    //
    // 			// Set the fill color of the path to the color
    // 			// of the pixel:
    // 			path.fillColor = color;
    // 		}
    // 	}
    //
    // 	// Move the active layer to the center of the view, so all
    // 	// the created paths in it appear centered.
    // 	// paper.project.activeLayer.position = paper.view.position;
    //
    //   raster.visible = true;
    // });
    // function onFrame() {
    //   if(img.opacity < 1) {
    //     img.opacity += 0.1;
    //   }
    // }

    // Move the active layer to the center of the view:
    // project.activeLayer.position = view.center;
	 // Create a simple drawing tool:
		// // var tool = new paper.Tool();
    //
		// var self = this;
		// var index = 0;
		// var prevMousePosition = paper.view.center;
		// var numImages = self.state.urls.length;
		// function addImage(index, point, url){
		// 	var raster = new paper.Raster(url);
    //   raster.visible = false;
    //   var gridSize = 12;
    //
    //   var spacing = 1.2;
		// 	var x = getRandomArbitrary(50, paper.view.viewSize._width-50);
		// 	var y = getRandomArbitrary(50, 	paper.view.viewSize._height-50);
		// 	// raster.position = point;
		// 	// prevMousePosition = point;
    //   raster.on('load', function() {
    //   	// Since the example image we're using is much too large,
    //   	// and therefore has way too many pixels, lets downsize it to
    //   	// 40 pixels wide and 30 pixels high:
    //   	raster.size = new paper.Size(40, 30);
    //
    //   	for (var y = 0; y < raster.height; y++) {
    //   		for(var x = 0; x < raster.width; x++) {
    //   			// Get the color of the pixel:
    //   			var color = raster.getPixel(x, y);
    //
    //   			// Create a circle shaped path:
    //   			var path = new paper.Path.Circle({
    //   				center: new paper.Point(x, y) * gridSize,
    //   				radius: gridSize / 2 / spacing
    //   			});
    //
    //   			// Set the fill color of the path to the color
    //   			// of the pixel:
    //   			path.fillColor = color;
    //   		}
    //   	}
    //
    //   	// Move the active layer to the center of the view, so all
    //   	// the created paths in it appear centered.
    //   	paper.project.activeLayer.position = paper.view.center;
    //   });
    //
		// }
    //
      // addImage(1, point, url);
      //
			// paper.view.onMouseMove = function(event) {
      //
			// 	url = self.state.urls[index];
			// 	var point = event.point
      //   console.log(point)
			// 	if(index == 0){
			// 		if(prevMousePosition.getDistance(point) > 100){
			// 			addImage(index, point, url);
			// 			index += 1;
			// 		}
			// 	}
      //
			// 	else if(prevMousePosition.getDistance(point) > 100 && index < numImages ){
			// 		addImage(index, point, url);
			// 		index += 1;
			// 	}
			// }


    // aper.view.draw();
 },
  render: function(){
    var shuffled = shuffle(this.state.urls)
    return(
      <div className="Influences Slide">
        <div key={6} className="content-parent">

				{shuffled.map(function(url, i){
						return(
              <Icon url={url} key={i}/>
						)
				})}
      </div>
      </div>

    )
  }
})

module.exports = Influences;
