$(function(){

	$('#go').click(function(){
		
		function checkIfComplete(){

			if(isComplete==false){
				isComplete=true;
			}
			else{
				place='second';
			}

		}
		var carWidth=$('.car').width();

		var raceTrackWidth=$(window).width()-carWidth;

		var raceTime1=Math.floor((Math.random()*5000)+1);
		var raceTime2=Math.floor((Math.random()*5000)+1);
		

		var isComplete=false;
		var place='first';

		$('#car1').animate({


				left:raceTrackWidth

			},raceTime1,function(){

			checkIfComplete();

			$('#raceInfo1 span').text('Finished race in '+place+ 'place in ' +raceTime1+ ' milliseconds');

					
		});
		$('#car2').animate({


				left:raceTrackWidth

			},raceTime2,function(){

			checkIfComplete();
			$('#raceInfo2 span').text('Finished race in '+place+ 'place in ' +raceTime2+ ' milliseconds');

					
		});


	
	});

	$('#reset').click(function(){
		$('.car').css('left','0');
		$('#raceInfoContainer span').text("");

	});


});