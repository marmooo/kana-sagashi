const remSize = parseInt(getComputedStyle(document.documentElement).fontSize);
const tmpCanvas = document.createElement('canvas');
let size = 8;
let problemNum = 8;
let meiro = new Array(12);
let score = 0;
let counter = 0;
let processed;
const k3 = 'ページ,ブログ,サイト,メール,リンク,トップ,エリア,ボタン,ホテル,データ,リスト,ゲスト,グルメ,カート,ヘルプ,コード,ネット,プラン,テレビ,テーマ,ホーム,ペット,カメラ,ガイド,アップ,ウェブ,ゲーム,バイト,バイク,カード,サイズ,コピー,セット,ツアー,ファン,ユーザ,ソフト,ランク,ビデオ,ホール,ゴルフ,ルート,メイン,コラム,タウン,レシピ,アニメ,チラシ,ニーズ,ワード,コピペ,ドラマ,マーク,コース,ベビー,ヒット,レベル,ケース,ルーム,フォト,マップ,タイプ,ベース,ツール,キレイ,クリア,バナー,トイレ,ストア,サーバ,モデル,コチラ,ゲット,カバー,ルール,スキル,ギフト,ライブ,ビール,ローン,シーン,カット,プレイ,ピアノ,リース,チーム,ホビー,マンガ,モード,ベッド,ウィキ,マネー,パート,ランチ,アジア,コスメ,グッズ,エラー,プラス,ベスト,サロン,エステ,マウス,スパム,ホント,ヘルス,キッズ,カレー,グラフ,テスト,キャラ,ソース,ヒント,カラー,ガラス,マッチ,オール,カフェ,ポスト,セブン,ワイン,テニス,デート,サーチ,クラブ,ケーキ,イエス,カッコ,レンジ,サイン,アレゲ,ラジオ,アプリ,カラダ,パック,シフト,クイズ,スルー,セール,リスク,パーツ,キープ,モール,ドイツ,スコア,ツリー,ナース,コスト,マナー,リード,スキー,タバコ,ススメ,プレー,カキコ,ベータ,リアル,ノート,ピーク,ペース,ハリー,フリー,バック,テント,ライフ,ブーム,フード,バッグ,メトロ,ソナタ,クルマ,アナタ,クラス,ボール,ステキ,バブル,ゴール,スープ,ハワイ,ターン,ローマ,ヘッダ,ドック,ロック,スーツ,スター,ピアス,ネゴト,トーク,バンク,アート,プール,ハート,トマト,エース,ネスト,レター,トライ,タイヤ,オトク,ピンク,ショー,オペラ,シゴト,ホット,リズム,レース,インド,ブック,ラベル,マイク,パワー,ワーク,イラク,ビーチ,プロフ,サクラ,ベンチ,コンビ,ホムペ,リーグ,ギター,シルク,ヒミツ,ネック,タオル,メイク,センス,ココロ,メガネ,フェス,ハウス,ドール,メンテ,バンド,スイス,ピンチ,シェア,パスタ,オバマ,エール,フェア,ミセス,ガール,ロシア,クール,ニュー,コラボ,ドレス,ゴメン,ライン,マイル,タッグ,カナダ,オトコ,キング,タブー,カタチ,バトン,ハガキ,プラザ,マスク,アイヌ,シニア,パンツ,シール,ハーブ,マニア,タッチ,ソート,ベール,コダマ,コンペ,メイド,ワイド,ダウン,ルーツ,セレブ,コイン,グアム,シャレ,ウンチ,コトバ,ユダヤ,オトナ,オヤジ,コミュ,セリフ,ネズミ,プレス,ダイヤ,デスク,タワー,マット,リーダ,ノック,アラブ,シティ,レート,モンク,ブース,ホラー,コープ,シネマ,ズボン,ポーズ,ジャズ,ホクロ,ドコモ,アロマ,ダンス,ゲート,シェフ,ダーツ,リング,ナイフ,チップ,アヒル,キムチ,モダン,シート,フロー,イオン,バター,ラップ,ブルー,パーク,ガード,メタボ,サラダ,ボット,シャツ,ロマン,パーマ,ワキガ,キュー,ズラリ,スロー,ハンパ,ホスト,コート,シンポ,ナイス,ホタル,オーラ,スタブ,サイド,リボン,ウエア,ボディ,マート,マグロ,ソファ,ミサキ,キラー,サプリ,パネル,ピント,キッス,セルフ,サウナ,ウロコ,スゴイ,カバン,キチン,コタツ,パンフ,ニート,イラン,アイス,チーズ,リフト,ロング,ミナミ,ハッチ,ジャム,ニオイ,ピュア,ケンカ,レール,コップ,ニャン,オタク,ガイア,オッズ,ライト,モニタ,ジャケ,パズル,フライ,グレー,ハード,タンゴ,ボート,タンス,グッド,コール,カッパ,カーブ,ベット,ボード,バナナ,ピット,ズーム,デッキ,タイム,トルコ,クロス,アタシ,ヘッジ,エデン,チョコ,ランド,ロット,レンズ,テープ,ポット,グラス,ピック,コーチ,モラル,シグマ,ラスト,バレエ,パンク,チャリ,エキス,テラス,リトル,ブーツ,メロン,オミセ,ロビー'.split(',');
const k4 = 'コメント,クリック,サービス,ログイン,クチコミ,ユーザー,ニュース,チェック,レビュー,カテゴリ,ポイント,メニュー,ブラウザ,アクセス,ケータイ,ジャンル,イベント,スレッド,スポット,アパート,フォーム,サポート,クーポン,タイトル,イメージ,ビジネス,レンタル,ショップ,スタッフ,パソコン,システム,オススメ,スポーツ,スタート,アドレス,メルマガ,メーカー,レポート,オーナー,モバイル,グループ,スキップ,コンビニ,デザイン,ファイル,メンバー,オープン,センター,トピック,バランス,フィード,テキスト,オフィス,フレーム,イラスト,ラーメン,トラブル,アイテム,デジタル,ジャンプ,アルバム,アメリカ,サッカー,タクシー,セミナー,トラベル,スタイル,ビックリ,リリース,コミック,キッチン,レジャー,サークル,シリーズ,スペース,アメーバ,メリット,カタログ,ダメージ,ピッタリ,ドライブ,メディア,クリップ,ツッコミ,コーナー,クッキー,モチーフ,アピール,アイコン,サンプル,フォルダ,トラック,チケット,ブロガー,ショック,キャリア,シンプル,ブランド,スムーズ,カタカナ,クイック,カンタン,スクール,ドラッグ,チョット,リーダー,テーブル,ドメイン,チャンス,ノウハウ,レッスン,アラート,ポリシー,ブックス,エンジン,シューズ,イキイキ,ニコニコ,スーパー,カラメル,アトピー,ネクスト,コーヒー,マイカー,カラオケ,イレブン,フォロー,フランス,スピード,エントリ,ストレス,ボックス,キャンプ,エアコン,アパレル,パノラマ,ドリンク,デビュー,モットー,ポスター,ブロック,スイーツ,リリカル,アイドル,ポータル,ワクワク,オシゴト,レコード,プリント,モニター,スイッチ,ドクター,オシャレ,スッキリ,アレンジ,コトノハ,イタリア,ポケット,マスコミ,ラッキー,シンボル,マスター,メッシュ,マガジン,スカウト,ドキドキ,シャワー,リゾート,マーカー,チャート,ブラジル,デジカメ,サーバー,イマイチ,アイデア,ピープル,タレント,ボロボロ,ウォッチ,ウィルス,バイヤー,プラチナ,フレーズ,オーダー,ハッキリ,キリスト,マイナビ,マイナス,ノーベル,ランダム,シーズン,パーティ,イライラ,ニッポン,スタジオ,カップル,フレンド,トンネル,バラバラ,オーバー,ジャパン,トータル,フラット,ベトナム,シンクロ,キャディ,ヨロシク,アダルト,プリンタ,レーザー,セレクト,ポッター,ウロウロ,イギリス,カーソル,シングル,カウント,グッピー,ガソリン,ステージ,リロード,トレンド,ブレンド,チェーン,ボコボコ,デザート,パターン,キラキラ,ペディア,ライター,ヘルシー,エッセイ,ペースト,ストップ,マイケル,ソファー,テナント,スペイン,ブラック,ライバル,バタバタ,キャスト,アルプス,パチンコ,ダイヤル,アンテナ,ドロップ,ガッツリ,ブレード,ナンバー,エディタ,スケール,ディープ,スカート,イマドキ,モノクロ,グリーン,チョイス,インフラ,プロセス,ブレーキ,デパート,パチスロ,カーテン,ボーナス,フロント,データー,サイダー,インナー,ゴロゴロ,ビギナー,ミックス,ムービー,ミネラル,ファーム,パニック,プライス,イケメン,アバター,ステーキ,ウイルス,フレンチ,レッテル,サンクス,ゼンリン,スパイス,リセット,ミサイル,スペック,キャッチ,ディップ,ドラゴン,ヤンキー,ヘッダー,プライド,ブランク,バザール,フォント,ソムリエ,メキシコ,リウマチ,バルーン,シャープ,ハッピー,フィット,リサーチ,シナリオ,リスナー,バーゲン,ストック,コマンド,ファンド,アフリカ,ドシドシ,グラビア,フィルム,チャット,ハイフン,デイリー,ビニール,トラウマ,アニマル,カクテル,ハチミツ,ゴキブリ,リストラ,リーマン,シグナル,シロアリ,ユーモア,ロボット,オオカミ,アウター,ユニーク,ポップス,オレンジ,スライド,オッサン,カロリー,ポッコリ,スマート,ギリシャ,スタンプ,ガレージ,ローソン,オランダ,ケアマネ,ワールド,ハイテク,フレンズ,ラッパー,ラクラク,サントラ,シールド,ヒーロー,プリンス,サクサク,スケート,ダーリン,スロープ,ワクチン,アトリエ,ハンドル,ピジョン,ベランダ,ベンダー,マラソン,ステップ,ホルダー,トレード,ホイール,リビング,モノサシ,モヤモヤ,シルバー,ホイホイ,ガッチリ,カーナビ,コショウ,スリッパ,リバブル,クレーム,ベルギー,キャップ,スイスイ,タイガー,チャイム,フルーツ,カリスマ,キャベツ,ローカル,オンエア,オリコン,アラビア,ギリギリ,エジプト,カスタム,ビューア,トリビア,ベタベタ,タレコミ,クリーン,スプーン,パンドラ,エリート,キョトン,シトリン,レーベル,ガッカリ,ファイト,ジュース,ビビンバ,オムレツ,ネクタイ,ユーズド,サミット,ディスク,ツイート,グーグー,チベット,スペード,スピーチ,サウンド,バッチリ,グルグル,メートル,ニヤニヤ,ギャング,ブラウズ,プリズム,スクープ,フェリー,ビルダー,リコール,エンピツ,コテージ,プンプン,フェーズ,アジアン,パロディ,ピリオド,ロケット,リメイク,スライス,ダラダラ,ペルシャ,シリアル,ドリーム'.split(',');
const k5 = 'マンション,キーワード,ランキング,パスワード,レストラン,アルバイト,メッセージ,コンテンツ,プレゼント,エントリー,リクルート,リフォーム,カテゴリー,アンケート,キャンセル,オンライン,ウォレット,ウィンドウ,アドバイス,ダイエット,バーコード,レビュアー,ライセンス,クリニック,マイリスト,チャレンジ,インテリア,カルチャー,アウトドア,アカウント,プログラム,サムネイル,オプション,デリバリー,カレンダー,プレイヤー,レンタカー,アーカイブ,ファミリー,ヘルスケア,ログアウト,ヘアサロン,プレミアム,サインイン,リクエスト,マッサージ,タイミング,エンジニア,スクロール,オリジナル,コンサート,ブラウザー,エネルギー,リサイクル,アレルギー,マイホーム,コンテスト,クラシック,パーティー,キャッシュ,ターゲット,ペンション,トピックス,ウインドウ,コンセプト,チャンネル,ストーリー,ベンチャー,バラエティ,リラックス,ハイキング,パッケージ,パキスタン,バスケット,ベーシック,レイアウト,フリーター,ジャケット,ツーリング,レーシック,マニュアル,カウンター,クリスマス,フィギュア,ヨーロッパ,アクセント,スパイシー,スポンサー,グローバル,バージョン,ジュエリー,プレビュー,フライパン,トラベラー,スクリプト,クレジット,サポーター,ノミネート,フィールド,パートナー,ステータス,フォーラム,ブライダル,マーケット,ダイビング,ビューティ,パトロール,リサイタル,イタリアン,エピソード,サジェスト,ハムスター,プロバイダ,バルコニー,ボリューム,サーフィン,ワンピース,テクニック,テンション,タイムリー,デザイナー,コンパクト,シャッター,ドライバー,スタジアム,フィルター,グランプリ,トライアル,カーペット,メディカル,レゾナント,インパクト,エスニック,セグメント,アプローチ,キャンパス,アルコール,カルシウム,シャンプー,スペシャル,ワンルーム,ジャーナル,ボクシング,ギャンブル,アナリスト,タイムラグ,ペンネーム,プレーヤー,コンタクト,ランニング,パスポート,ノルウェイ,サイエンス,ミステリー,アナウンス,ストレート,アカデミー,スローガン,バーチャル,タイアップ,モノレール,フットケア,バイキング,ギャラリー,ハプニング,デンマーク,アイディア,ベビーカー,トッピング,ガスタンク,コンクール,ダイレクト,ディーラー,ナレーター,プログラマ,オペレータ,コミックス,ノベルティ,セッション,スクウェア,メカニズム,カスタマー,ストーカー,レディース,モンスター,リスペクト,パイオニア,サプライズ,デフォルト,ラッピング,フラッシュ,パラダイム,ビリヤード,マイリンク,プリペイド,ダイニング,ガスコンロ,インライン,ヘルメット,トレーナー,インターン,エンジョイ,マーケター,クオリティ,チェッカー,ナチュラル,ビッグバン,キャロット,インプット,ラーニング,リポジトリ,フルボッコ,ファックス,テクニカル,ブリーダー,ダンボール,プルダウン,クローズド,ビューワー,ポジション,ビジュアル,エレガント,オムライス,スクラップ,リコメンド,スニーカー,レギュラー,ダンジョン,ステッカー,セクション,ワーキング,レコメンド,デメリット,セパレート,レスポンス,バッテリー,プロポーズ,スティック,ファミレス,スライダー,ナビゲータ,アクション'.split(',');
const k6 = 'ホームページ,トップページ,ダウンロード,プロフィール,ショッピング,ウェブサイト,キャンペーン,ガイドライン,セキュリティ,オークション,プライバシー,コミュニティ,ファッション,コンピュータ,インストール,インタビュー,アーティスト,アットホーム,データベース,アンティーク,リニューアル,リアルタイム,ミュージック,ボランティア,ピックアップ,バックアップ,ネットワーク,ニックネーム,プレイリスト,テンプレート,ソフトウェア,クリーニング,リーズナブル,コントロール,スケジュール,メンテナンス,キャラクター,コレクション,サプリメント,サプライヤー,ビューティー,プロジェクト,ライトアップ,クリエイター,タグクラウド,プロデュース,ケータリング,テーマパーク,マネージャー,カスタマイズ,ワンポイント,ガーデニング,オンビジネス,チェックイン,インデックス,スタイリスト,サラリーマン,ラインナップ,トレーニング,ウエディング,シンポジウム,ウィークリー,バリアフリー,オリンピック,ホームメイト,パンフレット,フィッシング,オーガニック,ネットストア,チャリティー,コンクリート,アクセサリー,エレベーター,クリッピング,ベストセラー,フレグランス,アシスタント,マニフェスト,ギャザリング,オンデマンド,ディレクトリ,ビジネスマン,プライベート,ガイドブック,ディスプレイ,ダイジェスト,セレクション,アーキテクト,ファイナンス,キャッシング,テイクアウト,ナビゲーター,エージェント,トーナメント,マネジメント,リフレッシュ,インスパイア,フィクション,リストアップ,バラエティー,エキスパート,アップデート,ウェディング,ステーション,ウォーキング,ハンドブック,ヴァイオリン,アルゴリズム,ヘアスタイル,モデルルーム,レーティング,エクスプレス,ウェブページ,ヒートマップ,テクノロジー,ユニバーサル,ダイヤモンド,チャンピオン,コーティング,チャーシュー,シャーロック,クローゼット,フローリング,ショールーム,エクササイズ,ハイブリッド,バーベキュー,トップクラス,プラスチック,ユニフォーム,アナウンサー,カートリッジ,スタンダード,ヘリコプター,サンドイッチ,アドバイザー,インディーズ,リーザナブル,セッティング,インドネシア,アーカイブス,ワインセラー,マンツーマン,ブルーベリー,レファレンス,アライアンス,ライブラリー,インスパイヤ,ミーティング,カリキュラム,オーケストラ,ドッグワイン,クライアント,ロケーション,クルージング,ボーカロイド,チョコレート,ベースボール,プロバイダー,コントラスト,ファンクラブ,トレッキング,オフィシャル,デイサービス,エスカレート,ハードウェア,ローディング,アウトレット,プレッシャー,オンパレード,カウンセラー,パワーアップ,ハンバーガー'.split(',');
const idiomsList = [k3, k4, k5, k6];
let idioms = [].concat.apply([], idiomsList);
const words = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンヴガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォッャュー'.split('');
let level = 4;

