document.getElementById('todo-form').addEventListener('submit', function(event) {

  //データ送信を無効
  event.preventDefault();

  // id属性で要素を取得
  let text = document.getElementById('todo-input').value;


  // 新しいHTML要素を作成
  let span = document.createElement('span');
  span.textContent = text;

  let button = document.createElement('button');
  button.textContent = "削除";
  button.className = "delete-button";
  ran = Math.random();
  button.id = "ran";

  let input = document.createElement('input');
  input.type = "checkbox";

  let li = document.createElement('li');
  li.className = "todo-item";

  li.appendChild(span);
  li.appendChild(button);
  li.appendChild(input);


  // 指定した要素の中の末尾に挿入
  var tip = document.getElementById('todo-list');
  tip.appendChild(li);


  var text1 = document.getElementById('todo-input');
  text1.value = '';


});




document.getElementById('todo-list').addEventListener('click', function(event1) {
  //event1.preventDefault();

  const clickedElement = event1.target;

  if (clickedElement.classList.contains('delete-button')) {
    const listItem = clickedElement.parentElement;
    listItem.remove();
  }

});


document.getElementById('todo-list').addEventListener('click', function(event2) {
  //event2.preventDefault();

  const clickedElement = event2.target;

  if (clickedElement.type === 'checkbox') {
    const listItem = clickedElement.parentElement;
    const spanElement = listItem.querySelector('span');

    if (clickedElement.checked) {
      spanElement.style.textDecoration = "line-through";
    }
    else{
      spanElement.style.textDecoration = "";
    }
  }

});
