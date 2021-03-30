$(document).ready(function() {
    // ikonica za nav
$('.navbar-toggler').html("<i class='fas fa-bars fa-2x' style='color:var(--primary)'></i>");
 
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 50) {
        $('.sticky').addClass('stickyAdd');
    } else {
        $('.sticky').removeClass('stickyAdd');
    }
})

//$(window).on('scroll', function() {
//    var fix = $(window).scrollTop();
//    if(fix >= 250) {
//        $('.fixMenu').addClass('fixAdd');
//    } else {
//        $('.fixMenu').removeClass('fixAdd');
//    }
//})

    // portfolio filter

var filterizd = $('.filter-container').filterizr({
   animationDuration: .5, 
});
    
})



