// Smooth Scrolling für Navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 100,
      behavior: 'smooth'
    });
  });
});

// Einfache Animation für Timeline-Elemente
window.addEventListener('scroll', function() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach(item => {
    const itemPosition = item.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (itemPosition < screenPosition) {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }
  });
});

// Initialisierung
document.addEventListener('DOMContentLoaded', function() {
  // Timeline-Elemente initial verstecken
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
});
