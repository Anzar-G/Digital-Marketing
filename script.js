// Navigation toggle for mobile
function toggleNav() {
  var navMenu = document.getElementById('navMenu');
  var navToggle = document.querySelector('.nav-toggle');
  navMenu.classList.toggle('show');
  navToggle.classList.toggle('active');
}

function closeNav() {
  var navMenu = document.getElementById('navMenu');
  var navToggle = document.querySelector('.nav-toggle');
  navMenu.classList.remove('show');
  navToggle.classList.remove('active');
}

// Progress Bar
window.addEventListener('scroll', function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
  var backToTop = document.getElementById("backToTop");
  if (winScroll > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

document.getElementById("backToTop").addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll HANYA untuk link yang dimulai dengan #
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    closeNav();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Checklist
function toggleCheck(item) {
  var checkbox = item.querySelector('input[type="checkbox"]');
  checkbox.checked = !checkbox.checked;
  if (checkbox.checked) {
    item.classList.add('completed');
  } else {
    item.classList.remove('completed');
  }
}

// Quiz
var quizScore = 0;

function checkAnswer(element, isCorrect, currentQ, nextQ) {
  var options = document.querySelectorAll('#' + currentQ + ' .quiz-option');
  options.forEach(opt => { opt.style.pointerEvents = 'none'; });
  if (isCorrect) {
    element.classList.add('correct');
    quizScore++;
    document.getElementById('score').textContent = quizScore;
  } else {
    element.classList.add('wrong');
    options.forEach(opt => {
      var correctAnswers = [
        'C. Karena biaya promosi bisa disesuaikan dan hasilnya bisa diukur secara real-time',
        'B. Bangun sistem dan value agar bisnis bisa berjalan otomatis',
        'C. Content Marketing',
        'B. Fokus pada 2–3 platform utama terlebih dahulu',
        'C. Bisa menjangkau audiens yang lebih luas dengan biaya yang lebih efisien'
      ];
      correctAnswers.forEach(answer => {
        if (opt.textContent.trim() === answer) {
          opt.classList.add('correct');
        }
      });
    });
  }
  setTimeout(function() {
    document.getElementById(currentQ).classList.remove('active');
    if (nextQ === 'result') {
      showResult();
    } else {
      document.getElementById(nextQ).classList.add('active');
    }
  }, 1500);
}

function showResult() {
  var resultText = document.getElementById('resultText');
  var resultDiv = document.getElementById('result');
  if (quizScore === 5) {
    resultText.innerHTML = '<strong style="color: #28a745;">Sempurna! 🌟</strong><br>Kamu memahami dasar-dasar digital marketing dengan baik!';
  } else if (quizScore >= 3) {
    resultText.innerHTML = '<strong style="color: #f77f00;">Bagus! 👍</strong><br>Kamu punya pemahaman yang solid. Terus belajar!';
  } else {
    resultText.innerHTML = '<strong style="color: #e63946;">Tetap Semangat! 💪</strong><br>Baca ulang materinya dan coba lagi!';
  }
  resultDiv.classList.add('active');
}

function resetQuiz() {
  quizScore = 0;
  document.getElementById('score').textContent = '0';
  var allQuestions = document.querySelectorAll('.quiz-question');
  allQuestions.forEach(q => {
    q.classList.remove('active');
    var options = q.querySelectorAll('.quiz-option');
    options.forEach(opt => {
      opt.classList.remove('correct', 'wrong');
      opt.style.pointerEvents = 'auto';
    });
  });
  document.getElementById('q1').classList.add('active');
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