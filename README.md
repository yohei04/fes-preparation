# fes preparation
![Screen Shot 2020-05-23 at 13 39 56](https://user-images.githubusercontent.com/54460011/82721775-76147d00-9cfb-11ea-851e-6ebde6b3adc4.png)


## URL
https://yohei04.github.io/fes-preparation


## アプリ概要
音楽フェスに出演するアーティストの楽曲予習ができるサービスです。


## 作成動機
自分がフェスに参加するときに知らないアーティストの曲を前もって聞きたいなと思ったのが作成のきっかけです。
特にフェスで演るような有名な曲だけでも知っておきたいなと思いました。
Spotifyでもアーティストの有名な曲は聞けますがフェスとは連携していないためどのアーティストがでるのか一目でわかるようにしました。
また学習中のReactの理解のためにも作成しました。


## 特に力を入れた点
- アーティスト名をクリックするだけで聞けるようUI/UXを意識
- アーティスト一覧をベタ書きではなく公式サイトからのスクレイピングでデータ取得
- Reactを使いSPAで開発
- レスポンシブに対応


## 機能一覧
- フェスに出演するアーティストの楽曲再生機能
- フェスに出ていなくてもアーティスト名を使っての検索機能


## 使用技術
- React '16.13.1'
- React Hooks
- React-router


## 良かった点
- フェスに出演するアーティストの予習をしたいという自分自身の欲しかったサービスが作れた（問題を解決できた）
- アーティスト一覧をスクレイピングで取得しているため他のフェスでも応用できる。
- Reactのpropsの受け渡しに関して学べた。
- JavaScriptのDOM操作に関して理解が進んだ。
- 制作期間6日間と期限を決めて開発できた。


## 反省点
- 簡単なアプリとは言えmasterブランチだけで作業するのは良くないと思った。
- Reactのアウトプットのつもりで始めたがAPIの操作に時間が取られてしまいあまりReactのアウトプットにはならなかった。
- APIの情報をどのコンポーネントに持たせるべきなのかわからなかった。


## 今後実装していきたい機能
- フェス一覧自体をもっと増やす。
- Spotifyに登録されていないアーティストはYouTubeやApple Musicなど他のAPIで補完する。
- 年別のフェス出演回数ランキングなどもあると面白そう。
- ゆくゆくはバックエンドも実装して曲の予習だけでなくフェス自体の情報が見れたり、ユーザー同士で情報を交換できるようにしたい。