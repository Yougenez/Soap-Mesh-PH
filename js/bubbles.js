for (let i = 0; i < 20; i++) {
  let bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.position = 'absolute';
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.bottom = '-100px';
  bubble.style.width = `${20 + Math.random() * 30}px`;
  bubble.style.height = bubble.style.width;
  bubble.style.background = 'rgba(255, 255, 255, 0.3)';
  bubble.style.borderRadius = '50%';
  bubble.style.animation = `float ${10 + Math.random() * 10}s ease-in infinite`;
  document.body.appendChild(bubble);
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes float {
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-1000px) scale(0.5); }
}`;
document.head.appendChild(style);
