// === resopnsive navbar ===
document.addEventListener("DOMContentLoaded", function () {
  const navIcon = document.querySelector(".nav-icon");
  const navItemGroup = document.querySelector(".nav-item-group");

  navIcon.addEventListener("click", function () {
    navItemGroup.classList.toggle("active"); // add active
  });
});

// === image slider galeri ===
var indexValue = 1;
showImg(indexValue);
function img_slide(e) {
  showImg((indexValue = e));
}
function btn_slide(e) {
  showImg((indexValue += e));
}
function showImg(e) {
  var i;
  const img = document.querySelectorAll(".img-galeri");
  const sliders = document.querySelectorAll(".content-img-nav span");
  if (e > img.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = img.length;
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.filter = "grayscale(100%)";
  }
  img[indexValue - 1].style.display = "block"; // display
  sliders[indexValue - 1].style.filter = "grayscale(0%)"; // hilangkan grayscale
}

// === berita filter ===
$(document).ready(function () {
  $(".berita-box").hide(); // hide semua berita-box
  $(".berita-box.artikel").show(); // show berita-box artikel
});
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "artikel") {
      $(".berita-box")
        .not("." + value)
        .hide("1000");
      $(".berita-box")
        .filter("." + value)
        .show("1000");
    } else {
      $(".berita-box")
        .not("." + value)
        .hide("1000");
      $(".berita-box")
        .filter("." + value)
        .show("1000");
    }
  });
  //active btn
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});
