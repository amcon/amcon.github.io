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
})
