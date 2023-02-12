/** Globar vars ans and consts */
const sections         = document.getElementById('full-screen-scroller').getElementsByClassName('section');
const sections_subview = document.getElementById('full-screen-scroller').getElementsByClassName('section-subview');

// $(function () {
// $(document).ready(function () {
window.addEventListener("load", function() {
  $(".full-screen-scroller").fullScreenScroller();

  // Takes care of navbar heigth to center sections correcty at page loading.
  for (const section of sections) {
    section.style.marginTop = document.getElementById('navbar').offsetHeight + 'px';
  }
  document.getElementById('navbar-space').style.height = document.getElementById('navbar').offsetHeight + 'px';
  for (const section_subview of sections_subview) {
    const subview_height = parseFloat(window.getComputedStyle(section_subview, null).height) - document.getElementById('navbar').offsetHeight;
    section_subview.style.height = subview_height + 'px';
  }

  // Carousels interval in milliseconds (2 seconds)
  const carousels = document.querySelectorAll(".carousel");
  for (const carousel of carousels) {
    carousel.interval = 2000;
  }
});

window.addEventListener('resize', function(event) {
  // Takes care of navbar heigth to center sections correcty at page resizing.
  for (const section of sections) {
    section.style.marginTop = document.getElementById('navbar').offsetHeight + 'px';
  }
  document.getElementById('navbar-space').style.height = document.getElementById('navbar').offsetHeight + 'px';
  for (const section_subview of sections_subview) {
    const subview_height = parseFloat(window.getComputedStyle(section_subview, null).height) - document.getElementById('navbar').offsetHeight;
    section_subview.style.height = subview_height + 'px';
  }
});

$(document).on('click', '.nav-item a', function () {
  // Changes navbar highlighted item at navbar clicking.
  $(this).parent().addClass('active').siblings().removeClass('active');
});

// someVar = document.querySelectorAll('li.nav-item');
// console.log(typeof(someVar));
// document.querySelectorAll('li.nav-item').forEach((nav-item) =>  {
//   nav-item.addEventListener('click', event => {
//     console.log(nav-item.classname());
//   })
// })


document.addEventListener('scroll', function() {
  // Changes navbar highlighted item at page scrolling.
  const url = new URL(window.location.href);
  if ("" !== url.hash) {
    $(`#link-${url.hash.substring(1)}`).parent().addClass('active').siblings().removeClass('active');
    if ($(`#link-${url.hash.substring(1)}`).hasClass('dropdown-item')) {
      $(`#link-${url.hash.substring(1)}`).parent().parent().addClass('active').siblings().removeClass('active');
    }
  }
}, true);