function loadConfig() {
  if (localStorage.getItem('darkMode') == 1) {
    document.documentElement.dataset.theme = 'dark';
  }
}
loadConfig();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]]
  }
  return array;
}

function calcReply() {
  var reply = new Array(size * size);
  var trs = document.getElementById('meiro').children;
  for (var x=0; x<size; x++) {
    var tds = trs[x].children;
    for (var y=0; y<size; y++) {
      var selected = tds[y].classList.contains('table-primary');
      var hinted = tds[y].classList.contains('table-secondary');
      var pos = meiro[x][y];
      if (pos > 0 && (selected || hinted)) {
        reply[pos-1] = tds[y].innerText;
      }
    }
  }
  return reply;
}

function findMeiroIndex(n) {
  for (var x=0; x<size; x++) {
    for (var y=0; y<size; y++) {
      if (meiro[x][y] == n) {
        return x * size + y;
      }
    }
  }
  return -1;
}

function prependIdiomLink(idiom, correct) {
  var a = document.createElement('a');
  a.innerText = idiom;
  a.href = 'https://www.google.com/search?q=' + idiom + 'とは';
  a.target = '_blank';
  a.rel = 'noopener noreferer';
  if (correct) {
    a.className = 'btn btn-light m-1';
  } else {
    a.className = 'btn btn-secondary m-1';
  }
  solvedPanel.prepend(a);
}

