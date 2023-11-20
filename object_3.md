
#  メソッド

私の回答


`①`

`それ以外は間違っている：書き方が間違っている`



JavaScript ではオブジェクトのプロパティが関数である場合、それをメソッドと呼びます。メソッドの定義として正しいものを全て選択してください。なお、正しいかどうかは手元で実行して確認することができます。

①
```
const obj = {
  method: function() {
    console.log('method');
  },
}

obj.method();
```

②

```
const obj = {
  method: () => {
    console.log('method');
  },
}

obj.method();
```

③

```
const obj = {
  method() {
    console.log('method');
  },
}

obj.method();
```


④


```
const obj = {
  () => {
    console.log('method');
  },
}

obj.method();
```
