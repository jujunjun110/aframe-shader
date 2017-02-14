
# aframe-shader

aframeでシェーダーを自作するデモです。

**[Demo](https://jujunjun110.github.io/aframe-shader/dev/)**

## プロジェクトのインストール

1. git clone 
2. npm install 

## プロジェクトのビルド

1. npm run build ... アプリケーションをビルドします。
2. npm run dev ... nodeサーバーを開きアプリケーションを実行します。`src/app.js` への変更はリアルタイムにブラウザ側に反映されます。

## ファイル構成

- src以下 ... 自分でjavascriptを編集するところ。
 - src/require.js ... 必要な外部モジュールを書くところ。dev/build.jsにビルドされます。
 - src/app.js ... メイン処理を書くところ。dev/app.jsにビルドされます。ES6でOK。
 - src/component.js ... コンポーネントを書くところ。書いたら名前を変えてapp.js内でrequireする。ES6でOK。
- dev以下 ... アプリケーションの実行に本当に必要なファイルだけがあるところ。（開発用）
 - dev/index.html ... メインのHTMLファイル。ここは直接編集します。
 - dev/app.js ... ブラウザで実行可能な形にビルドされた自作スクリプト	。自分では編集しません。
 - dev/build.js ... ブラウザで実行可能な形にビルドされた外部スクリプト。自分では編集しません。
`npm run build` することで `src/require.js` が `dev/build.js` に、 `src/app.js` が `dev/app.js` にそれぞれビルドされます。
