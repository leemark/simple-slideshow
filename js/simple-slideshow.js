$('document').ready(function(){
    var current = 0, // futo keep track of current slide
        $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
        numItems = $items.length; // total number of slides
    
    // this function is what cycles the slides, showing the next or previous slide and hiding all the others
    var showCurrent = function(){
        $items.removeClass('show'); // remove .show from whichever element currently has it
        $items.eq(current%numItems).addClass('show'); // uses remainder (aka modulo) operator to get the actual index of the element to show  
    };
    
    $items.eq(0).addClass('show'); // show the first slide when page is loaded (this can also be done in html if you prefer) 
    
    // add previous and next links to each figure. These exist inside each slide rather than just one for the whole slideshow to make the CSS positioning easier
    $items.each(function(){
        var navLinks = '<span class="prev">&laquo;</span>';
        navLinks += '<span class="next">&raquo;</span>';
        $(this).append(navLinks);    
    });
    
    // add click events to prev & next buttons 
    $('.next').on('click', function(){
        current++;
        showCurrent(); 
    });
    $('.prev').on('click', function(){
        current--;
        showCurrent(); 
    });
    
    // if touch events are supported then 
    // add swipe events using TouchSwipe
    // https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
    if('ontouchstart' in window){
      $(".diy-slideshow").swipe({
        swipeLeft:function() {
          current++;
          showCurrent(); 
        },
        swipeRight:function() {
          current--;
          showCurrent(); 
        }
      });
    }
});