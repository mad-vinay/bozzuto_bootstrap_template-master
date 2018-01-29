$(function () {
	$('.selectlist li').on('click',function () {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	})
})

  $(function(){
$("#addClass").click(function () {
          $('#qnimate').addClass('popup-box-on');
            });
          
            $("#removeClass").click(function () {
          $('#qnimate').removeClass('popup-box-on');
            });
  })
    $(function(){

  $("#addClassb").click(function () {
          $('#qnimate-group').addClass('popup-box-on');
            });
          
            $("#removeClass").click(function () {
          $('#qnimate-group').removeClass('popup-box-on');
            });
  })
  
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


$('.minimise').click( function() {
    $("#minimising").toggleClass("mini");
} );
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});


$('.minimise').click( function() {
    $("#minimiser-ico").toggleClass("ico-rot");
} );


$('.chatbox-minimise').click( function() {
    $("#chat-minimiser").toggleClass("remove-chat");
} );

$('.chatbox-minimise').click( function() {
    $("#chat-minimiser-b").toggleClass("remove-chat-b");
} );


$('.chat-header-button').click( function() {
    $("#qnimate").toggleClass("hide-chat");
} );

$(function(){
	
 $("#chat-minimiser-b").click(function () {
          $('.popup-messages').addClass('off');
            });			
 $(".remove-chat-b").click(function () {
          $('.popup-messages').removeClass('off');
            });
})
			
			
			
			$("#chat-minimiser-b").click(function () {
          $('.popup-messages-footer').addClass('off');
            });
          
    $("#chat-minimiser-b").click(function () {
          $('.popup-box').addClass('off');
            });   
			
      $("#chat-minimiser-b").click(function () {
          $('.remove-chat-b').addClass('off');
            });
	
		


/* Scroll fixed menu */


$(window).scroll(function () {
	if ($(window).scrollTop() >= 100) {
		$('.homz-menu').addClass('fixed-menu');
	} else {
		$('.homz-menu').removeClass('fixed-menu');
	}
});


//Same height div for border height
	$(document).ready(function() {
	  $(".left-sec").css("height", $(".right-sec").height());
	});


$(".view-100-more").click(function(){
	$(".view-100-more").hide();
});






