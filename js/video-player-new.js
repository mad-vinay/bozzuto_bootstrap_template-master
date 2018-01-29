function doFirst(){
	barSize=600;
	
	$('.v_player').each(function(){
		
		//myMovie = $(this).find('.myMovie')[0];		
		playButton = $(this).find('.playButton')[0];		
		bar = $(this).find('.defaultBar')[0];
		//progressBar = $(this).find('.progressBar')[0];

		playButton.addEventListener('click', function(){playOrPause(this);}, false);
		bar.addEventListener('click', function(){clickedBar(this)}, false);	
	
	});	
	
}

function playOrPause(btn){
	myMovie = $(btn).parents('.v_player').find('.myMovie')[0];	
	playButton = $(btn).parents('.v_player').find('.playButton')[0];			
	if(!myMovie.paused && !myMovie.ended){
		myMovie.pause();
		playButton.innerHTML = 'Play';		
	}else{
		myMovie.play();
		playButton.innerHTML = 'Pause';
		updateBar = setInterval(update(btn), 500);		
	}
}

function update(btn){
	myMovie = $(btn).parents('.v_player').find('.myMovie')[0];	
	progressBar = $(btn).parents('.v_player').find('.progressBar')[0];
	if(!myMovie.ended){
		var size = parseInt(myMovie.currentTime*barSize/myMovie.duration);
		progressBar.style.width = size + 'px';
	}else{
		progressBar.style.width = '0px';
		playButton.innerHTML = 'Play';
		window.clearInterval(updateBar);
	}
}

/* function clickedBar(e){
	if(!myMovie.paused && !myMovie.ended){		
		
		var mouseX = e.pageX-bar.offsetLeft;
		var newtime = mouseX*myMovie.duration/barSize;
		myMovie.currentTime = newtime;
		progressBar.style.width = mouseX + 'px';
	}
} */

window.addEventListener('load', doFirst, false);