function showSolved(reply, hinted) {
  var solvedPanel = document.getElementById('solvedPanel');
  var trs = document.getElementById('meiro').children;
  var j = 0;  var k = 0;
  for (var i=0; i<counter; i++) {
    var idiom = idioms[j];
    if (!processed[i]) {
      if (reply[i] == idiom[k]) {
        if (k == idiom.length - 1) {
          var pos = i - k + 1;
          if (processed[pos]) {
            var idx = findMeiroIndex(pos);
            var td = trs[Math.floor(idx / size)].children[idx % size];
            if (td.classList.contains('table-secondary')) {
              score += 1;
            } else {
              score += idiom.length;
            }
            prependIdiomLink(idiom, true);
          }
          document.getElementById('score').innerText = score;
        }
        processed[i] = true;
      } else {
        if (hinted) {
          var pos = i - k + 1;
          var idx = findMeiroIndex(pos);
          var td = trs[Math.floor(idx / size)].children[idx % size];
          td.className = '';
          td.classList.add('table-secondary');
        } else {
          prependIdiomLink(idiom, false);
          var pos = i - k;
          for (var l = pos; l < pos + idiom.length; l++) {
            processed[l] = true;
            var idx = findMeiroIndex(l+1);
            var td = trs[Math.floor(idx / size)].children[idx % size];
            td.className = '';
            td.classList.add('table-secondary');
          }
        }
      }
    }
    if (k == idiom.length - 1) {
      j += 1;  k = 0;
    } else {
      k += 1;
    }
  }
}

