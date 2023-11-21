document.getElementById('post-form').addEventListener('submit', function() {

  // タイトルと本文を取得
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // コンソールに出力
  console.log(title);
  console.log(content);
});
