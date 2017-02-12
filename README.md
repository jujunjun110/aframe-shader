## このプロジェクトについて

A-Frameのわりと本格的なプロダクトを作るための雛形です

以下の手順で展開してください。

1. `git clone git@github.com:jujunjun110/aframe-application-boilerplate.git && cd aframe-application-boilerplate && rm -rf .git `
2. プロジェクトのリモートリポジトリを正しく設定
3. npm install 
4. npm run unboil

--trim--

# project-name

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
- dist以下 ... 本番用。dev以下のものをより高速に実行できるようにビルドしなおす予定。
 - TO BE DONE !

`npm run build` することで `src/require.js` が `dev/build.js` に、 `src/app.js` が `dev/app.js` にそれぞれビルドされます。

本番環境へは `dev/` 以下のみアップロードすることで動くようになっています。

アプリケーションでnpmモジュールを利用したいときは `npm install -S {packagename}`としてインストールしたのち、
`src/require.js` に `require("{packagename}");` の一行を追加しましょう
