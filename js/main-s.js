$('#land-slide').owlCarousel({
    animateOut: 'fadeOutDown',
    animateIn: 'fadeIn',
    smartSpeed:5550,
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    // autoplayHoverPause:true,
    autoplaySpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$('#SlidOne').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    navText:["",""],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('#SlidTwo').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText:["",""],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('#SlidThree').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    navText:["",""],
    responsive:{
        0:{
            items:1,
            dots:true,
            // autoHeight:true
        },
        768:{
            items:3
        }
    }
})

$('#FooterSlid').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


$('#HomzcareBanner').owlCarousel({
    animateOut: 'fadeOutRight',
    animateIn: 'slideInLeft',
    loop:true,
    margin:0,
    smartSpeed:800,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// ================== html video controls visible only on mouseover ==================
// $('.myvideo').hover(function toggleControls() {
//     if (this.hasAttribute("controls")) {
//         this.removeAttribute("controls")
//     } else {
//         this.setAttribute("controls", "controls")
//     }
// })



// ================== video play and puse button change ==================

$(".playButton").click(function(){
    $(this).toggleClass("pause");
});


// ================== video full screen ==================
function goFullscreen(id) {
    var element = document.getElementById(id);
    if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
    }
}

// =============================== input feald text hide on click ===============================

$(document).ready(function() {
   $('input').on('focus', function() {
       // On first focus, check to see if we have the default text saved
       // If not, save current value to data()
       if (!$(this).data('defaultText')) $(this).data('defaultText', $(this).val());

       // check to see if the input currently equals the default before clearing it
       if ($(this).val()==$(this).data('defaultText')) $(this).val('');
   });
   $('input').on('blur', function() {
       // on blur, if there is no value, set the defaultText
       if ($(this).val()=='') $(this).val($(this).data('defaultText')); 
   });
   
   $('textarea').on('focus', function() {
       // On first focus, check to see if we have the default text saved
       // If not, save current value to data()
       if (!$(this).data('defaultText')) $(this).data('defaultText', $(this).val());

       // check to see if the input currently equals the default before clearing it
       if ($(this).val()==$(this).data('defaultText')) $(this).val('');
   });
   $('textarea').on('blur', function() {
       // on blur, if there is no value, set the defaultText
       if ($(this).val()=='') $(this).val($(this).data('defaultText')); 
   });
    
    $('.hestimator-wrapper .cell').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.hestimator-wrapper .cell').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
});




$(document).ready(function(){
    $(".applyNowButton-2").click(function(){
        $(".applyNowButton-2").toggleClass("hidenButton");
    });
});
$(document).ready(function(){
    $(".applyNowButton-1").click(function(){
        $(".applyNowButton-1").toggleClass("hidenButton");
    });
});