document.getElementById('post-form').addEventListener('submit', function() {

  // タイトルと本文を取得
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // 要素を挿入
  var div = document.getElementById('posts');
  div.innerHTML = "<h2>" + title + "</h2>" + "\n" + "<p>" + content + "</p>";

});
