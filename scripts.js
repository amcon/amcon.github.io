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

  function go_to_resume(){
    window.location.href = "https://docs.google.com/document/d/11CP65LGIsMTWFA8F3Y_tHfGzwvZGNUJRFOR3RaNVD_g/edit?usp=sharing";
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

  function email_me(){
    $myform = $('.input-box');
    $myform.prop ('action','mailto:conklin.aaron@gmail.com');
    $myform.submit();
  }

  $(".project-one").click(function() {
  go_to_pokemon();
  });

  $(".project-two").click(function() {
    go_to_songsterr();
  });

  $(".project-three").click(function(){
    go_to_chairShare();
  });

  $(".resume").click(function(){
    go_to_resume();
  })

  $(".theatre_resume").click(function(){
    go_to_theatre_resume();
  })

  $(".linkedin").click(function(){
    go_to_linkedin();
  })

  $(".facebook").click(function(){
    go_to_facebook();
  })

  $(".github").click(function(){
    go_to_github();
  })

  $("#submit").click(function(){
    email_me();
  })
})
