// Navigation toggle for mobile
function toggleNav() {
  var navMenu = document.getElementById('navMenu');
  var navToggle = document.querySelector('.nav-toggle');
  navMenu.classList.toggle('show');
  navToggle.classList.toggle('active');
}

// Smooth scroll hanya untuk anchor internal (#)
document.querySelectorAll('nav a').forEach(anchor => {
  const href = anchor.getAttribute('href');
  if (href && href.startsWith('#')) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
  // Link ke halaman lain (index.html) biarkan berfungsi normal
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