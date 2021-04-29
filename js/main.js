'use strict;'
{
  const input = document.querySelector('input');
  const btn = document.getElementById('btn');

  const list = [];

  document.getElementById('add').addEventListener('click', () => {
    if(!input.value){
      console.log('test');
    } else {
      // const li = document.createElement('li');
      // li.textContent = input.value;
      // document.querySelector('ul').appendChild(li);
      list.push(' ' + input.value + ' さん');
      document.getElementById('member').textContent = '参加者一覧：' + list;
      input.value = '';
      input.focus();
    }
  });

  btn.addEventListener('click', () => {
    if(!list.length || list.length === 1){
      btn.textContent = '参加者は2人以上です！';
      document.getElementById('member').style.color = 'skyblue';
    } else {
      const n = Math.floor(Math.random() * list.length);
      btn.textContent = list[n] + 'の奢り！';
      document.getElementById('member').style.color = 'black';
    }
  });
}