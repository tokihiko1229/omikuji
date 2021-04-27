'use strict;'
{
  const btn = document.getElementById('btn');
  
  btn.addEventListener('click', () => {
    const n = Math.random();
    if (n > 0.7) {
      btn.textContent = '好きだってさ！';
    } else {
      btn.textContent = '一生独り身確定';
    }
  });
}
