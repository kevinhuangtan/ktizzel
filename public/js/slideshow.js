
var colors =[["#424242", "#6D6D6D", "#363636", "#1C1D1D"],["#BAB3A0", "#C29658", "#1E1E1E", "#F39B37"], ["#245226", "#4A4E46", "#141810", "#35842D"],["#1B1B1B", "#FFC568", "#504A42", "#5E4C32"],["#F5F5F5", "#0C151B", "#7E756B", "#A3A7A9"],["#FFFDF8", "#1F0000", "#48464B", "#FFF0CD"],["#CECECA", "#898989", "#4A4440", "#AA9D94"]]
// var videos =['/','/static/project-movies/annelisa.mp4','/static/project-movies/yhack.mp4','/static/project-movies/katie.mp4', '/static/project-movies/halo.mp4','/static/project-movies/buttery.mp4'];
var videos = ['/','annelisa', 'yhack', 'katie', 'halo','buttery']
var links =['#','http://www.annelisaleinbach.com','http://www.yhack.org','http://www.katiecolford.com', 'http://www.github.com/kevinhuangtan/halopaircounter','http://www.calhounbuttery.com']
var background_colors =['black','white','black','white', 'black','black']
var slide_number = 5;

////////////// document start////////////////
 $(document).ready(function(){

 	var slide = 0;
 	$('body').css('background-color',background_colors[slide]);
 	$('.project-link').attr("href", links[slide]);
 	$('.bottom-poly').css('fill', colors[slide][0]);
 	$('.right-poly').css('fill', colors[slide][1]);
 	$('.top-poly').css('fill', colors[slide][2]);
 	$('.left-poly').css('fill', colors[slide][3]);

///////////////// show next slide color///////////////
	$('.left').hover(
 		function(){
 		if(slide > 1){
			$('.left-poly').css('fill',colors[slide-1][3]);
		}
		else{
			$('.left-poly').css('fill',colors[slide_number][3]);
		}
 		},

 		function(){
			$('.left-poly').css('fill',colors[slide][3]);
 		}
	);	


 	$('.right').hover(
 		function(){
 			if(slide < slide_number){
				$('.right-poly').css('fill',colors[slide+1][1]);
			}
			else{
				$('.right-poly').css('fill',colors[1][1]);
			}
 		},
 		function(){
		$('.right-poly').css('fill',colors[slide][1]);
 		}
 	);

////////////////////go to next slide////////////////////////
 	$('.left').click(function(){
 		$('.top-hover').fadeOut(500);
 		if (slide > 1) {
	 		slide = slide - 1;
	 		$('#' + videos[slide + 1]).hide();
	 		$('#' + videos[slide]).show();
	 	}
	 	else{
	 		if (slide == 0 || slide == 1){
	 			slide = slide_number;
	 			$('#' + videos[1]).hide();
	 			$('#' + videos[slide]).show();
	 		}
	 	}
	 	$('.project-link').attr("href", links[slide]);
 		$('body').css('background-color',background_colors[slide]);
 		$('.bottom-poly').css('fill',colors[slide][0]);
	 	$('.right-poly').css('fill',colors[slide][1]);
	 	$('.top-poly').css('fill',colors[slide][2]);
	 	$('.left-poly').css('fill',colors[slide][3]);
 	});

 	$('.right').click(function(){
 		$('.top-hover').fadeOut(500);
 		if (slide < slide_number) {
	 		slide = slide + 1;
	 		if(slide == 1){
	 			$('#' + videos[slide]).show();
	 		}
	 		else{
	 			$('#' + videos[slide-1]).hide();
	 			$('#' + videos[slide]).show();
	 		}
	 		
	 	}
	 	else{
	 		if (slide == slide_number){
	 			slide = 1;
	 			$('#' + videos[slide_number]).hide();
	 			$('#' + videos[slide]).show();
	 		}
	 	}	
	 	$('.project-link').attr("href", links[slide]);
 		$('body').css('background-color',background_colors[slide]);
 		$('.bottom-poly').css('fill',colors[slide][0]);
	 	$('.right-poly').css('fill',colors[slide][1]);
	 	$('.top-poly').css('fill',colors[slide][2]);
	 	$('.left-poly').css('fill',colors[slide][3]);
 	});
 });






