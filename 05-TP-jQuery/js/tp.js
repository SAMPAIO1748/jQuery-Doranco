$(document).ready(function () {
  // Exercice 1

  $(".buttonExo1").click(function () {
    $(".exo1").css("background-color", "green");
  });

  // Exercice 2

  $(".exo2").click(function () {
    let widthImg = $(this).width();
    if (widthImg <= 250) {
      let widthImgFinal = widthImg + 20;
      $(this).width(widthImgFinal);
    }
  });

  // Exercice 3

  $("#exo3").blur(function () {
    let color = $(this).val();
    $("body").css("background-color", color);
  });

  // Exercice 4

  $(".exo4").click(function () {
    $(this).css({
      width: "200px",
      height: "200px",
    });
  });

  // Exercice 5

  setInterval(function () {
    if ($(".exo5").attr("src") == "img/1.jpg") {
      $(".exo5").attr("src", "img/2.jpg");
    } else if ($(".exo5").attr("src") == "img/2.jpg") {
      $(".exo5").attr("src", "img/3.jpg");
    } else if ($(".exo5").attr("src") == "img/3.jpg") {
      $(".exo5").attr("src", "img/4.jpg");
    } else if ($(".exo5").attr("src") == "img/4.jpg") {
      $(".exo5").attr("src", "img/5.jpg");
    } else if ($(".exo5").attr("src") == "img/5.jpg") {
      $(".exo5").attr("src", "img/1.jpg");
    }
  }, 5000);

  // setInterval permet de répéter en boucle une fonction avec un interval défini ici 5000 millisecondes.
});
