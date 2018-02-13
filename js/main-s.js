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

    $('#calculate').on('click', function(event) {
        $("#calculation-result").css("display", "flex");
        var target = $(this.getAttribute('href'));

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });

    $('#tab-2 input[type="checkbox"]').click(function(){
        var target = $(this).data('target');
        $("." + target).toggle();
    });


    $('#calculate-emi').on('click', function(event) {
        $("#plot-graph").css("display", "block");
        var target = $(this.getAttribute('href'));

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });


    $('.find-and-choose').click( function(event){
        event.preventDefault();
        $(".sub32 .container-fluid.text-left").toggleClass("inactive-section");
        $(".sub32 .container-fluid.text-left#compare-emi-result").toggleClass("active-section");
        ($(this).text() === "compare") ? $(this).text("Done") : $(this).text("compare");
    });

    $('#boot-multiselect-demo').multiselect({
        nonSelectedText:'Select bank to compare',
        includeSelectAllOption: true,
        maxHeight: 200,
    });

    $("ul.tabbed_menu.nav-tabs a").click(function (e) {
        e.preventDefault();
        $('ul.tabbed_menu.nav-tabs a.active-li').removeClass('active-li');
        $(this).addClass('active-li');
    });

    $("ul.nav-tabs a").click(function (e) {
        e.preventDefault();
        $("#calculation-result, #plot-graph, #emi-comparison").css("display", "none");
        $('.tab-content').show();
        $(this).tab('show');
    });

    $('.tab-content').hide();

    $('.multiselect-container input').change(function(){
        var count = $( "ul.multiselect-container.dropdown-menu li.active" ).length;
        if(count > 0) {
            $( "ul.multiselect-container.dropdown-menu li" ).closest( ".btn-group" ).addClass("checked");
        } else {
            $( "ul.multiselect-container.dropdown-menu li" ).closest( ".btn-group" ).removeClass("checked");
        }
    });

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