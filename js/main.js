'use strict;'
{
  const btn = document.getElementById('btn');
  
  btn.addEventListener('click', () => {
    const n = Math.random();
    if (n >= 0.5) {
      btn.textContent = 'バンちゃん';
    } else {
      btn.textContent = 'ツル';
    }
  });
}
