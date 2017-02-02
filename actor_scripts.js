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

  function right_pic(){
    $("#h1").css('margin-left', '-200%');
  }

  function left_pic(){
    $("#h1").css('margin-left', '0%');
  }

  function scrolling(){
    $(window).scroll(function(){
      let scrollPos = document.querySelector("body").scrollTop;
      if ($(".media")) {
        console.log(scrollPos);
        if (scrollPos <= 1097) {
          $("#scroll-one").css('background-color', 'black');
          $("#scroll-two").css('background-color', 'transparent');
          $("#scroll-three").css('background-color', 'transparent');
          $("#scroll-four").css('background-color', 'transparent');
          $("#scroll-five").css('background-color', 'transparent');
          $(".p").css('color', 'black');
          $("#back-to-top").css({
            height: '0px',
            width: '0px'
          });
        } else if (scrollPos > 1097 && scrollPos <= 1439) {
          $("#scroll-two").css('background-color', 'black');
          $("#scroll-one").css('background-color', 'transparent');
          $("#scroll-three").css('background-color', 'transparent');
          $("#scroll-four").css('background-color', 'transparent');
          $("#scroll-five").css('background-color', 'transparent');
          $(".p").css('color', 'black');
          $("#back-to-top").css({
            height: '0px',
            width: '0px'
          });
        } else if (scrollPos > 1439 && scrollPos <= 2339) {
          // console.log("i fire");
          $("#scroll-three").css('background-color', 'black');
          $("#scroll-one").css('background-color', 'transparent');
          $("#scroll-two").css('background-color', 'transparent');
          $("#scroll-four").css('background-color', 'transparent');
          $("#scroll-five").css('background-color', 'transparent');
          $(".p").css('color', 'white');
          $("#back-to-top").css({
            height: '50px',
            width: '50px'
          });
        } else if (scrollPos > 2339 && scrollPos <= 3680) {
          $("#scroll-four").css('background-color', 'black');
          $("#scroll-one").css('background-color', 'transparent');
          $("#scroll-two").css('background-color', 'transparent');
          $("#scroll-three").css('background-color', 'transparent');
          $("#scroll-five").css('background-color', 'transparent');
          $(".p").css('color', 'black');
        } else {
          $("#scroll-five").css('background-color', 'black');
          $("#scroll-one").css('background-color', 'transparent');
          $("#scroll-two").css('background-color', 'transparent');
          $("#scroll-three").css('background-color', 'transparent');
          $("#scroll-four").css('background-color', 'transparent');
          $(".p").css('color', 'black');
        }
      }
    })
  }

  scrolling();

  $("#right-arrow").click(function() {
    right_pic();
  })

  $("#left-arrow").click(function() {
    left_pic();
  })

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

  let counter=0;

  $("#hamburger").click(function(){
    if (counter === 0) {
      $(".hamburger-menu").css('height', '800px');
      $(".ham-text").css("font-size", "80px");
      $("#hamburger").css("top", "812px");
      $(".header").css("top", "812px");
      $("#left-arrow").css('top', '1800px');
      $("#right-arrow").css('top', '1800px');
      counter = 1;
    } else if (counter === 1) {
      $(".hamburger-menu").css('height', '0px');
      $(".ham-text").css("font-size", "0px");
      $("#hamburger").css("top", "12px");
      $(".header").css("top", "12px");
      $("#left-arrow").css('top', '1000px');
      $("#right-arrow").css('top', '1000px');
      counter = 0;
    }
  })

  $(".ham-text").click(function(){
    $(".hamburger-menu").css('height', '0px');
    $(".ham-text").css("font-size", "0px");
    $("#hamburger").css("top", "12px");
    $(".header").css("top", "12px");
    $("#left-arrow").css('top', '1000px');
    $("#right-arrow").css('top', '1000px');
  })

  $("#submit").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    // var contact = $("#contact").val();
    $("#returnmessage").empty(); // To empty previous error/success message.
    // Checking for blank fields.
      if (name == '' || email == '' || message == '') {
      alert("Please Fill Required Fields");
      } else {
      // Returns successful data submission message when the entered information is stored in database.
      $.post("contact_form.php", {
      name1: name,
      email1: email,
      message1: message,
      // contact1: contact
      }, function(data) {
      $("#returnmessage").append(data); // Append returned message to message paragraph.
      if (data == "Your message has been received, We will contact you soon.") {
      $("#input-box")[0].reset(); // To reset form fields on success.
      }
      });
      }
    });

  })
