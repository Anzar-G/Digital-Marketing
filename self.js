// Navigation toggle for mobile
function toggleNav() {
  var navMenu = document.getElementById('navMenu');
  var navToggle = document.querySelector('.nav-toggle');
  navMenu.classList.toggle('show');
  navToggle.classList.toggle('active');
}

// Close navigation
function closeNav() {
  var navMenu = document.getElementById('navMenu');
  var navToggle = document.querySelector('.nav-toggle');
  navMenu.classList.remove('show');
  navToggle.classList.remove('active');
}

// Smooth scroll hanya untuk anchor internal (#)
document.querySelectorAll('nav a').forEach(anchor => {
  const href = anchor.getAttribute('href');
  if (href && href.startsWith('#')) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      closeNav();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
  // Link ke halaman lain (index.html, mind.html, praktik.html) biarkan berfungsi normal
});

// Checklist functionality
function toggleCheck(item) {
  var checkbox = item.querySelector('input[type="checkbox"]');
  checkbox.checked = !checkbox.checked;
  if (checkbox.checked) {
    item.classList.add('completed');
  } else {
    item.classList.remove('completed');
  }
}

// Progress bar
window.addEventListener('scroll', function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  if (document.getElementById("progressBar")) {
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  
  // Back to top button
  var backToTop = document.getElementById("backToTop");
  if (backToTop && winScroll > 300) {
    backToTop.classList.add('show');
  } else if (backToTop) {
    backToTop.classList.remove('show');
  }
});

// Back to top functionality
if (document.getElementById("backToTop")) {
  document.getElementById("backToTop").addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Animation on scroll
var observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.6s ease-out';
  observer.observe(section);
});