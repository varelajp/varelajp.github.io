M.AutoInit();

const menuItems = document.querySelectorAll("nav ul li a, #dropdown1 li a");
const mobileMenuItems = document.querySelectorAll(".sidenav li a, #dropdown2 li a");
// const sections = document.querySelectorAll(".section");
const carousels = document.querySelectorAll('.carousel');
const instancesCarousel = M.Carousel.init(carousels, {
  indicators: true
});

const myFullpage = new fullpage('#fullpage', {
  menu: '#menu',
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
  lockAnchors: true,
  // sectionsColor: ['#ff5f45', '#0798ec', '#fc6c7c', '#fec401'],
  sectionsColor: ['#fff', '#f5f5f5', '#fff', '#f5f5f5'],
  continuousVertical: true,
  continuousHorizontal:true,
  // scrollBar: true,
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['About me', 'Skills', 'Education & Work', 'Interests'],
  slidesNavigation: true,
  controlArrowsHTML: ['<button class="my-arrow left" onclick="fullpage_api.moveSlideLeft();"><svg width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375"></polyline></svg></button>', '<button class="my-arrow right" onclick="fullpage_api.moveSlideRight();"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8"></polyline></svg></button>'],
  afterLoad: function(origin, destination, direction, trigger) {
    menuItems.forEach(element => element.classList.remove('active'));
    menuItems[destination.index].classList.add("active");
	},
  onSlideLeave: function(section, origin, destination, direction, trigger) {
    switch (destination.index) {
      case 0:
        showCarousel(0);
        break;
      case 1:
        showCarousel(1);
        break;
      case 2:
        showCarousel(4);
        break;
    }
  },
});

document.addEventListener('DOMContentLoaded', function() {
  initMenus();
  initCarousels();
});

function initMenus() {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", () => {
      if (i < 3) {
        fullpage_api.moveTo(i + 1);
      }
      if (i > 3) {
        fullpage_api.moveTo('fourthPage', i - 4);
      }
    });
    mobileMenuItems[i].addEventListener("click", () => {
      if (i < 3) {
        fullpage_api.moveTo(i + 1);
      }
      if (i > 3) {
        fullpage_api.moveTo('fourthPage', i - 4);
      }
    });
  }
}

function initCarousels() {
  for (const carousel of instancesCarousel) {
    setInterval(function(){ carousel.next(); }, 2500);  //Carousels autoplay
    if (carousel.el.id != 'Sports') {                   //Hide all carousels, except Sports
      carousel.el.classList.add('hide');
    }
  }
}

function showCarousel(index) {
  for (let i = 0; i < carousels.length; i++) {
    if (i === index) {
      carousels[i].classList.remove('hide');
      document.getElementById('link' + carousels[i].id).classList.add('z-depth-2');
    } else {
      carousels[i].classList.add('hide');
      document.getElementById('link' + carousels[i].id).classList.remove('z-depth-2');
    }
  }
}
