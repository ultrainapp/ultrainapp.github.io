// Nav dark mode on scroll
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('dark');
  } else {
    nav.classList.remove('dark');
  }
});

// Intersection Observer for scroll animations
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };

const animObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay * 100);
      animObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe feature cards with staggered delay
document.querySelectorAll('.feature-card').forEach((el, i) => {
  el.dataset.delay = i;
  animObserver.observe(el);
});

// Observe plan feature rows
document.querySelectorAll('.plan-feature-row').forEach((el, i) => {
  el.dataset.delay = i;
  animObserver.observe(el);
});

// Observe AI card
const aiCard = document.getElementById('aiCard');
if (aiCard) animObserver.observe(aiCard);

// Observe chart demo
const chartDemo = document.getElementById('chartDemo');
if (chartDemo) animObserver.observe(chartDemo);

// Observe privacy pillars
document.querySelectorAll('.privacy-pillar').forEach((el, i) => {
  el.dataset.delay = i;
  animObserver.observe(el);
});

// Observe testimonials
document.querySelectorAll('.testimonial-card').forEach((el, i) => {
  el.dataset.delay = i;
  animObserver.observe(el);
});

// Observe wizard steps
document.querySelectorAll('.wizard-step').forEach((el, i) => {
  el.dataset.delay = i;
  animObserver.observe(el);
});

// Observe wizard badge
const wizardBadge = document.getElementById('wizardBadge');
if (wizardBadge) animObserver.observe(wizardBadge);

// Rotating AI messages
const aiMessages = [
  '"Strong build week ahead. With 65km and 1,400m of elevation, focus on keeping effort aerobic on the climbs. Your rest week compliance has been excellent — trust the process."',
  '"Your nutrition data shows oat-based foods consistently score 4–5 stars. Consider making them your primary fuel for the long run this weekend."',
  '"Taper week — reduce distance by 40% but keep intensity. Your legs need freshness. You\'ve done the work. Trust your training."',
  '"Kit coverage looks solid. I notice you\'re missing a dedicated navigation device — critical for your 100mi target. Consider adding a GPS watch backup."',
];
let msgIndex = 0;
const msgEl = document.getElementById('aiMessage');
if (msgEl) {
  setInterval(() => {
    msgEl.style.opacity = '0';
    msgEl.style.transform = 'translateY(6px)';
    setTimeout(() => {
      msgIndex = (msgIndex + 1) % aiMessages.length;
      msgEl.textContent = aiMessages[msgIndex];
      msgEl.style.opacity = '1';
      msgEl.style.transform = 'translateY(0)';
    }, 400);
  }, 4500);
  msgEl.style.transition = 'opacity 0.4s, transform 0.4s';
}

// Count-up animation for stats
function animateCount(el) {
  if (el.dataset.text) return; // static text, skip
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.target.includes('+') ? '+' : '';
  let current = 0;
  const duration = 1200;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current) + suffix;
    if (current >= target) clearInterval(timer);
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(animateCount);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsBanner = document.querySelector('.stats-banner');
if (statsBanner) statsObserver.observe(statsBanner);
