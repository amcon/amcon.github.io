$(function(){

  function scrolling(){
    $(window).scroll(function(){
      let scrollTop = document.querySelector("body").scrollTop;
      // console.log(scrollTop);
      if (scrollTop < 680) {
        $('.scroll-dot').removeClass('selected');
        $('#scroll-one').addClass('selected');
      } else if (scrollTop > 680 && scrollTop <= 1358) {
        $('.scroll-dot').removeClass('selected');
        $('#scroll-two').addClass('selected');
      } else if (scrollTop > 1358 && scrollTop <= 2340) {
        $('.scroll-dot').removeClass('selected').removeClass('color-change').removeClass('color-change-selected');
        $('#scroll-three').addClass('selected');
      } else if (scrollTop > 2340 && scrollTop <= 2730) {
        $('.scroll-dot').removeClass('selected');
        $('#scroll-four').addClass('color-change-selected');
        $('.scroll-dot').addClass('color-change');
      } else {
        $('.scroll-dot').removeClass('selected').removeClass('color-change').removeClass('color-change-selected');
        $('#scroll-five').addClass('selected');
      }
    })
  }
  scrolling();

  $('#hamburger').click(function() {
    $('.hamburger-menu').toggleClass('hamburger-active');
    $('.portfolio-more').toggleClass('hamburger-position');
    $('.portfolio-background').toggleClass('hamburger-position');
  });

  $('.ham-text').click(function() {
    $('.hamburger-menu').removeClass('hamburger-active');
    $('.portfolio-more').removeClass('hamburger-position');
    $('.portfolio-background').removeClass('hamburger-position');
  });

  $('#doggieDate').click(function() {
    $('.portfolio').toggleClass('clicked');
    function doggieModal(){
      $('.portfolio-more').toggleClass('selected');
      appendDoggieDate();
    }; setTimeout(doggieModal, 1400);
  });

  $('#paige').click(function() {
    $('.portfolio').toggleClass('clicked');
    function paigeModal(){
      $('.portfolio-more').toggleClass('selected');
      appendPaige();
    }; setTimeout(paigeModal, 1400);
  });

  $('#groupIt').click(function() {
    $('.portfolio').toggleClass('clicked');
    function groupItModal(){
      $('.portfolio-more').toggleClass('selected');
      appendGroupIt();
    }; setTimeout(groupItModal, 1400);
  });

  $('#chairShare').click(function() {
    $('.portfolio').toggleClass('clicked');
    function chairModal(){
      $('.portfolio-more').toggleClass('selected');
      appendChairShare();
    }; setTimeout(chairModal, 1400);
  });

  $('#songsterr').click(function() {
    $('.portfolio').toggleClass('clicked');
    function songsterrModal(){
      $('.portfolio-more').toggleClass('selected');
      appendSongsterr();
    }; setTimeout(songsterrModal, 1400);
  });

  $('#pokemonRun').click(function() {
    $('.portfolio').toggleClass('clicked');
    function pokemonModal(){
      $('.portfolio-more').toggleClass('selected');
      appendPokemon();
    }; setTimeout(pokemonModal, 1400);
  });

  $('#back').click(function() {
    $('.portfolio-more').toggleClass('selected');
    function comeBack() {
      removeElements();
      $('.portfolio').toggleClass('clicked');
    }; setTimeout(comeBack, 1400);
  });

  function removeElements(){
    $('.text-box').children('h1').remove();
    $('.text-box').children('br').remove();
    $('.text-box').children('p').remove();
    $('.picture-box').children('img').remove();
  };

  function appendDoggieDate(){
    $('.text-box').append('<h1>Something in the works...</h1>');
    $('.text-box').append('<p>DoggieDate is a full stack application for dog-owners who are looking to set up play dates for their dogs.<br><br>I am working with Matt Bedell on this project.<br><br>We’re using a Node/Express.js and PSQL backend and a React Redux front end. We’re utilizing React Router, JSON Web Token, Webpack, React Dropzone, Amazon Web Services, and more.<br><br>Check out our repo <a href="https://github.com/DoggieDate/DoggieDate" target="_blank">here.</a></p>')
    $('.picture-box').prepend('<img class="project-large" src="./public/iphone_doggieDate.jpg">');
  };

  function appendPaige(){
    $('.text-box').append('<h1>Something Simple...</h1>');
    $('.text-box').append('<p>This portfolio site is a freelance project I did for Paige Barr, an actress who was looking to update her site, and change her brand. <br><br>The app was built with simple front end code: HTML, CSS, and Javascript. It is a single-page application, and utilizes pushState to manipulate the URL and allow the user to hit the back button.<br><br>Click <a href="https://amcon.github.io/Paige_Barr_Personal" target="_blank">here</a> to view.</p>')
    $('.picture-box').prepend('<img class="project-large" src="./public/paige.jpg">');
  };

  function appendChairShare(){
    $('.text-box').append('<h1>Something to Buy, Trade, or Sell...</h1>');
    $('.text-box').append('<p>ChairShare is a full stack web application for high-end used or antique furniture sale. <br><br> This was a group project with Joey Pinhas and Sabrina Mesa. <br><br> I was the front end developer and GitHub Manager. <br><br> The technologies used were: React, PSQL, Node/Express.js, CSS, Cloudinary, React Dropzone, and JSON Web Token user authentication.<br><br>Click <a href="http://chairshare.herokuapp.com/" target="_blank">here</a> to view.</p>')
    $('.picture-box').prepend('<img class="project-large" src="./public/chairshare-mac.jpg">');
  };

  function appendGroupIt(){
    $('.text-box').append('<h1>Something to Share...</h1>');
    $('.text-box').append('<p>GroupIt - Full Stack Social Media Web application.<br><br>This was my final project at General Assembly. Finished in one week. <br><br> A user joins GroupIt for private group content sharing. He can create a group with specific members, be a part of many groups, post content, delete content, and edit user information. <br><br> The application is built in React with a Node/Express and PSQL back end. <br><br>Click <a href="http://groupit-react.herokuapp.com/" target="_blank">here</a> to view.</p>')
    $('.picture-box').prepend('<img class="project-large" src="./public/groupit-mac.jpg">');
  };

  function appendSongsterr(){
    $('.text-box').append('<h1>A Collection...</h1>');
    $('.text-box').append('<p>Songsterr Tab Collection is my first full stack web application. <br><br> I used Node/Express.js for the backend with a MongoDB database and JQuery, HTML5, and CSS/Flexbox in the front end. <br><br> Songsterr and iTunes API. <br><br> A user signs up for the service, searches for a song, and gets results. The results can be saved to a collection of favorites for later use. Built in under a week and looking to add iFrame for YouTube videos and an edit option for full CRUD. <br><br>Click <a href="http://songsterr-tab-db.herokuapp.com/" target="_blank">here</a> to view.</p>')
    $('.picture-box').prepend('<img class="project-large" src="./public/songsterr-mac.jpg">');
  };

  function appendPokemon(){
    $('.text-box').append('<h1>A Game...</h1>');
    $('.text-box').append('<p>This was my first project at General Assembly. <br><br> Pokemon Run is a web game built in HTML5, CSS/Flexbox, and Javascript/JQuery. <br><br> You run through the course, jumping and avoiding obstacles. Main obstacles included collision detection and completing the project in one week. <br><br>Click <a id="pokemon" href="https://amcon.github.io/GA_Project_1/" target="_blank">here</a> to view.</p>')
    $('.picture-box').prepend('<img class="project-large" src="./public/pokemon-mac.jpg">');
  };

  $('#scroll-one').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  $('#scroll-two').click(function() {
    $("html, body").animate({ scrollTop: 680 }, "slow");
  });

  $('#scroll-three').click(function() {
    $("html, body").animate({ scrollTop: 1360 }, "slow");
  });

  $('#scroll-four').click(function() {
    $("html, body").animate({ scrollTop: 2535 }, "slow");
  });

  $('#scroll-five').click(function() {
    $("html, body").animate({ scrollTop: 3200 }, "slow");
  });

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
