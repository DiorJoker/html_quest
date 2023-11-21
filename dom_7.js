
document.getElementById('post-form').addEventListener('submit', function(event) {
  event.preventDefault(); // フォームのデフォルトの送信動作を無効化

  // タイトルと本文を取得
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // 新しい要素を作成
  var newPost = document.createElement('div'); // 新しい div 要素を作成
  var newTitle = document.createElement('h2'); // 新しい h2 要素を作成
  var newContent = document.createElement('p'); // 新しい p 要素を作成
  var newLineBreak = document.createElement('br'); // 改行を表す br 要素を作成

  // テキストを設定
  newTitle.textContent = title;
  newContent.textContent = content;

  // 新しい要素を組み立てる
  newPost.appendChild(newTitle); // h2 要素を新しい div 要素に追加
  newPost.appendChild(newContent); // p 要素を新しい div 要素に追加
  newPost.appendChild(newLineBreak); // 改行を新しい div 要素に追加

  var posts = document.getElementById('posts');
  var postElements = posts.getElementsByTagName('div'); // #posts 内の div 要素を取得

  // 投稿数が3を超えた場合、一番古い投稿を削除
  if (postElements.length >= 3) {
    posts.removeChild(postElements[0]); // 一番古い投稿を削除
  }

  // posts ディビジョンに新しい要素を追加
  posts.appendChild(newPost);
});



/*
document.getElementById('post-form').addEventListener('submit', function(event) {
  event.preventDefault(); // フォームのデフォルトの送信動作を無効化

  // タイトルと本文を取得
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // 新しい要素を作成
  var newPost = document.createElement('div'); // 新しい div 要素を作成
  var newTitle = document.createElement('h2'); // 新しい h2 要素を作成
  var newContent = document.createElement('p'); // 新しい p 要素を作成

  // テキストを設定
  newTitle.textContent = title;
  newContent.textContent = content;

  // 新しい要素を組み立てる
  newPost.appendChild(newTitle); // h2 要素を新しい div 要素に追加
  newPost.appendChild(newContent); // p 要素を新しい div 要素に追加

  var posts = document.getElementById('posts');
  var postElements = posts.getElementsByTagName('div'); // #posts 内の div 要素を取得

  // 投稿数が3を超えた場合、一番古い投稿を削除
  if (postElements.length >= 3) {
    posts.removeChild(postElements[0]); // 一番古い投稿を削除
  }

  // posts ディビジョンに新しい要素を追加
  posts.appendChild(newPost);
});




document.getElementById('post-form').addEventListener('submit', function(event) {
  event.preventDefault(); // フォームのデフォルトの送信動作を無効化

  // タイトルと本文を取得
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // 新しい要素を作成
  var newPost = document.createElement('div'); // 新しい div 要素を作成
  var newTitle = document.createElement('h2'); // 新しい h2 要素を作成
  var newContent = document.createElement('p'); // 新しい p 要素を作成

  // テキストを設定
  newTitle.textContent = title;
  newContent.textContent = content;

  // 新しい要素を組み立てる
  newPost.appendChild(newTitle); // h2 要素を新しい div 要素に追加
  newPost.appendChild(newContent); // p 要素を新しい div 要素に追加

  // posts ディビジョンに新しい要素を追加
  document.getElementById('posts').appendChild(newPost);
});

*/
