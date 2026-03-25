// 커서
var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e) {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});
document.querySelectorAll('a, .project-card, .proj-tab').forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    cursor.style.width   = '20px';
    cursor.style.height  = '20px';
    cursor.style.opacity = '.4';
  });
  el.addEventListener('mouseleave', function() {
    cursor.style.width   = '8px';
    cursor.style.height  = '8px';
    cursor.style.opacity = '1';
  });
});

// 프로젝트 탭 필터
function filterProj(type, btn) {
  document.querySelectorAll('.proj-tab').forEach(function(t) {
    t.classList.remove('active');
  });
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(function(card) {
    if (type === 'all' || card.dataset.type === type) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}

// 스크롤 페이드업
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, i) {
    if (entry.isIntersecting) {
      setTimeout(function() {
        entry.target.classList.add('visible');
      }, i * 80);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(function(el) {
  obs.observe(el);
});