document.getElementById('post-form').addEventListener('submit', function() {

  // タイトルと本文を取得
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // 要素を挿入
  var text1 = document.getElementById('title');
  var text2 = document.getElementById("content");
  text1.value = '';
  text2.value = '';

});