function showHint(reply) {
  var reply = calcReply();
  showSolved(reply, true);
}

function showAnswer() {
  var reply = calcReply();
  showSolved(reply, false);
  var trs = document.getElementById('meiro').children;
  for (var x=0; x<size; x++) {
    var tds = trs[x].children;
    for (var y=0; y<size; y++) {
      if (meiro[x][y] > 0) {
        tds[y].className = '';
        tds[y].classList.add('table-danger');
      }
    }
  }
  var startButton = document.getElementById('startButton');
  startButton.classList.remove('d-none');
  startButton.innerText = 'スタート';
  var answerButton = document.getElementById('answerButton');
  answerButton.classList.add('d-none');
}

function getNeighborText(trs, x, y, direction) {
  var text = trs[x].children[y].innerText;
  if (direction == 1) {
    if (meiro[x-1][y] != 0) {
      text += trs[x-1].children[y].innerText;
    }
  } else if (direction == 2) {
    if (meiro[x+1][y] != 0) {
      text += trs[x+1].children[y].innerText;
    }
  } else if (direction == 3) {
    if (meiro[x][y-1] != 0) {
      text += trs[x].children[y-1].innerText;
    }
  } else {
    if (meiro[x][y+1] != 0) {
      text += trs[x].children[y+1].innerText;
    }
  }
  return text;
}

