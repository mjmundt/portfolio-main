//For Navigation Slide to Section
$(".nav__box__link").on("click", function(e){
    if (this.hash !== ""){
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
            window.location.hash = hash;
          });
    }
});

//Sliding Sections for Mobile
$(".btn-primary.mobile").on("click", function () {
    var boxOneM = $("#box__one__mobile");
    var boxTwoM = $("#box__two__mobile");
    var slideTime = 2000;
    var hideTime = 1000;
    //Shows box one and slides image if box one is hidden
    if (boxOneM.width() === 0) {
        //Hides Box Two
        boxTwoM.animate({
            "opacity": 0,
        }, hideTime, function () {
            //Decreases box two width to slide image
            boxTwoM.animate({
                "max-width": 0 + "%",
                "padding": 0 + "px"
            }, 0, function () {
                //gives box one width back
                boxOneM.animate({
                    "max-width": 100 + "%",
                    "padding": 50 + "px"
                }, slideTime, function () {
                    //Shows box one
                    boxOneM.animate({
                        "opacity": 1
                    }, hideTime);
                });
            });
        });
    }
    //Hides box one and slides image if box one is displayed
    else {
        //hides box one
        boxOneM.animate({
            "opacity": 0
        }, hideTime, function () {
            //reduces box one width to slide image
            boxOneM.animate({
                "max-width": 0 + "%",
                "padding": 0 + "px"
            }, slideTime, function () {
                //shows box two
                boxTwoM.animate({
                    "max-width": 100 + "%",
                    "padding": 50 + "px"
                }, 0, function () {
                   boxTwoM.animate({
                        "opacity": 1,
                    }, hideTime);
                });
            });
        });
    }
});

// For Sliding Image Div
$(".btn-primary").on("click", function () {
    var boxOne = $("#box__one");
    var boxTwo = $("#box__two");
    var slideTime = 2000;
    var hideTime = 1000;
    //Shows box one and slides image if box one is hidden
    if (boxOne.width() === 0) {
        //Hides Box Two
        boxTwo.animate({
            "opacity": 0,
        }, hideTime, function () {
            //Decreases box two width to slide image
            boxTwo.animate({
                "max-width": 0 + "%",
                "padding": 0 + "px"
            }, 0, function () {
                //gives box one width back
                boxOne.animate({
                    "max-width": 50 + "%",
                    "padding": 100 + "px"
                }, slideTime, function () {
                    //Shows box one
                    boxOne.animate({
                        "opacity": 1
                    }, hideTime);
                });
            });
        });
    }
    //Hides box one and slides image if box one is displayed
    else {
        //hides box one
        boxOne.animate({
            "opacity": 0
        }, hideTime, function () {
            //reduces box one width to slide image
            boxOne.animate({
                "max-width": 0 + "%",
                "padding": 0 + "px"
            }, slideTime, function () {
                //shows box two
                boxTwo.animate({
                    "max-width": 50 + "%",
                    "padding": 100 + "px"
                }, 0, function () {
                   boxTwo.animate({
                        "opacity": 1,
                    }, hideTime);
                });
            });
        });
    }
});

//Top Nav Toggle
$("#nav__toggle").click(dropNav);
function dropNav() {
    $("#navigation").slideToggle(1000);
}
//Make the image big
$("#big__img__toggle").click(makeBig);
function makeBig(){
    $("#big__img")
        .removeClass("col-6")
        .addClass("col-12");
    $("#no__img").fadeOut(1000);
}
