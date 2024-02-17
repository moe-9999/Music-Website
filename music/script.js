document.addEventListener('DOMContentLoaded', function() {
    // Get all last child divs inside .main-genres
    var lastChildDivs = document.querySelectorAll('.container main .main-container .main-genres div:last-child div');
  
    // Loop through each last child div and apply a random RGBA color
    lastChildDivs.forEach(function(div) {
      // Generate random RGBA values
      var randomR = Math.floor(Math.random() * 256);
      var randomG = Math.floor(Math.random() * 256);
      var randomB = Math.floor(Math.random() * 256);
  
      // Apply the random RGBA color to the background
      div.style.backgroundColor = `rgba(${randomR}, ${randomG}, ${randomB}, .8)`;
    });
  });

// MENU BUTTON //
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sideBar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sideBar.style.left = '0');
menuClose.addEventListener('click', () => sideBar.style.left = '-100%');