function setNeighborText(trs, x, y, direction, text, isAnswer) {
  if (!isAnswer) {
    trs[x].children[y].innerText = text[0];
  }
  if (direction == 1) {
    trs[x-1].children[y].innerText = text[1];
  } else if (direction == 2) {
    trs[x+1].children[y].innerText = text[1];
  } else if (direction == 3) {
    trs[x].children[y-1].innerText = text[1];
  } else {
    trs[x].children[y+1].innerText = text[1];
  }
}

function generateRandomText(text, isAnswer) {
  if (isAnswer) {
    var first = text[0];
    for (var i=0; i<5; i++) {  // どうしても熟語ができてしまうケースがあるため回数打ち切り
      text = first + words[getRandomInt(0, words.length)];
      if (!includeIdiom(text)) { return text; }
    }
  } else {
    for (var i=0; i<5; i++) {  // どうしても熟語ができてしまうケースがあるため回数打ち切り
      for (var j=0; j<2; j++) {
        text[j] = words[getRandomInt(0, words.length)];
      }
      if (!includeIdiom(text)) { return text; }
    }
  }
  return text;
}

function includeIdiom(text) {
  if (idioms.includes(text.slice(0, 2))) {
    return true;
  } else {
    return false;
  }
}

function strictNeighbor(trs, x, y, direction, isAnswer) {
  var text = getNeighborText(trs, x, y, direction);
  if (text.length == 2) {  // 解答ノードを含まない時
    text = generateRandomText(text, isAnswer);
    setNeighborText(trs, x, y, direction, text, isAnswer);
  }
}

