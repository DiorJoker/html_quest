//関数定義
function printBooks(books) {
  obj = { 書籍名:books[0],著者名:books[1] }//これが、オブジェクト
  console.log("『" + obj.書籍名 + "』" + obj.著者名 );
}

//関数呼び出し
books = [ 'JavaScript入門',"山田太郎" ] // オブジェクトの配列を定義する
printBooks(books)
