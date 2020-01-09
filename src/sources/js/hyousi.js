class Random {
  constructor(seed = 88675123) {
    this.x = 123456789;
    this.y = 362436069;
    this.z = 521288629;
    this.w = seed;
  }

  next() {
    let t;

    t = this.x ^ (this.x << 11);
    this.x = this.y;
    this.y = this.z;
    this.z = this.w;
    return (this.w = this.w ^ (this.w >>> 19) ^ (t ^ (t >>> 8)));
  }
}

function tramp(name) {
  let tramp_game_name = new Array();
  tramp_game_name = [
    "29",
    "51",
    "アメリカンページワン",
    "ウインクキラー",
    "うすのろ",
    "絵取り",
    "オンブル",
    "カシノ",
    "カジノウォー",
    "カップル",
    "カナスタ",
    "カリビアンスタッド",
    "カルキュレーション",
    "キャンフィールド",
    "クリベッジ",
    "クレイジーエイト",
    "クロンダイク",
    "ゴルフ",
    "コンキアン",
    "拱猪",
    "コントラクトブリッジ",
    "ケン紅点",
    "ジジ抜き",
    "7並べ",
    "シットヘッド",
    "ジャック叩き",
    "争上游",
    "神経衰弱",
    "ジン・ラミー",
    "スカート",
    "スコパ",
    "ストリップ・ポーカー",
    "スパイダー",
    "スパイト・アンド・マリス",
    "スピード",
    "スペード",
    "セブンアップ",
    "セブンカード・スタッド",
    "セブンブリッジ",
    "戦争",
    "大富豪",
    "ダウト",
    "鋤大D",
    "ツーテンジャック",
    "テキサス・ホールデム",
    "デューズ・ワイルズ",
    "闘地主",
    "ドゥラーク",
    "ドボン",
    "トラントエカラント",
    "トレッセッテ",
    "ナポレオン(イギリス)",
    "ナポレオン(日本)",
    "二・八",
    "ハーツ",
    "パイ・ゴウ・ポーカー",
    "バカラ, バカラバンク",
    "ババ抜き",
    "パンギンギ",
    "ピケ",
    "ピノクル",
    "ピラミッド",
    "ファイブハンドレッド",
    "ファロ",
    "豚のしっぽ",
    "2人用スカート",
    "ブラグ",
    "ブラックジャック",
    "フリーセル",
    "ブリスコラ",
    "プリミエラ",
    "プレフェランス",
    "ブロット",
    "ページワン",
    "ホイスト",
    "ポーカー",
    "ポープ・ジョーン",
    "ポッヘン",
    "マイティ-",
    "ミニバカラ",
    "ヤス",
    "ユーカー",
    "四つ葉のクローバー",
    "ラミー",
    "レットイットライド",
    "レッドドッグ"
  ];

  let tramp_game_url = [
    "https://ja.wikipedia.org/wiki/29",
    "https://ja.wikipedia.org/wiki/51",
    "https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%AF%E3%83%B3",
    "https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%A4%E3%83%B3%E3%82%AF%E3%82%AD%E3%83%A9%E3%83%BC",
    "https://ja.wikipedia.org/wiki/%E3%81%86%E3%81%99%E3%81%AE%E3%82%8D",
    "https://ja.wikipedia.org/wiki/%E7%B5%B5%E5%8F%96%E3%82%8A",
    "https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%B3%E3%83%96%E3%83%AB",
    "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%82%B7%E3%83%8E",
    "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%82%B8%E3%83%8E%E3%82%A6%E3%82%A9%E3%83%BC",
    "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%83%E3%83%97%E3%83%AB_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%8A%E3%82%B9%E3%82%BF",
    "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AA%E3%83%93%E3%82%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%83%E3%83%89",
    "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%82%AD%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3",
    "https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89",
    "https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AA%E3%83%99%E3%83%83%E3%82%B8_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AC%E3%82%A4%E3%82%B8%E3%83%BC%E3%82%A8%E3%82%A4%E3%83%88",
    "https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%83%B3%E3%83%80%E3%82%A4%E3%82%AF",
    "https://ja.wikipedia.org/wiki/%E3%82%B4%E3%83%AB%E3%83%95_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%B3%E3%82%AD%E3%82%A2%E3%83%B3",
    "https://ja.wikipedia.org/wiki/%E6%8B%B1%E7%8C%AA",
    "https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%B3%E3%83%88%E3%83%A9%E3%82%AF%E3%83%88%E3%83%96%E3%83%AA%E3%83%83%E3%82%B8",
    "https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%B3%E7%B4%85%E7%82%B9",
    "https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%B8%E6%8A%9C%E3%81%8D",
    "https://ja.wikipedia.org/wiki/7%E4%B8%A6%E3%81%B9",
    "https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%83%E3%83%88%E3%83%98%E3%83%83%E3%83%89",
    "https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A3%E3%83%83%E3%82%AF%E5%8F%A9%E3%81%8D",
    "https://ja.wikipedia.org/wiki/%E4%BA%89%E4%B8%8A%E6%B8%B8",
    "https://ja.wikipedia.org/wiki/%E7%A5%9E%E7%B5%8C%E8%A1%B0%E5%BC%B1_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%B3%E3%83%BB%E3%83%A9%E3%83%9F%E3%83%BC",
    "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%AB%E3%83%BC%E3%83%88_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%B3%E3%83%91",
    "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%88%E3%83%AA%E3%83%83%E3%83%97%E3%83%BB%E3%83%9D%E3%83%BC%E3%82%AB%E3%83%BC",
    "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%91%E3%82%A4%E3%83%80%E3%83%BC_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%91%E3%82%A4%E3%83%88%E3%83%BB%E3%82%A2%E3%83%B3%E3%83%89%E3%83%BB%E3%83%9E%E3%83%AA%E3%82%B9",
    "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%94%E3%83%BC%E3%83%89_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%9A%E3%83%BC%E3%83%89_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%82%BB%E3%83%96%E3%83%B3%E3%82%A2%E3%83%83%E3%83%97_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%82%BB%E3%83%96%E3%83%B3%E3%82%AB%E3%83%BC%E3%83%89%E3%83%BB%E3%82%B9%E3%82%BF%E3%83%83%E3%83%89",
    "https://ja.wikipedia.org/wiki/%E3%82%BB%E3%83%96%E3%83%B3%E3%83%96%E3%83%AA%E3%83%83%E3%82%B8",
    "https://ja.wikipedia.org/wiki/%E6%88%A6%E4%BA%89_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%AF%8C%E8%B1%AA",
    "https://ja.wikipedia.org/wiki/%E3%83%80%E3%82%A6%E3%83%88",
    "https://ja.wikipedia.org/wiki/%E9%8B%A4%E5%A4%A7D",
    "https://ja.wikipedia.org/wiki/%E3%83%84%E3%83%BC%E3%83%86%E3%83%B3%E3%82%B8%E3%83%A3%E3%83%83%E3%82%AF",
    "https://ja.wikipedia.org/wiki/%E3%83%86%E3%82%AD%E3%82%B5%E3%82%B9%E3%83%BB%E3%83%9B%E3%83%BC%E3%83%AB%E3%83%87%E3%83%A0",
    "https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%A5%E3%83%BC%E3%82%BA%E3%83%BB%E3%83%AF%E3%82%A4%E3%83%AB%E3%82%BA",
    "https://ja.wikipedia.org/wiki/%E9%97%98%E5%9C%B0%E4%B8%BB",
    "https://ja.wikipedia.org/wiki/%E3%83%89%E3%82%A5%E3%83%A9%E3%83%BC%E3%82%AF",
    "https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%9C%E3%83%B3",
    "https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%A9%E3%83%B3%E3%83%88%E3%82%A8%E3%82%AB%E3%83%A9%E3%83%B3%E3%83%88",
    "https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AC%E3%83%83%E3%82%BB%E3%83%83%E3%83%86",
    "https://ja.wikipedia.org/wiki/%E3%83%8A%E3%83%9D%E3%83%AC%E3%82%AA%E3%83%B3_(%E3%82%A4%E3%82%AE%E3%83%AA%E3%82%B9%E3%81%AE%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%83%8A%E3%83%9D%E3%83%AC%E3%82%AA%E3%83%B3_(%E6%97%A5%E6%9C%AC%E3%81%AE%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E4%BA%8C%E3%83%BB%E5%85%AB",
    "https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%BC%E3%83%84_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%AB%E3%83%A9_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%AB%E3%83%A9%E3%83%90%E3%83%B3%E3%82%AF",
    "https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%90%E6%8A%9C%E3%81%8D",
    "https://ja.wikipedia.org/wiki/%E3%83%91%E3%83%B3%E3%82%AE%E3%83%B3%E3%82%AE",
    "https://ja.wikipedia.org/wiki/%E3%83%94%E3%82%B1_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%83%94%E3%83%8E%E3%82%AF%E3%83%AB",
    "https://ja.wikipedia.org/wiki/%E3%83%94%E3%83%A9%E3%83%9F%E3%83%83%E3%83%89_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%96%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AC%E3%83%83%E3%83%89",
    "https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%AD_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E8%B1%9A%E3%81%AE%E3%81%97%E3%81%A3%E3%81%BD",
    "https://ja.wikipedia.org/wiki/2%E4%BA%BA%E7%94%A8%E3%82%B9%E3%82%AB%E3%83%BC%E3%83%88",
    "https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%A9%E3%82%B0",
    "https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B8%E3%83%A3%E3%83%83%E3%82%AF",
    "https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AA%E3%83%BC%E3%82%BB%E3%83%AB",
    "https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%AA%E3%82%B9%E3%82%B3%E3%83%A9",
    "https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%AA%E3%83%9F%E3%82%A8%E3%83%A9",
    "https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%AC%E3%83%95%E3%82%A7%E3%83%A9%E3%83%B3%E3%82%B9",
    "https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%AD%E3%83%83%E3%83%88",
    "https://ja.wikipedia.org/wiki/%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%AF%E3%83%B3",
    "https://ja.wikipedia.org/wiki/%E3%83%9B%E3%82%A4%E3%82%B9%E3%83%88",
    "https://ja.wikipedia.org/wiki/%E3%83%9D%E3%83%BC%E3%82%AB%E3%83%BC",
    "https://ja.wikipedia.org/wiki/%E3%83%9D%E3%83%BC%E3%83%97%E3%83%BB%E3%82%B8%E3%83%A7%E3%83%BC%E3%83%B3",
    "https://ja.wikipedia.org/wiki/%E3%83%9D%E3%83%83%E3%83%98%E3%83%B3",
    "https://ja.wikipedia.org/wiki/%E3%83%9E%E3%82%A4%E3%83%86%E3%82%A3_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%83%9F%E3%83%8B%E3%83%90%E3%82%AB%E3%83%A9",
    "https://ja.wikipedia.org/wiki/%E3%83%A4%E3%82%B9_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%BC%E3%82%AB%E3%83%BC",
    "https://ja.wikipedia.org/wiki/%E5%9B%9B%E3%81%A4%E8%91%89%E3%81%AE%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%90%E3%83%BC_(%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B2%E3%83%BC%E3%83%A0)",
    "https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%9F%E3%83%BC",
    "https://ja.wikipedia.org/wiki/%E3%83%AC%E3%83%83%E3%83%88%E3%82%A4%E3%83%83%E3%83%88%E3%83%A9%E3%82%A4%E3%83%89",
    "https://ja.wikipedia.org/wiki/%E3%83%AC%E3%83%83%E3%83%89%E3%83%89%E3%83%83%E3%82%B0"
  ];

  const seed = 100;
  const random = new Random(seed);
  let tramp_length = tramp_game_name.length;
  let sum_number = 0;
  for (let i = 0; i < name.length; i++) {
    let code_number = name[i].charCodeAt(0);
    sum_number += random.next() * code_number;
  }

  sum_number = random.next() * sum_number;
  random_number = sum_number % tramp_length;
  random_number = Math.abs(random_number);

  // alert(random_number + "/" + tramp_game_name.length);
  // alert(tramp_game_name[random_number] + ":" + tramp_game_url[random_number]);

  _tramp_array = [
    tramp_game_name[random_number],
    tramp_game_url[random_number]
  ];

  /*
  tramp_array = new Array(
    tramp_game_name[random_number],
    tramp_game_url[random_number]
  );
  */

  return _tramp_array;
}