function strictSolution() {
  var trs = document.getElementById('meiro').children;
  for (var x=0; x<size; x++) {
    for (var y=0; y<size; y++) {
      if (meiro[x][y] == 0) {
        // 解答ノード以外は隣接ニ文字だけ見て熟語ができないようにする
        if (0 <= x-1) {
          strictNeighbor(trs, x, y, 1, false);
        }
        if (x+1 < size) {
          strictNeighbor(trs, x, y, 2, false);
        }
        if (0 <= y-1) {
          strictNeighbor(trs, x, y, 3, false);
        }
        if (y+1 < size) {
          strictNeighbor(trs, x, y, 4, false);
        }
      } else {
        // 解答ノードは別解ができないようにする
        var routes = getNeighborRoutes(x, y);
        for (var j=0; j<routes.length; j++) {
          strictNeighbor(trs, x, y, routes[j][2], true);
        }
      }
    }
  }
}

function startGame() {
  while (solvedPanel.firstChild) { solvedPanel.removeChild(solvedPanel.firstChild); }
  generateGame();
  strictSolution();
  var startButton = document.getElementById('startButton');
  startButton.classList.add('d-none');
  startButton.innerText = 'やり直し';
  var answerButton = document.getElementById('answerButton');
  answerButton.classList.remove('d-none');
}

