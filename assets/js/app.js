//Scroll Function

$(document).ready(function() {

  $('.float-bar li').click(function(event) {
    /* declaring the variables to target an attribute of a target,
    in this case the 'href'of the 'a' tags */
    var $this = $(this);
    var target = $this.find('a').attr('href');
    console.log(target);
    // Prevent Default Behaviour of anchor tag
    event.preventDefault();
    //scroll function 
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
});