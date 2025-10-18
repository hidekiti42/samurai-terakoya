const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]


// for文の場合

console.log("--- for文の実行 (全祝日を表示) ---");

for (let i = 0; i < holidays.length; i++) {
  // holidays[i] で配列のi番目の要素にアクセス
  console.log(`${holidays[i]}`);
}

// while文の場合

console.log("\n--- while文の実行 (全祝日を表示) ---");

let index = 0; // カウンター変数を初期化

// indexが配列の要素数未満の間、繰り返しを実行
while (index < holidays.length) {
    // holidays[index] で配列のindex番目の要素にアクセス
    console.log(`${holidays[index]}`);
    index++; // カウンター変数を手動で更新
}