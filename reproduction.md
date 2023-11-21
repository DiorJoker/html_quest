# 模写

既存の Web サイトの特定ページの模写をしましょう。既存サイトの見た目をそっくり真似したページを1つ作成します。

既存サイトを真似て作ることで、HTML/CSS/JavaScript の実装力を高めることが狙いです。

なお、今回作成したコードは GitHub 含め、Web 上には決してアップしないでください。既存サイトを真似したものを Web 上にアップした場合、著作権侵害となる可能性がございます。「模写したものです」等の説明を記載しても問題になる可能性がございますので、公開・非公開を問わず Web 上にはアップせず、ローカルで動かすだけにしてください。

## ステップ1
模写する対象の Web サイト及び模写するページを1つ選定してください。

模写する対象の Web サイトは、オリジナルプロダクトのテーマが決まっている場合、同じ領域で参考にしたい類似サイトを一つ選定してください。参考にしたいサイトを模写することで、技術力に加えその領域のUI/UXに関する理解が上がり、オリジナルプロダクトのクオリティを高めることができます。オリジナルプロダクトのテーマが決まっていない場合、好きな Web サイトを選定してください。やっていて自分のモチベーションが上がるようなサイトだと良いです。

Web サイトを選定したら、模写したい1ページを選定してください。オリジナルプロダクトのテーマが決まっている場合、コア機能のページがオススメです。例えば YouTube のような動画共有サイトでしたら、動画の検索ページもしくは動画の閲覧ページです。一番参考にしたいページを選定してください。コア機能が閲覧できなかったり、オリジナルプロダクトのテーマが決まっていない場合は、トップページ(ランディングページ)を対象にしましょう。

なお、選定する際はデザインが高度で模写があまりに難しそうなもの、アニメーションが複雑すぎるものは避けましょう。デザインが一定シンプルなページの方が模写しやすいです。

```
横浜家系ラーメン　壱角屋のホームページの問い合わせページ
```

に決定

## ステップ2
選定した1ページの静的な見た目を HTML/CSS を使って模写してください。ここでは動きがある部分(アニメーション部分)は再現しなくてよいです。動く部分は再現しなくてよいので、動かない部分の見た目を再現します。

ポイントは、できる限り見た目をそっくりに再現することです。文言や画像も再現してください。画像はページ上の画像データをダウンロードして使用いただいて大丈夫です。

PC サイト、スマホサイトのどちらかを模写してください。レスポンシブ対応ができる方は最初から PC サイト、スマホサイトの両方に対応できる形で模写しましょう。

なお、React/Next.js/TypeScript を学習されている方はそれらのフレームワーク・言語を使用して静的な見た目部分を再現してください。

## ステップ3
JavaScript を使って、動きがある部分を最低一箇所以上再現してください。クリック等をすると動いて表示が変更される部分ですね。

動きがある部分がない場合は、ご自身で簡単な動く機能を追加してください。よくあるケースは、ヘッダーにアカウント名や設定アイコンがあって、クリックすると詳細がポップアップで表示されるポップアップメニューやハンバーガーメニューです。

React/Next.js/TypeScript を学習されている方はそれらのフレームワーク・言語を使用してください。

## ステップ4(advanced)
PC サイト、スマホサイトのどちらかだけを模写している場合、模写していない方のサイトも模写してください。その際、レスポンシブ対応で実装してください。模写対象がレスポンシブ対応でない場合も、可能であればレスポンシブ対応で実装してください。

もし PC サイトもしくはスマホサイトしか存在しない場合、本ステップは飛ばしてください。

## ステップ5(advanced)
動きがある部分で再現できていない箇所がある場合、残りの再現できていない箇所の動きを JavaScript を使って再現してください。