
// HTML要素を取得して定数に代入
const text = document.getElementById('text');
const btn = document.getElementById('btn');

// ボタンがクリックされたときの処理
btn.addEventListener('click', () => {
  text.textContent = 'ボタンがクリックされました';
});