function getNeighborRoutes(x, y) {
  var routes = [];
  if (0 <= x-1 && meiro[x-1][y] == 0) {
    routes.push([x-1, y, 1]);
  }
  if (x+1 < size && meiro[x+1][y] == 0) {
    routes.push([x+1, y, 2]);
  }
  if (0 <= y-1 && meiro[x][y-1] == 0) {
    routes.push([x, y-1, 3]);
  }
  if (y+1 < size && meiro[x][y+1] == 0) {
    routes.push([x, y+1, 4]);
  }
  return routes;
}

function paint(x, y, direction, n) {
  if (direction == 1) {
    for (var i=0; i<n; i++) {
      counter += 1;
      meiro[x-i][y] = counter;
    }
    return [x-n+1, y];
  } else if (direction == 2) {
    for (var i=0; i<n; i++) {
      counter += 1;
      meiro[x+i][y] = counter;
    }
    return [x+n-1, y];
  } else if (direction == 3) {
    for (var i=0; i<n; i++) {
      counter += 1;
      meiro[x][y-i] = counter;
    }
    return [x, y-n+1];
  } else {
    for (var i=0; i<n; i++) {
      counter += 1;
      meiro[x][y+i] = counter;
    }
    return [x, y+n-1];
  }
}

function p() {
  var str = '';
  for (var i=0; i<size; i++) {
    for (var j=0; j<size; j++) {
      str += meiro[i][j];
    }
    str += '\n';
  }
  console.log(str);
}

function isPassable(x, y, direction, n) {
  var passable = true;
  if (direction == 1) {
    if (x-n < 0) { return false; }
    for (var i=0; i<n; i++) {
      if (meiro[x-i][y] != 0) {
        passable = false;
        break;
      }
    }
  } else if (direction == 2) {
    if (size <= x+n) { return false; }
    for (var i=0; i<n; i++) {
      if (meiro[x+i][y] != 0) {
        passable = false;
        break;
      }
    }
  } else if (direction == 3) {
    if (y-n < 0) { return false; }
    for (var i=0; i<n; i++) {
      if (meiro[x][y-i] != 0) {
        passable = false;
        break;
      }
    }
  } else {
    if (size <= y+n) { return false; }
    for (var i=0; i<n; i++) {
      if (meiro[x][y+i] != 0) {
        passable = false;
        break;
      }
    }
  }
  return passable;
}

