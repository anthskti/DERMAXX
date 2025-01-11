// Keeping the header static when scrolling, but making it transparent when scrolled. 

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header-assets');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Add an event listener to your button
document.getElementById("buildRoutineButton").addEventListener('click', function() {
  document.body.style.transition = "opacity 0.5s ease-out";
  document.body.style.opacity = 0; // Fade out the page

  setTimeout(function() {
      window.location.href = "routine.html"; // Redirect to next page
  }, 500); // Wait for fade to complete
});


// Smooth Scrolling
document.querySelectionAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Enhancing Dropdown Menu in Navigation Bar
document.addEventListener('click', function(e) {
  const dropdown = document.querySelector('.dropdown ul');
  if(!e.target.closest('.dropdown')) {
    dropdown.style.visibility = 'hidden';
  } else {
    dropdown.style.visibility = 'visible';
  }
});