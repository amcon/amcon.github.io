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
    window.location.href = "https://docs.google.com/document/d/1IBIQAYmump4WZfV_vMxC9T3Js50CdyfDgEaA9hQq2u0/edit?usp=sharing";
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

  function scrolling(){
    $(window).scroll(function(){
      let scrollPos = document.querySelector("body").scrollTop;
      console.log(scrollPos);
      if ($(".profile")) {
        if (scrollPos <= 543) {
          $("#scroll-one").css('background-color', 'black');
          $("#scroll-two").css('background-color', 'transparent');
          $("#scroll-three").css('background-color', 'transparent');
          $("#scroll-four").css('background-color', 'transparent');
          $(".p").css('color', 'white');
        } else if (scrollPos > 543 && scrollPos <= 1595) {
          // console.log("i fire")
          $("#scroll-two").css('background-color', 'black');
          $("#scroll-one").css('background-color', 'transparent');
          $("#scroll-three").css('background-color', 'transparent');
          $("#scroll-four").css('background-color', 'transparent');
          $(".p").css('color', 'black');
        } else if (scrollPos > 1595 && scrollPos <= 2400) {
          // console.log("i fire");
          $("#scroll-three").css('background-color', 'black');
          $(".p").css('color', 'black');
          $("#scroll-one").css('background-color', 'transparent');
          $("#scroll-two").css('background-color', 'transparent');
          $("#scroll-four").css('background-color', 'transparent');
        } else {
          $("#scroll-four").css('background-color', 'black');
          $("#scroll-one").css('background-color', 'transparent');
          $("#scroll-two").css('background-color', 'transparent');
          $("#scroll-three").css('background-color', 'transparent');
          $(".p").css('color', 'black');
        }
      }
    })
  }

  scrolling();

  $(".project-one").click(function() {
  go_to_pokemon();
  });

  $(".project-two").click(function() {
    go_to_songsterr();
  });

  $(".project-three").click(function(){
    go_to_chairShare();
  });

  $(".project-four").click(function(){
    go_to_groupit();
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

  $("#submit").click(function(){
    email_me();
  })
})