function generateGame() {
  // 10個の熟語を画面内に生成する
  idioms = shuffle(idioms);
  var generating = true;
  while (generating) {
    var x1 = 0;
    var y1 = getRandomInt(1, size-1);
    var painting = true;
    counter = 0;
    for (var x=0; x<size; x++) {
      meiro[x] = new Array(size);
      for (var y=0; y<size; y++) {
        meiro[x][y] = 0;
      }
    }
    var i = 0;
    var directionCount = 0;
    for (i = 0; i<problemNum; i++) {
      var painted = false;
      for (var j=0; j<5; j++) {  // 5回ペイントしてうまくいかなければ失敗
        var x = getRandomInt(0, size);
        var y = getRandomInt(0, size);
        var direction = getRandomInt(1, 5);
        if (isPassable(x, y, direction, idioms[i].length)) {
          // 熟語が反転していると難しいので一般的な方向に合わせる
          if (direction == 1) {
            paint(x-idioms[i].length+1, y, 2, idioms[i].length);
            directionCount += 0;
          } else if (direction == 3) {
            paint(x, y-idioms[i].length+1, 4, idioms[i].length);
            directionCount += 1;
          } else {
            paint(x, y, direction, idioms[i].length);
            directionCount += Math.floor(direction / 4);
          }
          painted = true;
          break;
        }
      }
      if (!painted) { break; }
    }
    if (i == problemNum) {
      if (directionCount != 0 && directionCount != problemNum) {
        // すべて同じ方向だと問題としてつまらない
        generating = false;
      }
    }
  }
  processed = new Array(counter);  // 回答リストのキャッシュを生成
  var meiroNode = document.getElementById('meiro');
  while(meiroNode.firstChild) { meiroNode.removeChild(meiroNode.firstChild); }
  for (var x=0; x<size; x++) {
    var tr = document.createElement('tr');
    meiroNode.appendChild(tr);
    for (var y=0; y<size; y++) {
      var td = document.createElement('td');
      td.innerText = words[getRandomInt(0, words.length)];
      tr.appendChild(td);
      td.onclick = function() {
        this.classList.toggle('table-primary');
      }
    }
  }
  var trs = meiroNode.children;
  var j = 0;  var k = 0;
  for (var i=1; i<=counter; i++) {
    var idx = findMeiroIndex(i);
    var idiom = idioms[j][k];
    var td = trs[Math.floor(idx / size)].children[idx % size];
    td.innerText = idiom;
    if (k == idioms[j].length - 1) {
      j += 1;  k = 0;
    } else {
      k += 1;
    }
  }
}

function resizeFontSize(node) {
  // https://stackoverflow.com/questions/118241/
  function getTextWidth(text, font) {
      // re-use canvas object for better performance
      // var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
      var context = tmpCanvas.getContext("2d");
      context.font = font;
      var metrics = context.measureText(text);
      return metrics.width;
  }
  function getTextRect(text, fontSize, font, lineHeight) {
    var lines = text.split('\n');
    var maxWidth = 0;
    var fontConfig = fontSize + 'px ' + font;
    for (var i=0; i<lines.length; i++) {
      var width = getTextWidth(lines[i], fontConfig);
      if (maxWidth < width) {
        maxWidth = width;
      }
    }
    return [maxWidth, fontSize * lines.length * lineHeight];
  }
  function getNodeRect() {
    var width = document.getElementById('container').clientWidth;
    var headerHeight = document.getElementById('header').clientHeight;
    var startButtonHeight = document.getElementById('startButton').clientHeight;
    var height = document.documentElement.clientHeight - headerHeight - startButtonHeight;
    return [width, height];
  }
  // function getPaddingRect(style) {
  //   var width = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  //   var height = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
  //   return [width, height];
  // }
  var style = getComputedStyle(node);
  var font = style.fontFamily;
  var fontSize = 16;  // parseFloat(style.fontSize);
  var lineHeight = 1.1;  // parseFloat(style.lineHeight) / fontSize;
  var nodeRect = getNodeRect();
  var textRect = getTextRect('禿', fontSize, font, lineHeight);
  var paddingRect = [remSize * 2 + 21, remSize * 1.5 + 6]; // getPaddingRect(style);

  // https://stackoverflow.com/questions/46653569/
  // Safariで正確な算出ができないので誤差ぶんだけ縮小化 (10%)
  var rowFontSize = fontSize * (nodeRect[0] - paddingRect[0]) / 12 / textRect[0] * 0.90;
  var colFontSize = fontSize * (nodeRect[1] - paddingRect[1]) / 12 / textRect[1] * 0.90;
  if (colFontSize < rowFontSize) {
    node.style.fontSize = colFontSize + 'px';
  } else {
    node.style.fontSize = rowFontSize + 'px';
  }
}

function toggleDarkMode() {
  if (localStorage.getItem('darkMode') == 1) {
    localStorage.setItem('darkMode', 0);
    delete document.documentElement.dataset.theme;
  } else {
    localStorage.setItem('darkMode', 1);
    document.documentElement.dataset.theme = 'dark';
  }
}

var timerText = document.getElementById('meiro');
resizeFontSize(timerText);
window.addEventListener('resize', function() {
  resizeFontSize(timerText);
});
generateGame();
strictSolution();
while (solvedPanel.firstChild) { solvedPanel.removeChild(solvedPanel.firstChild); }
showAnswer();

