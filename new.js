$(function(){

  function scrolling(){
    $(window).scroll(function(){
      let scrollPos = document.querySelector("body").scrollTop;
      console.log(scrollPos);
    })
  }

  scrolling();

  $('#resume').click(function() {
    window.open("https://docs.google.com/document/d/1LpTiBCLK383Y_5p1KJXEKBAvt10UfUC6e6PG5cZJo_o/edit?usp=sharing", "_blank");
  });

  $('#email').click(function() {
    window.open("mailto:conklin.aaron@gmail.com?subject=After visiting your website...", "_blank");
  });

  $('#linkedin').click(function() {
    window.open("https://www.linkedin.com/in/aacon", "_blank");
  });

  $('#github').click(function() {
    window.open("https://github.com/amcon?tab=repositories", "_blank");
  });

  $('#facebook').click(function() {
    window.open("https://www.facebook.com/aaron.conklin.3", "_blank");
  });

  $('#instagram').click(function() {
    window.open("https://www.instagram.com/con_aaron/", "_blank");
  });

})
