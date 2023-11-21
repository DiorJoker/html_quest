# ライブラリを使用できる


## 1. パッケージ管理ツール

パッケージ管理ツールとは、外部ライブラリを管理するためのツールです。他のプログラムから利用することを目的としたクラスや関数などのプログラムをまとめて、機能するようにしたものをライブラリ、もしくはパッケージと呼びます。

JavaScript では npm がパッケージ管理ツールとして使用されています。

npm を用いて、任意のパッケージを以下のことを実行してください。

npm がなんのためにあるのか、プログラミング初心者にわかるように説明してください

```
①パッケージの管理をしてくれる

そのプロジェクトで、必要なライブラリやパッケージを容易にインストールすることを可能にする

②依存関係を管理してくれている

package.jsonに記載されている情報をもとに、
必要なバージョンを正確に、一括でインストールすることを可能にする

```

任意のディレクトリで npm init を実行し、package.json を作成してください

```
npm init
```

の実行結果、

```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
```


任意のパッケージをインストールしてください

```
npm install express
```


package.json 及び package-lock.json に追記されていることを確認してください

```
npm list
```
