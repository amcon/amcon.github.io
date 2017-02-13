console.log("I'm here");

$(function(){

  function go_to_pokemon(){
    window.location.href = "https://amcon.github.io/GA_Project_1/";
  }

  function go_to_songsterr(){
    window.location.href = "http://songsterr-tab-db.herokuapp.com/";
  }

  function go_to_chairShare(){
    window.location.href = "http://chairshare.herokuapp.com/";
  }

  function go_to_groupit(){
    window.location.href = "http://groupit-react.herokuapp.com";
  }

  function go_to_resume(){
    window.location.href = "https://docs.google.com/document/d/1LpTiBCLK383Y_5p1KJXEKBAvt10UfUC6e6PG5cZJo_o/edit?usp=sharing";
  }

  function go_to_theatre_resume(){
    window.location.href = "https://drive.google.com/file/d/0BxXL_tKJrq97UGtDNEdIMmkwbEk/view?usp=sharing";
  }

  function go_to_linkedin(){
    window.location.href = "https://www.linkedin.com/in/aacon";
  }

  function go_to_facebook(){
    window.location.href = "https://www.facebook.com/aaron.conklin.3";
  }

  function go_to_github(){
    window.location.href = "https://github.com/amcon?tab=repositories";
  }

  function go_to_insta(){
    window.location.href = "https://www.instagram.com/con_aaron/";
  }

  function email_me(){
    $myform = $('#input-box');
    $myform.prop ('action','mailto:conklin.aaron@gmail.com');
    $myform.submit();
  }

  let mq = window.matchMedia( "(min-width: 736px)" );

  function scrolling(){
    $(window).scroll(function(){
      let scrollPos = document.querySelector("body").scrollTop;
      console.log(scrollPos);
      if ($(".profile")) {
        if (scrollPos <= 678) {
          $("#scroll-first").css('background-color', 'black');
          $("#scroll-one").css('background-color', 'transparent');
          $("#scroll-two").css('background-color', 'transparent');
          $("#scroll-three").css('background-color', 'transparent');
          $("#scroll-four").css('background-color', 'transparent');
          $(".p").css('color', 'white');
          $("#back-to-top").css({
            height: '0px',
            width: '0px'
          });
        } else if (scrollPos > 678 && scrollPos <= 1380) {
          // console.log("i fire")
          $("#scroll-one").css('background-color', 'black');
          $("#scroll-first").css('background-color', 'transparent');
          $("#scroll-two").css('background-color', 'transparent');
          $("#scroll-three").css('background-color', 'transparent');
          $("#scroll-four").css('background-color', 'transparent');
          $(".p").css('color', 'white');
          $("#back-to-top").css({
            height: '0px',
            width: '0px'
          });
        } else if (scrollPos > 1380 && scrollPos <= 2610) {
          // console.log("i fire");
          $("#scroll-two").css('background-color', 'black');
          $(".p").css('color', 'black');
          $("#scroll-first").css('background-color', 'transparent');
          $("#scroll-one").css('background-color', 'transparent');
          $("#scroll-three").css('background-color', 'transparent');
          $("#scroll-four").css('background-color', 'transparent');
          if (mq.matches) {
            $("#back-to-top").css({
              height: '60px',
              width: '60px'
            });
          } else {
            $("#back-to-top").css({
              height: '60px',
              width: '60px'
            })
          }
        } else if (scrollPos > 2610 && scrollPos <= 3300) {
          $("#scroll-three").css('background-color', 'black');
          $("#scroll-first").css('background-color', 'transparent');
          $("#scroll-one").css('background-color', 'transparent');
          $("#scroll-two").css('background-color', 'transparent');
          $("#scroll-four").css('background-color', 'transparent');
          $(".p").css('color', 'black');
          if (mq.matches) {
            $("#back-to-top").css({
              height: '60px',
              width: '60px'
            });
          } else {
            $("#back-to-top").css({
              height: '60px',
              width: '60px'
            })
          }
        } else {
          $("#scroll-four").css('background-color', 'black');
          $("#scroll-first").css('background-color', 'transparent');
          $("#scroll-one").css('background-color', 'transparent');
          $("#scroll-two").css('background-color', 'transparent');
          $("#scroll-three").css('background-color', 'transparent');
          $(".p").css('color', 'white');
        }
      }
    })
  }

  scrolling();

    let counter=0;

  $("#hamburger").click(function(){
    if (counter === 0) {
      $(".hamburger-menu").css('height', '800px');
      $(".ham-text").css("font-size", "80px");
      $("#hamburger").css("top", "820px");
      $(".header").css("top", "830px");
      $("#left-arrow").css('top', '1800px');
      $("#right-arrow").css('top', '1800px');
      counter = 1;
    } else if (counter === 1) {
      $(".hamburger-menu").css('height', '0px');
      $(".ham-text").css("font-size", "0px");
      $("#hamburger").css("top", "20px");
      $(".header").css("top", "30px");
      $("#left-arrow").css('top', '1000px');
      $("#right-arrow").css('top', '1000px');
      counter = 0;
    }
  });

  $(".ham-text").click(function(){
    $(".hamburger-menu").css({
      height: '0px',
      transition: '0'
    });
    $(".ham-text").css({
      'font-size': "0px",
      transition: '0'
    });
    $("#hamburger").css({
      top: "20px",
      transition: '0'
    });
    $(".header").css({
      top: "30px",
      transition: '0'
    });
    $("#left-arrow").css('top', '1000px');
    $("#right-arrow").css('top', '1000px');
    counter = 0;
  });


  $(".project-one").click(function() {
    $(this).toggleClass('clicked');
    $(".project-two").toggleClass('clicked');
    $(".project-three").toggleClass('clicked');
    $(".project-four").toggleClass('clicked');

    function modal() {
        $(".profile-more").css('z-index', '2');
        $(".profile-text").append('<p>This was my first project at General Assembly. <br><br> Pokemon Run is a web game built in HTML5, CSS/Flexbox, and Javascript/JQuery. <br><br> You run through the course, jumping and avoiding obstacles. Main obstacles included collision detection and completing the project in one week. <br><br>Click <a id="pokemon" href="https://amcon.github.io/GA_Project_1/">here</a> to view.</p>');
        $(".profile-text").css('opacity', '1');
        $(".profile-img").append('<div id="p1-big"></div>');
        $(".profile-img").css('opacity', '1');
    } setTimeout(modal, 1200);
  });

  $(".project-two").click(function() {
    $(".project-one").toggleClass('clicked');
    $(".project-three").toggleClass('clicked');
    $(".project-four").toggleClass('clicked');
    $(this).toggleClass('clicked');

    function modal() {
        $(".profile-more").css('z-index', '2');
        $(".profile-text").append('<p>Songsterr Tab Collection is my first full stack web application. <br><br> I used Node/Express.js for the backend with a MongoDB database and JQuery, HTML5, and CSS/Flexbox in the front end. <br><br> Songsterr and iTunes API. <br><br> A user signs up for the service, searches for a song, and gets results. The results can be saved to a collection of favorites for later use. Built in under a week and looking to add iFrame for YouTube videos and an edit option for full CRUD. <br><br>Click <a id="songsterr" href="http://songsterr-tab-db.herokuapp.com/">here</a> to view.</p>');
        $(".profile-text").css('opacity', '1');
        $(".profile-img").append('<div id="p2-big"></div>');
        $(".profile-img").css('opacity', '1');
    };
     setTimeout(modal, 1200);
  });

  $(".project-three").click(function(){
    $(this).toggleClass('clicked');
    $(".project-one").toggleClass('clicked');
    $(".project-two").toggleClass('clicked');
    $(".project-four").toggleClass('clicked');

    function modal() {
        $(".profile-more").css('z-index', '2');
        $(".profile-text").append('<p>ChairShare is a full stack web application for high-end used or antique furniture sale. <br><br> This was a group project with Joey Pinhas and Sabrina Mesa. <br><br> I was the front end developer and GitHub Manager. <br><br> The technologies used were: React, PSQL, Node/Express.js, CSS, Cloudinary, React Dropzone, and JSON Web Token user authentication.<br><br>Click <a id="chairshare" href="http://chairshare.herokuapp.com/">here</a> to view.</p>');
        $(".profile-text").css('opacity', '1');
        $(".profile-img").append('<div id="p3-big"></div>');
        $(".profile-img").css('opacity', '1');
    };
     setTimeout(modal, 1200);
  });

  $(".project-four").click(function(){
    $(this).toggleClass('clicked');
    $(".project-one").toggleClass('clicked');
    $(".project-two").toggleClass('clicked');
    $(".project-three").toggleClass('clicked');

    function modal() {
        $(".profile-more").css('z-index', '2');
        $(".profile-text").append('<p>GroupIt - Full Stack Social Media Web application.<br><br>This was my final project at General Assembly. Finished in one week. <br><br> A user joins GroupIt for private group content sharing. He can create a group with specific members, be a part of many groups, post content, delete content, and edit user information. <br><br> The application is built in React with a Node/Express and PSQL back end. <br><br>Click <a id="groupit" href="http://groupit-react.herokuapp.com/">here</a> to view.</p>');
        $(".profile-text").css('opacity', '1');
        $(".profile-img").append('<div id="p4-big"></div>');
        $(".profile-img").css('opacity', '1');
    };
     setTimeout(modal, 1200);
  })

  $(".reverse").click(function(){
    $(".profile-text").css('opacity', '0');
    $(".profile-img").css('opacity', '0');

    function modal() {
      $(".project-one").toggleClass('clicked');
      $(".project-two").toggleClass('clicked');
      $(".project-three").toggleClass('clicked');
      $(".project-four").toggleClass('clicked');
      $(".profile-more").css('z-index', '0');
      $(".profile-text").children('p').remove();
      $(".profile-img").children('div').remove();
    };
    setTimeout(modal, 1400);
  })

  $(".resume").click(function(){
    go_to_resume();
  })

  $(".theatre_resume").click(function(){
    go_to_theatre_resume();
  })

  $("#logo1").click(function(){
    go_to_linkedin();
  })

  $("#logo4").click(function(){
    go_to_facebook();
  })

  $("#logo2").click(function(){
    go_to_github();
  })

  $("#logo3").click(function(){
    go_to_insta();
  })

  $("#icon1").click(function(){
    go_to_linkedin();
  })

  $("#icon4").click(function(){
    go_to_facebook();
  })

  $("#icon2").click(function(){
    go_to_github();
  })

  $("#icon3").click(function(){
    go_to_insta();
  })

  $("#email").click(function(){
    email_me();
  })
})
